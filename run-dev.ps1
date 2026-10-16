Set-Location $PSScriptRoot
npm.cmd run build
& "C:\Program Files\nodejs\node.exe" node_modules\next\dist\bin\next start -p 3000
