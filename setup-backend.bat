@echo off
echo ============================================
echo   Setup Backend Server - BelajarReact2
echo ============================================
echo.

echo [1/2] Masuk ke folder server...
cd server

echo.
echo [2/2] Install dependencies...
call npm install

echo.
echo ============================================
echo Setup selesai!
echo.
echo Langkah selanjutnya:
echo 1. Setup database MySQL (lihat CARA-MENJALANKAN.md)
echo 2. Edit file server\.env (isi password MySQL)
echo 3. Jalankan: run-backend.bat
echo ============================================
pause
