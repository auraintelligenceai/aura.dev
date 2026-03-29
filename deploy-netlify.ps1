$filePath = "C:\Users\shamasesamke\.aura\projects\portfolio-pixel\deploy-proper.tar.gz"
$uri = "https://api.netlify.com/api/v1/sites"

Write-Output "Deploying to Netlify..."

# Netlify requires a proper zip/gz with the site files
# Create a simple drop-deployment using Netlify's manual deploy API

$boundary = "----Boundary" + [System.Guid]::NewGuid().ToString().Substring(0, 6)
$LF = "`r`n"

# Read file
$fileBytes = [System.IO.File]::ReadAllBytes($filePath)

# Build multipart body
$bodyLines = @(
    "--$boundary",
    "Content-Disposition: form-data; name=`"file`"; filename=`"deploy.tar.gz`"",
    "Content-Type: application/gzip",
    "",
    [System.Text.Encoding]::UTF8.GetString($fileBytes),
    "--$boundary--",
    ""
)

$body = [System.Text.Encoding]::UTF8.GetBytes(($bodyLines -join $LF))

$contentType = "multipart/form-data; boundary=$boundary"

try {
    $response = Invoke-RestMethod -Uri "https://api.netlify.com/api/v1/sites" -Method POST -ContentType $contentType -Body $body
    Write-Output $response | ConvertTo-Json
} catch {
    Write-Output "Netlify deployment requires authentication."
    Write-Output "Error: $($_.Exception.Message)"
}