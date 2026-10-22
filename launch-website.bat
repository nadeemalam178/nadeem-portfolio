@echo off
setlocal
title Nadeem Alam Portfolio Launcher

cd /d "%~dp0"
set "SITE_URL=http://127.0.0.1:3000"

where npm.cmd >nul 2>&1
if errorlevel 1 (
  echo Node.js and npm are required to launch this website.
  echo Install Node.js, then run this file again.
  pause
  exit /b 1
)

if not exist "node_modules\next\package.json" (
  echo Project dependencies are not installed.
  echo Run npm install in this folder, then run this file again.
  pause
  exit /b 1
)

echo Checking for an existing website server...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$client = New-Object Net.Sockets.TcpClient; try { $client.Connect('127.0.0.1', 3000); $client.Close(); exit 0 } catch { exit 1 }" >nul 2>&1
if errorlevel 1 (
  echo Starting the portfolio server...
  start "Portfolio Dev Server" /min /D "%~dp0" cmd /k "npm run dev -- --hostname 127.0.0.1 --port 3000"
) else (
  echo A server is already listening on port 3000.
)

echo Waiting for the website to become available...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$deadline = (Get-Date).AddSeconds(60); do { $client = New-Object Net.Sockets.TcpClient; try { $client.Connect('127.0.0.1', 3000); $client.Close(); exit 0 } catch { $client.Dispose(); Start-Sleep -Milliseconds 500 } } while ((Get-Date) -lt $deadline); exit 1" >nul 2>&1
if errorlevel 1 (
  echo The website did not start within 60 seconds.
  echo Check the Portfolio Dev Server window for errors.
  pause
  exit /b 1
)

echo Opening %SITE_URL%
start "" "%SITE_URL%"
exit /b 0
