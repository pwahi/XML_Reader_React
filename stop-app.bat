@echo off
setlocal
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5173') do (
  taskkill /PID %%a /F
)
