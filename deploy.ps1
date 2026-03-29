$filePath = "C:\Users\shamasesamke\.aura\projects\portfolio-pixel\deploy.tar.gz"
$uri = "https://claude-skills-deploy.vercel.com/api/deploy"

# Read the file bytes
$fileBytes = [System.IO.File]::ReadAllBytes($filePath)

# Generate boundary
$boundary = [System.Guid]::NewGuid().ToString()

# Build the multipart form body
$header = "--$boundary`r`nContent-Disposition: form-data; name=`"file`"; filename=`"deploy.tar.gz`"`r`nContent-Type: application/gzip`r`n`r`n"
$footer = "`r`n--$boundary--`r`n"

# Convert header and footer to bytes
$headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
$footerBytes = [System.Text.Encoding]::UTF8.GetBytes($footer)

# Combine all bytes
$body = New-Object byte[] ($headerBytes.Length + $fileBytes.Length + $footerBytes.Length)
[Array]::Copy($headerBytes, 0, $body, 0, $headerBytes.Length)
[Array]::Copy($fileBytes, 0, $body, $headerBytes.Length, $fileBytes.Length)
[Array]::Copy($footerBytes, 0, $body, $headerBytes.Length + $fileBytes.Length, $footerBytes.Length)

# Create content type header
$contentType = "multipart/form-data; boundary=$boundary"

# Make the request
try {
    $response = Invoke-RestMethod -Uri $uri -Method POST -ContentType $contentType -Body $body
    Write-Output $response
} catch {
    Write-Output "Error: $_"
}