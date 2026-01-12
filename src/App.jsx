import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import "./App.css";

const typeColors = {
  ExteriorWall: 0xf4a261,
  InteriorWall: 0x2a9d8f,
  Roof: 0xe76f51,
  Ceiling: 0x8ecae6,
  SlabOnGrade: 0xb56576,
  UndergroundWall: 0x6c757d,
  UndergroundSlab: 0x495057,
  Shade: 0xadb5bd,
  Air: 0xd3d3d3,
  UndergroundCeiling: 0x52b788,
  InteriorFloor: 0x219ebc,
  ExteriorFloor: 0xf3722c,
  Unknown: 0x94a3b8,
};

const surfaceTypeOptions = Object.keys(typeColors).filter((key) => key !== "Unknown");

const emptyDetails = { id: "", area: 0, zoneNames: [], levelIds: [], surfaceType: "Unknown" };

function App() {
  const canvasRef = useRef(null);
  const modelGroupRef = useRef(new THREE.Group());
  const raycasterRef = useRef(new THREE.Raycaster());
  const pickCycleRef = useRef({ key: "", index: 0, ids: [] });

  const [doc, setDoc] = useState(null);
  const [surfaces, setSurfaces] = useState([]);
  const [levels, setLevels] = useState([]);
  const [pendingEdits, setPendingEdits] = useState(new Map());
  const [selectedId, setSelectedId] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [xrayMode, setXrayMode] = useState(false);
  const [hideExterior, setHideExterior] = useState(false);
  const [status, setStatus] = useState("No model");
  const [controls, setControls] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);

  const meshesRef = useRef(new Map());

  const selectedSurface = useMemo(
    () => surfaces.find((surface) => surface.id === selectedId) || emptyDetails,
    [surfaces, selectedId]
  );

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
  }, [surfaces, camera, controls]);

  useEffect(() => {
    applyLevelFilter();
  }, [selectedLevel, surfaces]);

  useEffect(() => {
    updateSurfaceMaterials(meshesRef, xrayMode);
    applyExteriorVisibility();
  }, [xrayMode, hideExterior, surfaces]);

  const visibleSurfaces = useMemo(() => {
    if (selectedLevel === "all") return surfaces;
    return surfaces.filter((surface) => surface.levelIds.includes(selectedLevel));
  }, [surfaces, selectedLevel]);

  const pendingCount = pendingEdits.size;

  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = reader.result;
        const { doc: parsedDoc, surfaces: parsedSurfaces, levels: parsedLevels } = parseGbxml(text);
        setDoc(parsedDoc);
        setSurfaces(parsedSurfaces);
        setLevels(parsedLevels);
        setPendingEdits(new Map());
        setSelectedLevel("all");
        setSelectedId(null);
        setStatus(`Loaded ${parsedSurfaces.length} surfaces`);
      } catch (error) {
        console.error(error);
        setStatus("Failed to parse GBXML");
      }
    };
    reader.readAsText(file);
  };

  const selectSurface = (surfaceId) => {
    if (!surfaceId) return;
    const surface = surfaces.find((item) => item.id === surfaceId);
    if (!surface) return;
    if (selectedLevel !== "all" && !surface.levelIds.includes(selectedLevel)) return;

    if (selectedId && meshesRef.current.has(selectedId)) {
      const prevMesh = meshesRef.current.get(selectedId);
      prevMesh.material.emissive?.setHex(0x000000);
    }

    setSelectedId(surfaceId);

    const mesh = meshesRef.current.get(surfaceId);
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
    const meshes = Array.from(meshesRef.current.values());
    const hits = raycaster.intersectObjects(meshes, true);

    if (hits.length) {
      const candidates = hits
        .map((hit) => (hit.object.userData.surfaceId ? hit.object : hit.object.parent))
        .filter((root) => root && root.userData.surfaceId)
        .filter((root) => {
          if (selectedLevel === "all") return true;
          const surface = surfaces.find((item) => item.id === root.userData.surfaceId);
          return surface ? surface.levelIds.includes(selectedLevel) : false;
        });

      if (!candidates.length) return;

      const clickKey = `${Math.round(event.clientX)}:${Math.round(event.clientY)}:${selectedLevel}`;
      const ids = candidates.map((root) => root.userData.surfaceId);

      if (event.shiftKey && pickCycleRef.current.key === clickKey && sameIdList(pickCycleRef.current.ids, ids)) {
        pickCycleRef.current.index = (pickCycleRef.current.index + 1) % ids.length;
      } else {
        pickCycleRef.current = { key: clickKey, index: 0, ids };
      }

      const pickedId = ids[pickCycleRef.current.index];
      selectSurface(pickedId);
    }
  };

  const handleSurfaceTypeChange = (event) => {
    const nextType = event.target.value;
    if (!selectedSurface?.id) return;
    setPendingEdits((prev) => {
      const next = new Map(prev);
      next.set(selectedSurface.id, nextType);
      return next;
    });
  };

  const applyPendingEdits = () => {
    if (!doc || pendingEdits.size === 0) return;
    const updatedSurfaces = surfaces.map((surface) => {
      if (!pendingEdits.has(surface.id)) return surface;
      const newType = pendingEdits.get(surface.id);
      surface.element.setAttribute("surfaceType", newType);
      if (meshesRef.current.has(surface.id)) {
        meshesRef.current.get(surface.id).material.color.setHex(getSurfaceColor(newType));
      }
      return { ...surface, surfaceType: newType };
    });
    setSurfaces(updatedSurfaces);
    setPendingEdits(new Map());
    setStatus("Model updated");
  };

  const downloadGbxml = () => {
    if (!doc) return;
    const serializer = new XMLSerializer();
    const xmlString = serializer.serializeToString(doc);
    const blob = new Blob([xmlString], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "updated.gbxml";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const rebuildScene = () => {
    const group = modelGroupRef.current;
    group.clear();
    meshesRef.current.clear();

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
      mesh.add(edges);
      mesh.userData.edges = edges;

      meshesRef.current.set(surface.id, mesh);
      setPickability(mesh, surface.surfaceType, xrayMode);
    });

    group.position.set(0, 0, 0);
    group.rotation.set(0, 0, 0);

    const bounds = new THREE.Box3().setFromObject(group);
    if (!bounds.isEmpty() && camera && controls) {
      const size = bounds.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z) || 1;
      group.position.set(-bounds.min.x, -bounds.min.y, -bounds.min.z);
      const adjustedCenter = new THREE.Vector3(size.x / 2, size.y / 2, size.z / 2);
      controls.target.copy(adjustedCenter);
      camera.position.set(maxDim * 1.4, maxDim * 1.1, maxDim * 1.4);
      camera.near = maxDim / 100;
      camera.far = maxDim * 20;
      camera.updateProjectionMatrix();
    }
  };

  const applyLevelFilter = () => {
    updateVisibility();

    if (selectedId) {
      const selectedSurfaceMatch = surfaces.find((surface) => surface.id === selectedId);
      const selectedLevelMatch =
        !selectedSurfaceMatch || selectedLevel === "all" || selectedSurfaceMatch.levelIds.includes(selectedLevel);
      const selectedMesh = selectedSurfaceMatch ? meshesRef.current.get(selectedSurfaceMatch.id) : null;
      const hidden = selectedMesh ? selectedMesh.userData.hiddenExterior === true : false;

      if (!selectedSurfaceMatch || !selectedLevelMatch || hidden) {
        setSelectedId(null);
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
  };

  const updateVisibility = () => {
    const visibleIds = new Set(visibleSurfaces.map((surface) => surface.id));
    meshesRef.current.forEach((mesh, surfaceId) => {
      const allowedByLevel = visibleIds.has(surfaceId);
      const hiddenExterior = mesh.userData.hiddenExterior === true;
      mesh.visible = allowedByLevel && !hiddenExterior;
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
        </div>

        <div className="panel__section">
          <h2>Selected Surface</h2>
          <div className="surface">
            {selectedSurface?.id ? (
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
                    value={pendingEdits.get(selectedSurface.id) || selectedSurface.surfaceType}
                    onChange={handleSurfaceTypeChange}
                  >
                    {surfaceTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <div className="placeholder">Click a surface to see its details.</div>
            )}
          </div>
        </div>

        <div className="panel__section">
          <h2>Surfaces</h2>
          <div className="surface-list">
            {visibleSurfaces.map((surface) => (
              <button
                key={surface.id}
                className={surface.id === selectedId ? "active" : ""}
                onClick={() => selectSurface(surface.id)}
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
          </div>
        </div>
        <div className="hint">Drag to orbit ? Scroll to zoom ? Click to select</div>
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

    return {
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
  });

  const levels = buildLevels(storeyMap, surfaces);
  assignFallbackLevels(levels, surfaces);

  return { doc, surfaces, levels };
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

function getSurfaceColor(type) {
  return typeColors[type] || typeColors.Unknown;
}

function getMaterialSettings(surfaceType, xrayMode) {
  if (!xrayMode) {
    return { opacity: 0.9, transparent: true, depthWrite: true };
  }

  const isExterior = surfaceType === "ExteriorWall" || surfaceType === "Roof" || surfaceType === "ExteriorFloor";
  if (isExterior) {
    return { opacity: 0.2, transparent: true, depthWrite: false };
  }

  return { opacity: 0.9, transparent: true, depthWrite: true };
}

function isExteriorSurface(surfaceType) {
  return surfaceType === "ExteriorWall" || surfaceType === "Roof" || surfaceType === "ExteriorFloor";
}

function setPickability(mesh, surfaceType, xrayMode) {
  const pickable = !xrayMode || !isExteriorSurface(surfaceType);
  mesh.userData.pickable = pickable;
  mesh.raycast = pickable ? THREE.Mesh.prototype.raycast : () => null;

  const edges = mesh.userData.edges;
  if (edges) {
    edges.raycast = pickable ? THREE.LineSegments.prototype.raycast : () => null;
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
    setPickability(mesh, surfaceType, xrayMode);
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

export default App;
