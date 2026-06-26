import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import "./App.css";

const typeColors = {
  InteriorWall: 0x008000,
  ExteriorWall: 0xffb400,
  Roof: 0x800000,
  InteriorFloor: 0x80ffff,
  ExposedFloor: 0x40b4ff,
  Shade: 0xffce9d,
  UndergroundWall: 0xa55200,
  UndergroundSlab: 0x804000,
  Ceiling: 0xff8080,
  SurfaceAir: 0xffff00,
  UndergroundCeiling: 0x408080,
  RaisedFloor: 0x4b417d,
  SlabOnGrade: 0x804000,
  FreestandingColumn: 0x808080,
  EmbeddedColumn: 0x80806e,
  Unknown: 0x94a3b8,
};

const surfaceTypeOptions = Object.keys(typeColors).filter((key) => key !== "Unknown");
const openingTypeOptions = ["FixedWindow", "OperableWindow", "Door", "Skylight", "Air", "Unknown"];
const openingTint = 0x6ecff6;

const emptySurface = { id: "", area: 0, zoneNames: [], levelIds: [], surfaceType: "Unknown" };
const emptyOpening = { id: "", area: 0, openingType: "Unknown", levelIds: [], parentSurfaceId: "" };

function App() {
  const canvasRef = useRef(null);
  const modelGroupRef = useRef(new THREE.Group());
  const raycasterRef = useRef(new THREE.Raycaster());
  const pickCycleRef = useRef({ key: "", index: 0, ids: [] });

  const [doc, setDoc] = useState(null);
  const [surfaces, setSurfaces] = useState([]);
  const [openings, setOpenings] = useState([]);
  const [levels, setLevels] = useState([]);
  const [pendingEdits, setPendingEdits] = useState(new Map());
  const [selectedId, setSelectedId] = useState(null);
  const [selectedKind, setSelectedKind] = useState("surface");
  const [selectedSurfaceIds, setSelectedSurfaceIds] = useState(new Set());
  const [newOpeningType, setNewOpeningType] = useState("FixedWindow");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [xrayMode, setXrayMode] = useState(false);
  const [hideExterior, setHideExterior] = useState(false);
  const [showOpenings, setShowOpenings] = useState(true);
  const [status, setStatus] = useState("No model");
  const [sourceFileName, setSourceFileName] = useState("");
  const [controls, setControls] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);

  const meshesRef = useRef(new Map());
  const openingMeshesRef = useRef(new Map());

  const selectedSurface = useMemo(
    () => surfaces.find((surface) => surface.id === selectedId) || emptySurface,
    [surfaces, selectedId]
  );

  const selectedSurfaces = useMemo(
    () => surfaces.filter((surface) => selectedSurfaceIds.has(surface.id)),
    [surfaces, selectedSurfaceIds]
  );

  const selectedSurfaceTypeValue = useMemo(() => {
    if (selectedKind !== "surface" || selectedSurfaces.length === 0) return "";
    const types = selectedSurfaces.map(
      (surface) => pendingEdits.get(`surface:${surface.id}`) || surface.surfaceType
    );
    return types.every((type) => type === types[0]) ? types[0] : "";
  }, [pendingEdits, selectedKind, selectedSurfaces]);

  const selectedOpening = useMemo(
    () => openings.find((opening) => opening.id === selectedId) || emptyOpening,
    [openings, selectedId]
  );

  function updateSelectionHighlights() {
    meshesRef.current.forEach((mesh, surfaceId) => {
      const selected = selectedKind === "surface" && selectedSurfaceIds.has(surfaceId);
      mesh.material.emissive?.setHex(selected ? 0x1f2937 : 0x000000);
    });
    openingMeshesRef.current.forEach((mesh, openingId) => {
      const selected = selectedKind === "opening" && selectedId === openingId;
      mesh.material.emissive?.setHex(selected ? 0x1f2937 : 0x000000);
    });
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    THREE.Object3D.DEFAULT_UP.set(0, 0, 1);

    const sceneInstance = new THREE.Scene();
    sceneInstance.background = new THREE.Color(0x0b0f14);

    const cameraInstance = new THREE.PerspectiveCamera(
      50,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      5000
    );
    cameraInstance.up.set(0, 0, 1);
    cameraInstance.position.set(20, 20, 20);

    const rendererInstance = new THREE.WebGLRenderer({ canvas, antialias: true });
    rendererInstance.setPixelRatio(window.devicePixelRatio || 1);
    rendererInstance.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    const keyLight = new THREE.DirectionalLight(0xffffff, 0.7);
    keyLight.position.set(10, 20, 10);
    sceneInstance.add(ambient, keyLight);

    const grid = new THREE.GridHelper(200, 40, 0x2a9d8f, 0x1f2937);
    grid.rotation.x = Math.PI / 2;
    sceneInstance.add(grid);

    const axes = new THREE.AxesHelper(50);
    sceneInstance.add(axes);

    sceneInstance.add(modelGroupRef.current);

    const controlsInstance = new OrbitControls(cameraInstance, rendererInstance.domElement);
    controlsInstance.enableDamping = true;

    setCamera(cameraInstance);
    setRenderer(rendererInstance);
    setControls(controlsInstance);

    let animationFrame;
    const animate = () => {
      animationFrame = requestAnimationFrame(animate);
      controlsInstance.update();
      rendererInstance.render(sceneInstance, cameraInstance);
    };
    animate();

    const handleResize = () => {
      cameraInstance.aspect = canvas.clientWidth / canvas.clientHeight;
      cameraInstance.updateProjectionMatrix();
      rendererInstance.setSize(canvas.clientWidth, canvas.clientHeight, false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrame);
      controlsInstance.dispose();
      rendererInstance.dispose();
    };
  }, []);

  useEffect(() => {
    rebuildScene();
  }, [surfaces, openings, camera, controls]);

  useEffect(() => {
    applyLevelFilter();
  }, [selectedLevel, surfaces]);

  useEffect(() => {
    updateSurfaceMaterials(meshesRef, xrayMode);
    updateOpeningMaterials(openingMeshesRef);
    applyExteriorVisibility();
  }, [xrayMode, hideExterior, surfaces, openings, showOpenings]);

  useEffect(() => {
    updateSelectionHighlights();
  }, [selectedKind, selectedId, selectedSurfaceIds, surfaces, openings]);

  const visibleSurfaces = useMemo(() => {
    if (selectedLevel === "all") return surfaces;
    return surfaces.filter((surface) => surface.levelIds.includes(selectedLevel));
  }, [surfaces, selectedLevel]);

  const visibleOpenings = useMemo(() => {
    if (selectedLevel === "all") return openings;
    return openings.filter((opening) => opening.levelIds.includes(selectedLevel));
  }, [openings, selectedLevel]);

  const pendingCount = pendingEdits.size;

  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = reader.result;
        const { doc: parsedDoc, surfaces: parsedSurfaces, levels: parsedLevels, openings: parsedOpenings } = parseGbxml(text);
        setDoc(parsedDoc);
        setSurfaces(parsedSurfaces);
        setOpenings(parsedOpenings);
        setLevels(parsedLevels);
        setPendingEdits(new Map());
        setSelectedLevel("all");
        setSelectedId(null);
        setSelectedKind("surface");
        setSelectedSurfaceIds(new Set());
        setSourceFileName(file.name);
        setStatus(`Loaded ${parsedSurfaces.length} surfaces`);
      } catch (error) {
        console.error(error);
        setStatus("Failed to parse GBXML");
      }
    };
    reader.readAsText(file);
  };

  const clearSelectionHighlight = () => {
    meshesRef.current.forEach((mesh) => mesh.material.emissive?.setHex(0x000000));
    openingMeshesRef.current.forEach((mesh) => mesh.material.emissive?.setHex(0x000000));
  };

  const selectSurface = (surfaceId, additive = false) => {
    if (!surfaceId) return;
    const surface = surfaces.find((item) => item.id === surfaceId);
    if (!surface) return;
    if (selectedLevel !== "all" && !surface.levelIds.includes(selectedLevel)) return;

    clearSelectionHighlight();
    setSelectedKind("surface");
    if (additive) {
      setSelectedSurfaceIds((prev) => {
        const next = selectedKind === "surface" ? new Set(prev) : new Set();
        if (next.has(surfaceId)) {
          next.delete(surfaceId);
        } else {
          next.add(surfaceId);
        }
        const nextIds = Array.from(next);
        setSelectedId(nextIds.length ? nextIds[nextIds.length - 1] : null);
        return next;
      });
    } else {
      setSelectedSurfaceIds(new Set([surfaceId]));
      setSelectedId(surfaceId);
    }
  };

  const selectOpening = (openingId) => {
    if (!openingId) return;
    const opening = openings.find((item) => item.id === openingId);
    if (!opening) return;
    if (selectedLevel !== "all" && !opening.levelIds.includes(selectedLevel)) return;
    if (!showOpenings) return;

    clearSelectionHighlight();
    setSelectedKind("opening");
    setSelectedId(openingId);
    setSelectedSurfaceIds(new Set());

    const mesh = openingMeshesRef.current.get(openingId);
    if (mesh) {
      mesh.material.emissive = new THREE.Color(0x1f2937);
    }
  };

  const handlePick = (event) => {
    if (!camera) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    );

    const raycaster = raycasterRef.current;
    raycaster.setFromCamera(mouse, camera);
    const meshes = [
      ...Array.from(meshesRef.current.values()),
      ...(showOpenings ? Array.from(openingMeshesRef.current.values()) : []),
    ];
    const hits = raycaster.intersectObjects(meshes, false);

    if (hits.length) {
      // Prefer an internal floor when clicking from above.
      if (!event.shiftKey) {
        const floorHit = hits.find((hit) => {
          if (!hit.object?.userData?.surfaceId) return false;
          const surface = surfaces.find((item) => item.id === hit.object.userData.surfaceId);
          return surface ? surface.surfaceType === "InteriorFloor" : false;
        });
        if (floorHit) {
          selectSurface(floorHit.object.userData.surfaceId, event.ctrlKey || event.metaKey);
          return;
        }
      }

      const candidates = hits
        .map((hit) => hit.object)
        .filter(Boolean)
        .filter((root) => {
          if (selectedLevel === "all") return true;
          const surface = root.userData.surfaceId
            ? surfaces.find((item) => item.id === root.userData.surfaceId)
            : null;
          const opening = root.userData.openingId
            ? openings.find((item) => item.id === root.userData.openingId)
            : null;
          const levelIds = surface ? surface.levelIds : opening ? opening.levelIds : [];
          return levelIds.includes(selectedLevel);
        });

      if (!candidates.length) return;

      const clickKey = `${Math.round(event.clientX)}:${Math.round(event.clientY)}:${selectedLevel}`;
      const ids = candidates.map((root) => root.userData.surfaceId || root.userData.openingId);

      if (event.shiftKey && pickCycleRef.current.key === clickKey && sameIdList(pickCycleRef.current.ids, ids)) {
        pickCycleRef.current.index = (pickCycleRef.current.index + 1) % ids.length;
      } else {
        pickCycleRef.current = { key: clickKey, index: 0, ids };
      }

      const pickedRoot = candidates[pickCycleRef.current.index];
      if (pickedRoot.userData.surfaceId) {
        selectSurface(pickedRoot.userData.surfaceId, event.ctrlKey || event.metaKey);
      } else if (pickedRoot.userData.openingId) {
        selectOpening(pickedRoot.userData.openingId);
      }
    }
  };

  const handleSurfaceTypeChange = (event) => {
    const nextType = event.target.value;
    const targetSurfaceIds =
      selectedKind === "surface" && selectedSurfaceIds.size > 0
        ? Array.from(selectedSurfaceIds)
        : selectedSurface?.id
          ? [selectedSurface.id]
          : [];
    if (targetSurfaceIds.length === 0) return;

    setPendingEdits((prev) => {
      const next = new Map(prev);
      targetSurfaceIds.forEach((surfaceId) => {
        next.set(`surface:${surfaceId}`, nextType);
      });
      return next;
    });
  };

  const handleOpeningTypeChange = (event) => {
    const nextType = event.target.value;
    if (!selectedOpening?.id) return;
    setPendingEdits((prev) => {
      const next = new Map(prev);
      next.set(`opening:${selectedOpening.id}`, nextType);
      return next;
    });
  };

  const applyPendingEdits = () => {
    if (!doc || pendingEdits.size === 0) return;
    const { updatedSurfaces, updatedOpenings } = applyEditsToModel(surfaces, openings, pendingEdits);
    setSurfaces(updatedSurfaces);
    setOpenings(updatedOpenings);
    setPendingEdits(new Map());
    setStatus("Model updated");
  };

  const applyEditsToModel = (sourceSurfaces, sourceOpenings, edits) => {
    const updatedSurfaces = sourceSurfaces.map((surface) => {
      const key = `surface:${surface.id}`;
      if (!edits.has(key)) return surface;
      const newType = edits.get(key);
      surface.element.setAttribute("surfaceType", newType);
      if (meshesRef.current.has(surface.id)) {
        meshesRef.current.get(surface.id).material.color.setHex(getSurfaceColor(newType));
      }
      return { ...surface, surfaceType: newType };
    });

    const updatedOpenings = sourceOpenings.map((opening) => {
      const key = `opening:${opening.id}`;
      if (!edits.has(key)) return opening;
      const newType = edits.get(key);
      opening.element.setAttribute("openingType", newType);
      return { ...opening, openingType: newType };
    });

    return { updatedSurfaces, updatedOpenings };
  };

  const deleteSelectedSurface = () => {
    if (!selectedSurface?.id) return;
    const confirmed = window.confirm(`Delete surface ${selectedSurface.id}? This will remove its openings too.`);
    if (!confirmed) return;

    clearSelectionHighlight();
    if (selectedSurface.element?.parentNode) {
      selectedSurface.element.parentNode.removeChild(selectedSurface.element);
    }

    const openingIdsToRemove = new Set(
      openings.filter((opening) => opening.parentSurfaceId === selectedSurface.id).map((opening) => opening.id)
    );

    setSurfaces((prev) => prev.filter((surface) => surface.id !== selectedSurface.id));
    setOpenings((prev) => prev.filter((opening) => opening.parentSurfaceId !== selectedSurface.id));
    setPendingEdits((prev) => {
      const next = new Map(prev);
      next.delete(`surface:${selectedSurface.id}`);
      openingIdsToRemove.forEach((openingId) => next.delete(`opening:${openingId}`));
      return next;
    });
    setSelectedId(null);
    setSelectedKind("surface");
    setSelectedSurfaceIds(new Set());
    setStatus(`Deleted surface ${selectedSurface.id}`);
  };

  const convertSelectedSurfaceToOpening = () => {
    if (!doc || !selectedSurface?.id || !selectedSurface.element || selectedSurface.points.length < 3) return;

    const sourceGeometry = getFirstChild(selectedSurface.element, "PlanarGeometry");
    if (!sourceGeometry) {
      setStatus("Selected surface has no geometry to convert");
      return;
    }

    const hostSurface = findOpeningHostSurface(selectedSurface, surfaces);
    if (!hostSurface) {
      setStatus(`No host surface found for ${selectedSurface.id}`);
      return;
    }

    const openingId = makeUniqueOpeningId(hostSurface.id, openings);
    const namespace = hostSurface.element.namespaceURI || doc.documentElement.namespaceURI || null;
    const openingElement = namespace ? doc.createElementNS(namespace, "Opening") : doc.createElement("Opening");
    openingElement.setAttribute("id", openingId);
    openingElement.setAttribute("openingType", newOpeningType);
    openingElement.appendChild(sourceGeometry.cloneNode(true));
    hostSurface.element.appendChild(openingElement);

    if (selectedSurface.element.parentNode) {
      selectedSurface.element.parentNode.removeChild(selectedSurface.element);
    }

    const nextOpening = {
      id: openingId,
      element: openingElement,
      openingType: newOpeningType,
      points: selectedSurface.points.map((point) => point.clone()),
      area: selectedSurface.area,
      levelIds: hostSurface.levelIds.length ? [...hostSurface.levelIds] : [...selectedSurface.levelIds],
      parentSurfaceId: hostSurface.id,
    };

    clearSelectionHighlight();
    setSurfaces((prev) => prev.filter((surface) => surface.id !== selectedSurface.id));
    setOpenings((prev) => [...prev, nextOpening]);
    setPendingEdits((prev) => {
      const next = new Map(prev);
      next.delete(`surface:${selectedSurface.id}`);
      return next;
    });
    setShowOpenings(true);
    setSelectedKind("opening");
    setSelectedId(openingId);
    setSelectedSurfaceIds(new Set());
    setStatus(`Converted ${selectedSurface.id} to ${newOpeningType}`);
  };

  const downloadGbxml = () => {
    if (!doc) return;
    if (pendingEdits.size > 0) {
      const { updatedSurfaces, updatedOpenings } = applyEditsToModel(surfaces, openings, pendingEdits);
      setSurfaces(updatedSurfaces);
      setOpenings(updatedOpenings);
      setPendingEdits(new Map());
    }
    const serializer = new XMLSerializer();
    const xmlString = serializer.serializeToString(doc);
    const blob = new Blob([xmlString], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = makeEditedFileName(sourceFileName);
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const rebuildScene = () => {
    const group = modelGroupRef.current;
    group.clear();
    meshesRef.current.clear();
    openingMeshesRef.current.clear();

    surfaces.forEach((surface) => {
      if (!surface.points.length) return;
      const geometry = buildSurfaceGeometry(surface.points);
      if (!geometry) return;

      const materialSettings = getMaterialSettings(surface.surfaceType, xrayMode);
      const material = new THREE.MeshStandardMaterial({
        color: getSurfaceColor(surface.surfaceType),
        transparent: materialSettings.transparent,
        opacity: materialSettings.opacity,
        depthWrite: materialSettings.depthWrite,
        side: THREE.DoubleSide,
        roughness: 0.45,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData.surfaceId = surface.id;
      mesh.userData.surfaceType = surface.surfaceType;
      group.add(mesh);

      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry),
        new THREE.LineBasicMaterial({ color: 0x1f2937 })
      );
      edges.raycast = () => null;
      mesh.add(edges);
      mesh.userData.edges = edges;

      meshesRef.current.set(surface.id, mesh);
      setPickability(mesh);
    });

    openings.forEach((opening) => {
      if (!opening.points.length) return;
      const geometry = buildSurfaceGeometry(opening.points);
      if (!geometry) return;

      const material = new THREE.MeshStandardMaterial({
        color: openingTint,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45,
        roughness: 0.15,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData.openingId = opening.id;
      mesh.userData.kind = "opening";
      mesh.renderOrder = 2;
      modelGroupRef.current.add(mesh);

      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry),
        new THREE.LineBasicMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.7 })
      );
      edges.raycast = () => null;
      edges.renderOrder = 3;
      mesh.add(edges);

      openingMeshesRef.current.set(opening.id, mesh);
    });

    group.position.set(0, 0, 0);
    group.rotation.set(0, 0, 0);

    const bounds = new THREE.Box3().setFromObject(group);
    if (!bounds.isEmpty() && camera && controls) {
      const size = bounds.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z) || 1;
      group.position.set(-bounds.min.x, -bounds.min.y, -bounds.min.z);
      const adjustedCenter = new THREE.Vector3(size.x / 2, size.y / 2, size.z / 2);
      const currentOffset = camera.position.clone().sub(controls.target);
      const viewDirection =
        currentOffset.length() > 0.001 ? currentOffset.normalize() : new THREE.Vector3(1, 1, 1).normalize();
      const verticalFov = THREE.MathUtils.degToRad(camera.fov || 50);
      const aspect = camera.aspect || 1;
      const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * aspect);
      const fitFov = Math.min(verticalFov, horizontalFov);
      const fitDistance = (maxDim * 0.9) / Math.tan(fitFov / 2);

      controls.target.copy(adjustedCenter);
      camera.position.copy(adjustedCenter).addScaledVector(viewDirection, fitDistance);
      camera.near = maxDim / 100;
      camera.far = maxDim * 20;
      camera.lookAt(adjustedCenter);
      camera.updateProjectionMatrix();
    }
  };

  const applyLevelFilter = () => {
    updateVisibility();

    if (selectedKind === "surface" && selectedSurfaceIds.size > 0) {
      const nextSelectedSurfaceIds = new Set();
      selectedSurfaceIds.forEach((surfaceId) => {
        const selectedSurfaceMatch = surfaces.find((surface) => surface.id === surfaceId);
        const selectedLevelMatch =
          !selectedSurfaceMatch || selectedLevel === "all" || selectedSurfaceMatch.levelIds.includes(selectedLevel);
        const selectedMesh = selectedSurfaceMatch ? meshesRef.current.get(selectedSurfaceMatch.id) : null;
        const hidden = selectedMesh ? selectedMesh.userData.hiddenExterior === true : false;

        if (selectedSurfaceMatch && selectedLevelMatch && !hidden) {
          nextSelectedSurfaceIds.add(surfaceId);
        }
      });

      if (nextSelectedSurfaceIds.size !== selectedSurfaceIds.size) {
        const nextIds = Array.from(nextSelectedSurfaceIds);
        setSelectedSurfaceIds(nextSelectedSurfaceIds);
        setSelectedId(nextIds.includes(selectedId) ? selectedId : nextIds[nextIds.length - 1] || null);
      }
    } else if (selectedId) {
      if (selectedKind === "opening") {
        const selectedOpeningMatch = openings.find((opening) => opening.id === selectedId);
        const selectedLevelMatch =
          !selectedOpeningMatch || selectedLevel === "all" || selectedOpeningMatch.levelIds.includes(selectedLevel);

        if (!selectedOpeningMatch || !selectedLevelMatch || !showOpenings) {
          setSelectedId(null);
        }
      }
    }
  };

  const applyExteriorVisibility = () => {
    meshesRef.current.forEach((mesh) => {
      const surfaceType = mesh.userData.surfaceType || "Unknown";
      const exterior = isExteriorSurface(surfaceType);
      mesh.userData.hiddenExterior = hideExterior && exterior;
    });
    updateVisibility();

    if (selectedKind === "surface" && selectedSurfaceIds.size > 0) {
      const nextSelectedSurfaceIds = new Set(
        Array.from(selectedSurfaceIds).filter((surfaceId) => {
          const mesh = meshesRef.current.get(surfaceId);
          return mesh && mesh.visible;
        })
      );

      if (nextSelectedSurfaceIds.size !== selectedSurfaceIds.size) {
        const nextIds = Array.from(nextSelectedSurfaceIds);
        setSelectedSurfaceIds(nextSelectedSurfaceIds);
        setSelectedId(nextIds.includes(selectedId) ? selectedId : nextIds[nextIds.length - 1] || null);
      }
    }
  };

  const updateVisibility = () => {
    const visibleIds = new Set(visibleSurfaces.map((surface) => surface.id));
    meshesRef.current.forEach((mesh, surfaceId) => {
      const allowedByLevel = visibleIds.has(surfaceId);
      const hiddenExterior = mesh.userData.hiddenExterior === true;
      mesh.visible = allowedByLevel && !hiddenExterior;
    });

    const visibleOpeningIds = new Set(visibleOpenings.map((opening) => opening.id));
    openingMeshesRef.current.forEach((mesh, openingId) => {
      const allowedByLevel = visibleOpeningIds.has(openingId);
      mesh.visible = showOpenings && allowedByLevel;
    });
  };

  const statusClass = doc ? "badge" : "badge badge--idle";

  return (
    <div className="app">
      <aside className="panel">
        <div className="panel__header">
          <div>
            <h1>GBXML Viewer</h1>
            <p>Load a GBXML file, inspect surfaces, and edit surface types.</p>
          </div>
          <span className={statusClass}>{status}</span>
        </div>

        <div className="panel__section">
          <label className="file">
            <input id="fileInput" type="file" accept=".xml,.gbxml" onChange={handleFile} />
            <span>Choose GBXML File</span>
          </label>
          <div className="actions">
            <button className="primary" onClick={applyPendingEdits} disabled={pendingCount === 0}>
              Update Model
            </button>
            <button onClick={downloadGbxml} disabled={surfaces.length === 0}>
              Download GBXML
            </button>
          </div>
        </div>

        <div className="panel__section">
          <h2>Levels</h2>
          <div className="surface">
            <label htmlFor="levelSelect">Visible level</label>
            <select
              id="levelSelect"
              value={selectedLevel}
              onChange={(event) => setSelectedLevel(event.target.value)}
              disabled={levels.length === 0}
            >
              <option value="all">All levels</option>
              {levels.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.displayName || level.name}
                </option>
              ))}
            </select>
          </div>
          <div className="toggle">
            <label htmlFor="xrayToggle">X-ray exterior</label>
            <input
              id="xrayToggle"
              type="checkbox"
              checked={xrayMode}
              onChange={(event) => setXrayMode(event.target.checked)}
            />
          </div>
          <div className="toggle">
            <label htmlFor="hideExteriorToggle">Hide exterior</label>
            <input
              id="hideExteriorToggle"
              type="checkbox"
              checked={hideExterior}
              onChange={(event) => setHideExterior(event.target.checked)}
            />
          </div>
          <div className="toggle">
            <label htmlFor="openingsToggle">Show openings</label>
            <input
              id="openingsToggle"
              type="checkbox"
              checked={showOpenings}
              onChange={(event) => setShowOpenings(event.target.checked)}
            />
          </div>
        </div>

        <div className="panel__section">
          <h2>Selected Item</h2>
          <div className="surface">
            {selectedKind === "surface" && selectedSurfaces.length > 1 ? (
              <>
                <div>
                  <label>Selected Surfaces</label>
                  <div>{selectedSurfaces.length}</div>
                </div>
                <div>
                  <label>Total Area</label>
                  <div>{selectedSurfaces.reduce((sum, surface) => sum + (surface.area || 0), 0).toFixed(2)}</div>
                </div>
                <div>
                  <label>Surface Type</label>
                  <select value={selectedSurfaceTypeValue} onChange={handleSurfaceTypeChange}>
                    {selectedSurfaceTypeValue === "" ? (
                      <option value="" disabled>
                        Mixed types
                      </option>
                    ) : null}
                    {surfaceTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : selectedId && selectedKind === "surface" ? (
              <>
                <div>
                  <label>Surface ID</label>
                  <div>{selectedSurface.id || "Unknown"}</div>
                </div>
                <div>
                  <label>Surface Area</label>
                  <div>{selectedSurface.area ? selectedSurface.area.toFixed(2) : "0.00"}</div>
                </div>
                <div>
                  <label>Level</label>
                  <div>
                    {selectedSurface.levelIds.length
                      ? selectedSurface.levelIds.map((levelId) => getLevelDisplayName(levels, levelId)).join(", ")
                      : "Unknown"}
                  </div>
                </div>
                <div>
                  <label>Zone</label>
                  <div>{selectedSurface.zoneNames.length ? selectedSurface.zoneNames.join(", ") : "Unknown"}</div>
                </div>
                <div>
                  <label>Surface Type</label>
                  <select
                    value={selectedSurfaceTypeValue || pendingEdits.get(`surface:${selectedSurface.id}`) || selectedSurface.surfaceType}
                    onChange={handleSurfaceTypeChange}
                  >
                    {surfaceTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="surface__split">
                  <div>
                    <label htmlFor="newOpeningType">Opening Type</label>
                    <select
                      id="newOpeningType"
                      value={newOpeningType}
                      onChange={(event) => setNewOpeningType(event.target.value)}
                    >
                      {openingTypeOptions.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className="secondary" onClick={convertSelectedSurfaceToOpening}>
                    Convert
                  </button>
                </div>
                <button className="danger" onClick={deleteSelectedSurface}>
                  Delete Surface
                </button>
              </>
            ) : selectedId && selectedKind === "opening" ? (
              <>
                <div>
                  <label>Opening ID</label>
                  <div>{selectedOpening.id || "Unknown"}</div>
                </div>
                <div>
                  <label>Opening Area</label>
                  <div>{selectedOpening.area ? selectedOpening.area.toFixed(2) : "0.00"}</div>
                </div>
                <div>
                  <label>Level</label>
                  <div>
                    {selectedOpening.levelIds.length
                      ? selectedOpening.levelIds.map((levelId) => getLevelDisplayName(levels, levelId)).join(", ")
                      : "Unknown"}
                  </div>
                </div>
                <div>
                  <label>Parent Surface</label>
                  <div>{selectedOpening.parentSurfaceId || "Unknown"}</div>
                </div>
                <div>
                  <label>Opening Type</label>
                  <select
                    value={pendingEdits.get(`opening:${selectedOpening.id}`) || selectedOpening.openingType}
                    onChange={handleOpeningTypeChange}
                  >
                    {openingTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <div className="placeholder">Click a surface or opening to see details.</div>
            )}
          </div>
        </div>

        <div className="panel__section">
          <h2>Surfaces</h2>
          <div className="surface-list">
            {visibleSurfaces.map((surface) => (
              <button
                key={surface.id}
                className={selectedKind === "surface" && selectedSurfaceIds.has(surface.id) ? "active" : ""}
                onClick={(event) => selectSurface(surface.id, event.ctrlKey || event.metaKey)}
              >
                {surface.id || "Surface"} - {surface.surfaceType}
                {surface.levelIds.length ? ` - ${getLevelDisplayName(levels, surface.levelIds[0])}` : ""}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <main className="viewport">
        <canvas ref={canvasRef} id="scene" onPointerDown={handlePick}></canvas>
        <div className="legend legend--overlay">
          <div className="legend__title">Legend</div>
          <div className="legend__list">
            {surfaceTypeOptions.map((type) => (
              <div className="legend__item" key={type}>
                <span className="legend__swatch" style={{ background: toHex(getSurfaceColor(type)) }}></span>
                <span>{type}</span>
              </div>
            ))}
            <div className="legend__item">
              <span className="legend__swatch" style={{ background: toHex(openingTint) }}></span>
              <span>Openings</span>
            </div>
          </div>
        </div>
        <div className="hint">Drag to orbit - Scroll to zoom - Ctrl/Cmd-click surfaces to multi-select</div>
      </main>
    </div>
  );
}

function parseGbxml(text) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "application/xml");
  if (doc.getElementsByTagName("parsererror").length) {
    throw new Error("Invalid XML");
  }

  const storeyMap = new Map();
  const storeys = Array.from(doc.getElementsByTagNameNS("*", "BuildingStorey"));
  storeys.forEach((storey, index) => {
    const id = storey.getAttribute("id") || `storey-${index + 1}`;
    const name = findText(storey, ["Name", "StoreyName"]) || storey.getAttribute("name") || id;
    const levelText = findText(storey, ["Level", "Elevation"]);
    const elevation = Number.parseFloat(levelText);
    storeyMap.set(id, {
      id,
      name,
      elevation: Number.isFinite(elevation) ? elevation : null,
    });
  });

  const zoneMap = new Map();
  const zones = Array.from(doc.getElementsByTagNameNS("*", "Zone"));
  zones.forEach((zone) => {
    const id = zone.getAttribute("id") || "";
    const name = findText(zone, ["Name", "ZoneName"]) || zone.getAttribute("name") || id;
    if (id) zoneMap.set(id, name);
  });

  const spaceMap = new Map();
  const spaces = Array.from(doc.getElementsByTagNameNS("*", "Space"));
  spaces.forEach((space) => {
    const id = space.getAttribute("id") || "";
    const name = findText(space, ["Name", "SpaceName"]) || space.getAttribute("name") || id;
    const zoneRef = getFirstChild(space, "ZoneIdRef");
    const zoneId = zoneRef ? zoneRef.getAttribute("zoneIdRef") : null;
    const storeyIdRef = space.getAttribute("buildingStoreyIdRef") || space.getAttribute("buildingStoreyRef");
    const storeyNode = getFirstChild(space, "BuildingStoreyIdRef");
    const storeyId = storeyIdRef || (storeyNode ? storeyNode.getAttribute("buildingStoreyIdRef") : null);
    spaceMap.set(id, { name, zoneId, storeyId });
  });

  const openings = [];

  const surfaces = Array.from(doc.getElementsByTagNameNS("*", "Surface")).map((surface, index) => {
    const id = surface.getAttribute("id") || `surface-${index + 1}`;
    const surfaceType = surface.getAttribute("surfaceType") || "Unknown";

    const spaceRefs = Array.from(surface.getElementsByTagNameNS("*", "AdjacentSpaceId"))
      .map((adjacent) => adjacent.getAttribute("spaceIdRef"))
      .filter(Boolean);

    const zoneNames = spaceRefs
      .map((spaceId) => {
        const space = spaceMap.get(spaceId);
        if (!space) return null;
        const zoneName = space.zoneId ? zoneMap.get(space.zoneId) : null;
        return zoneName || space.name || null;
      })
      .filter(Boolean);

    const polyLoop = getFirstChild(surface, "PolyLoop");
    const points = polyLoop ? parsePoints(polyLoop) : [];
    const area = computeArea(points);
    const minZ = points.length ? Math.min(...points.map((point) => point.z)) : null;

    const levelIds = spaceRefs
      .map((spaceId) => {
        const space = spaceMap.get(spaceId);
        return space ? space.storeyId : null;
      })
      .filter(Boolean);

    const levelNames = levelIds
      .map((storeyId) => {
        const storey = storeyMap.get(storeyId);
        return storey ? storey.name : null;
      })
      .filter(Boolean);

    const surfaceEntry = {
      id,
      element: surface,
      surfaceType,
      points,
      area,
      zoneNames,
      minZ,
      levelIds,
      levelNames,
    };

    const openingNodes = [
      ...Array.from(surface.getElementsByTagNameNS("*", "Opening")),
      ...Array.from(surface.getElementsByTagNameNS("*", "Aperture")),
    ];

    openingNodes.forEach((opening, openingIndex) => {
      const openingId = opening.getAttribute("id") || `${id}-opening-${openingIndex + 1}`;
      const openingType = opening.getAttribute("openingType") || opening.getAttribute("type") || "Unknown";
      const openingLoop = getFirstChild(opening, "PolyLoop");
      const openingPoints = openingLoop ? parsePoints(openingLoop) : [];
      const openingArea = computeArea(openingPoints);

      openings.push({
        id: openingId,
        element: opening,
        openingType,
        points: openingPoints,
        area: openingArea,
        levelIds: [...levelIds],
        parentSurfaceId: id,
      });
    });

    return surfaceEntry;
  });

  const levels = buildLevels(storeyMap, surfaces);
  assignFallbackLevels(levels, surfaces);

  return { doc, surfaces, levels, openings };
}

function findText(root, names) {
  for (const name of names) {
    const node = getFirstChild(root, name);
    if (node && node.textContent) return node.textContent.trim();
  }
  return "";
}

function getFirstChild(root, localName) {
  const nodes = root.getElementsByTagNameNS("*", localName);
  return nodes.length ? nodes[0] : null;
}

function parsePoints(polyLoop) {
  const cartesianPoints = Array.from(polyLoop.getElementsByTagNameNS("*", "CartesianPoint"));
  const points = cartesianPoints
    .map((point) => {
      const coords = Array.from(point.getElementsByTagNameNS("*", "Coordinate"))
        .map((coord) => Number(coord.textContent))
        .filter((value) => Number.isFinite(value));
      if (coords.length < 3) return null;
      return new THREE.Vector3(coords[0], coords[1], coords[2]);
    })
    .filter(Boolean);

  if (points.length > 2) {
    const first = points[0];
    const last = points[points.length - 1];
    if (first.distanceTo(last) < 1e-6) points.pop();
  }

  return points;
}

function buildLevels(storeyMap, surfaces) {
  if (storeyMap.size) {
    const sorted = Array.from(storeyMap.values()).sort((a, b) => {
      if (a.elevation === null && b.elevation === null) return a.name.localeCompare(b.name);
      if (a.elevation === null) return 1;
      if (b.elevation === null) return -1;
      return a.elevation - b.elevation;
    });
    return sorted.map((storey, index) => ({
      id: storey.id,
      name: storey.name,
      displayName: `Level ${index}`,
    }));
  }

  const levelMap = new Map();
  surfaces.forEach((surface) => {
    if (surface.minZ === null) return;
    const rounded = Math.round(surface.minZ * 100) / 100;
    const key = rounded.toFixed(2);
    if (!levelMap.has(key)) {
      levelMap.set(key, { id: `z-${key}`, name: `Z ${key}` });
    }
  });

  const sorted = Array.from(levelMap.values()).sort((a, b) => {
    const aNum = Number.parseFloat(a.name.replace("Z ", ""));
    const bNum = Number.parseFloat(b.name.replace("Z ", ""));
    return aNum - bNum;
  });

  return sorted.map((level, index) => ({
    ...level,
    displayName: `Level ${index}`,
  }));
}

function assignFallbackLevels(levels, surfaces) {
  const hasStoreys = levels.some((level) => !level.id.startsWith("z-")) && levels.length > 0;
  if (hasStoreys) return;

  surfaces.forEach((surface) => {
    if (surface.levelIds.length) return;
    if (surface.minZ === null) return;
    const rounded = Math.round(surface.minZ * 100) / 100;
    const key = rounded.toFixed(2);
    const levelId = `z-${key}`;
    surface.levelIds = [levelId];
    surface.levelNames = [`Z ${key}`];
  });
}

function computeArea(points) {
  if (!points || points.length < 3) return 0;
  const normal = new THREE.Vector3();
  for (let i = 0; i < points.length; i += 1) {
    const current = points[i];
    const next = points[(i + 1) % points.length];
    normal.x += (current.y - next.y) * (current.z + next.z);
    normal.y += (current.z - next.z) * (current.x + next.x);
    normal.z += (current.x - next.x) * (current.y + next.y);
  }
  return 0.5 * normal.length();
}

function buildSurfaceGeometry(points) {
  if (points.length < 3) return null;
  const normal = computeNormal(points);
  if (normal.length() < 1e-6) return null;

  const basisX = new THREE.Vector3();
  const basisY = new THREE.Vector3();
  const helper = Math.abs(normal.x) > 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
  basisX.crossVectors(helper, normal).normalize();
  basisY.crossVectors(normal, basisX).normalize();

  const projected = points.map((point) => new THREE.Vector2(point.dot(basisX), point.dot(basisY)));
  const faces = THREE.ShapeUtils.triangulateShape(projected, []);

  if (!faces.length) return null;

  const vertices = [];
  points.forEach((point) => vertices.push(point.x, point.y, point.z));

  const indices = [];
  faces.forEach((face) => indices.push(face[0], face[1], face[2]));

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
}

function computeNormal(points) {
  const normal = new THREE.Vector3();
  for (let i = 0; i < points.length; i += 1) {
    const current = points[i];
    const next = points[(i + 1) % points.length];
    normal.x += (current.y - next.y) * (current.z + next.z);
    normal.y += (current.z - next.z) * (current.x + next.x);
    normal.z += (current.x - next.x) * (current.y + next.y);
  }
  return normal.normalize();
}

function findOpeningHostSurface(openingSurface, surfaces) {
  const openingNormal = computeNormal(openingSurface.points);
  if (openingNormal.length() < 1e-6) return null;

  const openingCenter = getPointsCenter(openingSurface.points);
  const openingSize = getPointsDiagonal(openingSurface.points);

  const candidates = surfaces
    .filter((surface) => surface.id !== openingSurface.id)
    .filter((surface) => surface.points.length >= 3)
    .map((surface) => {
      const surfaceNormal = computeNormal(surface.points);
      if (surfaceNormal.length() < 1e-6) return null;

      const normalAlignment = Math.abs(surfaceNormal.dot(openingNormal));
      if (normalAlignment < 0.9) return null;

      const planeDistance = Math.abs(surfaceNormal.dot(openingCenter.clone().sub(surface.points[0])));
      const tolerance = Math.max(0.25, openingSize * 0.08);
      const projectedInside = projectedPointInSurface(openingCenter, surface.points, surfaceNormal);
      const openingArea = openingSurface.area || computeArea(openingSurface.points);
      const surfaceArea = surface.area || computeArea(surface.points);

      if (!projectedInside && planeDistance > Math.max(2, openingSize * 0.25)) return null;
      if (surfaceArea > 0 && openingArea > 0 && surfaceArea < openingArea * 0.8) return null;

      const surfaceCenter = getPointsCenter(surface.points);
      const centerDistance = openingCenter.distanceTo(surfaceCenter);
      const distanceRank = planeDistance <= tolerance ? 0 : 1;
      const insideRank = projectedInside ? 0 : 1;
      return {
        surface,
        centerDistance,
        planeDistance,
        distanceRank,
        insideRank,
        typeRank: getHostTypeRank(surface.surfaceType),
      };
    })
    .filter(Boolean)
    .sort(
      (a, b) =>
        a.typeRank - b.typeRank ||
        a.insideRank - b.insideRank ||
        a.distanceRank - b.distanceRank ||
        a.planeDistance - b.planeDistance ||
        a.centerDistance - b.centerDistance
    );

  return candidates.length ? candidates[0].surface : null;
}

function projectedPointInSurface(point, surfacePoints, normal) {
  const basis = getProjectionBasis(normal);
  const polygon = surfacePoints.map((surfacePoint) => new THREE.Vector2(surfacePoint.dot(basis.x), surfacePoint.dot(basis.y)));
  const projectedPoint = new THREE.Vector2(point.dot(basis.x), point.dot(basis.y));
  return pointInPolygon(projectedPoint, polygon);
}

function getProjectionBasis(normal) {
  const helper = Math.abs(normal.x) > 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
  const x = new THREE.Vector3().crossVectors(helper, normal).normalize();
  const y = new THREE.Vector3().crossVectors(normal, x).normalize();
  return { x, y };
}

function pointInPolygon(point, polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
    const current = polygon[i];
    const previous = polygon[j];
    const intersects =
      current.y > point.y !== previous.y > point.y &&
      point.x < ((previous.x - current.x) * (point.y - current.y)) / (previous.y - current.y || 1e-9) + current.x;
    if (intersects) inside = !inside;
  }
  return inside;
}

function getPointsCenter(points) {
  const center = new THREE.Vector3();
  points.forEach((point) => center.add(point));
  return center.divideScalar(points.length || 1);
}

function getPointsDiagonal(points) {
  const bounds = new THREE.Box3().setFromPoints(points);
  return bounds.getSize(new THREE.Vector3()).length();
}

function getHostTypeRank(surfaceType) {
  if (surfaceType === "ExteriorWall" || surfaceType === "Roof" || surfaceType === "InteriorWall") return 0;
  if (surfaceType === "Ceiling" || surfaceType === "InteriorFloor" || surfaceType === "ExposedFloor" || surfaceType === "RaisedFloor") return 1;
  if (surfaceType === "SlabOnGrade" || surfaceType === "UndergroundWall" || surfaceType === "UndergroundSlab") return 2;
  if (surfaceType === "Shade") return 4;
  return 2;
}

function getSurfaceColor(type) {
  return typeColors[type] || typeColors.Unknown;
}

function getMaterialSettings(surfaceType, xrayMode) {
  if (!xrayMode) {
    return { opacity: 0.9, transparent: true, depthWrite: true };
  }

  const isExterior = surfaceType === "ExteriorWall" || surfaceType === "Roof" || surfaceType === "ExposedFloor";
  if (isExterior) {
    return { opacity: 0.2, transparent: true, depthWrite: false };
  }

  return { opacity: 0.9, transparent: true, depthWrite: true };
}

function isExteriorSurface(surfaceType) {
  return surfaceType === "ExteriorWall" || surfaceType === "Roof" || surfaceType === "ExposedFloor";
}

function makeEditedFileName(fileName) {
  const fallbackName = "updated-edited.xml";
  if (!fileName) return fallbackName;

  const dotIndex = fileName.lastIndexOf(".");
  if (dotIndex <= 0) return `${fileName}-edited.xml`;

  const baseName = fileName.slice(0, dotIndex);
  return `${baseName}-edited.xml`;
}

function setPickability(mesh) {
  mesh.userData.pickable = true;
  mesh.raycast = THREE.Mesh.prototype.raycast;

  const edges = mesh.userData.edges;
  if (edges) {
    edges.raycast = () => null;
  }
}

function updateSurfaceMaterials(meshesRef, xrayMode) {
  meshesRef.current.forEach((mesh) => {
    const surfaceType = mesh.userData.surfaceType || "Unknown";
    const settings = getMaterialSettings(surfaceType, xrayMode);
    mesh.material.transparent = settings.transparent;
    mesh.material.opacity = settings.opacity;
    mesh.material.depthWrite = settings.depthWrite;
    mesh.material.needsUpdate = true;
    setPickability(mesh);
  });
}

function updateOpeningMaterials(openingMeshesRef) {
  openingMeshesRef.current.forEach((mesh) => {
    mesh.material.transparent = true;
    mesh.material.opacity = 0.45;
    mesh.material.depthWrite = false;
    mesh.material.polygonOffset = true;
    mesh.material.polygonOffsetFactor = -1;
    mesh.material.polygonOffsetUnits = -1;
    mesh.material.needsUpdate = true;
  });
}

function getLevelDisplayName(levels, levelId) {
  const level = levels.find((item) => item.id === levelId);
  return level ? level.displayName || level.name : levelId;
}

function toHex(color) {
  return `#${color.toString(16).padStart(6, "0")}`;
}

function sameIdList(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function makeUniqueOpeningId(surfaceId, openings) {
  const existingIds = new Set(openings.map((opening) => opening.id));
  const baseId = `${surfaceId}-opening`;
  let index = 1;
  let candidate = `${baseId}-${index}`;
  while (existingIds.has(candidate)) {
    index += 1;
    candidate = `${baseId}-${index}`;
  }
  return candidate;
}

export default App;
