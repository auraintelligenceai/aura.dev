@echo off
chcp 65001 >nul
title Pixel Portfolio Deployer
color 0A

echo =========================================
echo   PIXEL PORTFOLIO - ONE-CLICK DEPLOY
echo =========================================
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js not found! Install from https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js found

:: Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm not found!
    pause
    exit /b 1
)

echo ✅ npm found

:: Check if Vercel CLI is installed
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo 🔄 Installing Vercel CLI...
    npm i -g vercel
    if %errorlevel% neq 0 (
        echo ❌ Failed to install Vercel CLI
        pause
        exit /b 1
    )
)

echo ✅ Vercel CLI ready

echo.
echo =========================================
echo   DEPLOYMENT OPTIONS
echo =========================================
echo.
echo  [1] Deploy to Vercel (Recommended)
echo  [2] Start local preview server
echo  [3] Open Netlify Drop (Browser)
echo  [4] Create zip for manual upload
echo  [5] Exit
echo.

set /p choice="Enter choice (1-5): "

if "%choice%"=="1" goto :vercel
if "%choice%"=="2" goto :preview
if "%choice%"=="3" goto :netlify
if "%choice%"=="4" goto :zip
if "%choice%"=="5" goto :eof

echo Invalid choice!
pause
goto :eof

:vercel
echo.
echo 🚀 Starting Vercel deployment...
echo.
cd /d "%~dp0"
vercel --prod
if %errorlevel% neq 0 (
    echo.
    echo ⚠️  First time? Run: vercel login
    echo    Then run this again.
    pause
) else (
    echo.
    echo ✅ Deployment complete!
    pause
)
goto :eof

:preview
echo.
echo 🖥️  Starting local preview server...
echo.
cd /d "%~dp0"
npm run preview
goto :eof

:netlify
echo.
echo 🌐 Opening Netlify Drop in browser...
echo    Drag the 'dist' folder when it loads!
start https://app.netlify.com/drop
echo.
echo ✅ Browser opened. Drag 'dist' folder to deploy.
pause
goto :eof

:zip
echo.
echo 📦 Creating deployment zip...
cd /d "%~dp0"
if exist "pixel-portfolio-deploy.zip" del "pixel-portfolio-deploy.zip"
powershell -Command "Compress-Archive -Path 'dist\*' -DestinationPath 'pixel-portfolio-deploy.zip' -Force"
if %errorlevel% neq 0 (
    echo ❌ Failed to create zip
    pause
    goto :eof
)
echo.
echo ✅ Created: pixel-portfolio-deploy.zip
echo 📁 Upload this to any static host!
start .
pause
goto :eof
