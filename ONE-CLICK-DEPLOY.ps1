# Pixel Portfolio - One-Click Deploy Script
# Supports: Vercel, Netlify Drop, Local Preview

param(
    [Parameter()]
    [ValidateSet("vercel", "netlify", "preview", "surge")]
    [string]$Target = ""
)

$ErrorActionPreference = "Stop"

# ASCII Art Header
Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  PIXEL PORTFOLIO - ONE-CLICK DEPLOYMENT" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Green
Write-Host ""

# Function to check command exists
function Test-CommandExists {
    param($Command)
    return [bool](Get-Command -Name $Command -ErrorAction SilentlyContinue)
}

# Function to deploy to Vercel
function Deploy-Vercel {
    Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Cyan
    
    if (-not (Test-CommandExists "vercel")) {
        Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
        npm i -g vercel
    }
    
    Write-Host "📝 Running: vercel --prod" -ForegroundColor Gray
    vercel --prod
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ DEPLOYMENT SUCCESSFUL!" -ForegroundColor Green
        Write-Host ""
    } else {
        Write-Host ""
        Write-Host "⚠️  First time deploying?" -ForegroundColor Yellow
        Write-Host "   Run 'vercel login' first, then try again." -ForegroundColor Gray
    }
}

# Function to open Netlify Drop
function Deploy-Netlify {
    Write-Host "🌐 Opening Netlify Drop..." -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📋 INSTRUCTIONS:" -ForegroundColor Yellow
    Write-Host "   1. Netlify Drop will open in your browser" -ForegroundColor White
    Write-Host "   2. Drag the 'dist' folder from this project" -ForegroundColor White
    Write-Host "   3. Get instant live URL!" -ForegroundColor White
    Write-Host ""
    
    Start-Process "https://app.netlify.com/drop"
    
    # Open file explorer to the dist folder
    Start-Process "explorer.exe" -ArgumentList "$(Get-Location)\dist"
}

# Function to start local preview
function Start-Preview {
    Write-Host "🖥️  Starting local preview server..." -ForegroundColor Cyan
    Write-Host "   URL: http://localhost:4173" -ForegroundColor Gray
    Write-Host ""
    
    npm run preview
}

# Function to deploy to Surge.sh
function Deploy-Surge {
    Write-Host "🌩️  Deploying to Surge..." -ForegroundColor Cyan
    
    if (-not (Test-CommandExists "surge")) {
        Write-Host "📦 Installing Surge..." -ForegroundColor Yellow
        npm i -g surge
    }
    
    Write-Host "📝 Running: surge dist" -ForegroundColor Gray
    surge dist
}

# Menu if no target specified
if (-not $Target) {
    Write-Host "Choose deployment target:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "  [1] Vercel (Recommended)" -ForegroundColor Green
    Write-Host "  [2] Netlify Drop (Easiest)" -ForegroundColor Cyan
    Write-Host "  [3] Surge.sh (Simple alias)" -ForegroundColor Magenta
    Write-Host "  [4] Local Preview" -ForegroundColor Gray
    Write-Host ""
    
    $choice = Read-Host "Enter choice (1-4)"
    
    switch ($choice) {
        "1" { $Target = "vercel" }
        "2" { $Target = "netlify" }
        "3" { $Target = "surge" }
        "4" { $Target = "preview" }
        default { 
            Write-Host "Invalid choice. Exiting." -ForegroundColor Red
            exit 1
        }
    }
}

# Execute deployment
switch ($Target) {
    "vercel" { Deploy-Vercel }
    "netlify" { Deploy-Netlify }
    "surge" { Deploy-Surge }
    "preview" { Start-Preview }
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  Deployment complete! 🎉" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Green
Write-Host ""