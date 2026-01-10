# 🔧 SOLUSI ERROR: ERR_CONNECTION_REFUSED

## 📌 Penjelasan Error
Error `ERR_CONNECTION_REFUSED` terjadi karena **backend server tidak berjalan** di port 5000. 
Frontend mencoba mengakses `http://localhost:5000/api/auth/...` tapi tidak ada server yang menerima request.

---

## ✅ LANGKAH-LANGKAH PERBAIKAN (DARI AWAL HINGGA AKHIR)

### **LANGKAH 1: Pastikan MySQL Server Berjalan**

1. **Buka XAMPP Control Panel**
2. **Start MySQL** (klik tombol Start pada MySQL)
3. Pastikan statusnya berubah menjadi hijau/running

---

### **LANGKAH 2: Setup Database**

1. **Buka phpMyAdmin** (klik Admin pada MySQL di XAMPP)
2. **Buat database baru** dengan nama: `belajarreact_db`
3. **Jalankan SQL berikut** untuk membuat tabel users:

```sql
CREATE DATABASE IF NOT EXISTS belajarreact_db;
USE belajarreact_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullname VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

### **LANGKAH 3: Konfigurasi File .env (Server)**

1. **Buka folder:** `server/.env`
2. **Pastikan isinya seperti ini:**

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=belajarreact_db
JWT_SECRET=rahasia_super_aman_12345
```

**CATATAN PENTING:**
- `DB_USER`: Gunakan `root` (default XAMPP)
- `DB_PASSWORD`: Kosongkan (default XAMPP tidak ada password)
- Jika password MySQL Anda berbeda, sesuaikan di sini

---

### **LANGKAH 4: Install Dependencies Backend**

**Buka Terminal/PowerShell** dan jalankan:

```powershell
cd server
npm install
```

Tunggu sampai semua package terinstall (express, mysql2, cors, bcrypt, jsonwebtoken, dll)

---

### **LANGKAH 5: Jalankan Backend Server**

**Ada 2 cara:**

#### **Cara 1: Menggunakan file .bat (Recommended)**
1. **Double click** file `run-backend.bat` di folder root
2. Server akan otomatis berjalan

#### **Cara 2: Manual via Terminal**
```powershell
cd server
npm run dev
```

**Anda akan melihat output seperti ini jika berhasil:**
```
✅ Database connected successfully
🚀 Server berjalan di http://localhost:5000
```

**⚠️ JANGAN TUTUP TERMINAL INI!** Biarkan tetap berjalan selama development.

---

### **LANGKAH 6: Test Backend**

1. **Buka browser** dan kunjungi: `http://localhost:5000`
2. Jika berhasil, Anda akan melihat JSON response:

```json
{
  "message": "Server berjalan dengan baik!",
  "endpoints": {
    "signup": "POST /api/auth/signup",
    "login": "POST /api/auth/login",
    "profile": "GET /api/auth/profile"
  }
}
```

---

### **LANGKAH 7: Jalankan Frontend**

**Buka Terminal BARU** (jangan tutup terminal backend) dan jalankan:

```powershell
npm run dev
```

Atau double click file `run-frontend.bat`

---

### **LANGKAH 8: Test Register/Login**

1. **Buka browser** ke `http://localhost:5173` (atau port yang ditampilkan)
2. **Coba Register** dengan data baru
3. **Coba Login** dengan akun yang sudah dibuat
4. Error `ERR_CONNECTION_REFUSED` seharusnya **SUDAH HILANG**! ✅

---

## 🔍 TROUBLESHOOTING

### **Error: Database connection failed**
- ✅ Pastikan MySQL di XAMPP sudah berjalan
- ✅ Periksa username dan password di file `.env`
- ✅ Pastikan database `belajarreact_db` sudah dibuat

### **Error: Port 5000 already in use**
```powershell
# Matikan proses yang menggunakan port 5000
netstat -ano | findstr :5000
taskkill /PID [PID_NUMBER] /F
```

### **Error: Cannot find module**
```powershell
cd server
rm -r node_modules
rm package-lock.json
npm install
```

### **Frontend masih error setelah backend running**
- ✅ Pastikan backend benar-benar berjalan di `http://localhost:5000`
- ✅ Refresh halaman frontend (Ctrl + F5)
- ✅ Clear cache browser
- ✅ Periksa console browser untuk error lain

---

## 📝 CHECKLIST SEBELUM TESTING

- [ ] MySQL di XAMPP sudah berjalan
- [ ] Database `belajarreact_db` sudah dibuat
- [ ] Tabel `users` sudah dibuat
- [ ] File `server/.env` sudah dikonfigurasi dengan benar
- [ ] Dependencies backend sudah diinstall (`npm install`)
- [ ] Backend server sudah berjalan di port 5000
- [ ] Frontend sudah berjalan di port 5173
- [ ] Kedua terminal tetap terbuka dan berjalan

---

## 🚀 CARA KERJA YANG BENAR

1. **Start MySQL** (XAMPP)
2. **Start Backend** (`run-backend.bat` atau `cd server && npm run dev`)
3. **Start Frontend** (`run-frontend.bat` atau `npm run dev`)
4. **Test Aplikasi** (register/login)

**INGAT:** Backend dan Frontend harus berjalan **BERSAMAAN** di terminal yang berbeda!

---

## 📞 JIKA MASIH ERROR

Periksa output error di:
1. **Terminal backend** - untuk error server/database
2. **Browser console** (F12) - untuk error frontend
3. **Network tab** (F12) - untuk melihat HTTP request/response

Jika masih error, catat pesan error lengkapnya untuk troubleshooting lebih lanjut.
