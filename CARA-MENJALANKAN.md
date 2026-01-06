# 🎯 Cara Menjalankan Project

## Langkah 1: Setup Database

### A. Buka MySQL
- **Jika pakai XAMPP**: Buka XAMPP, start Apache & MySQL, lalu buka http://localhost/phpmyadmin
- **Jika pakai MySQL Workbench**: Buka aplikasinya dan connect ke MySQL
- **Jika pakai Command Line**: 
  ```bash
  mysql -u root -p
  ```

### B. Buat Database
Copy-paste script ini ke MySQL:

```sql
CREATE DATABASE IF NOT EXISTS belajarreact_db;
USE belajarreact_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_email ON users(email);
```

Atau jalankan file: `QUICK-START.sql`

## Langkah 2: Setup Backend

### A. Install Dependencies
```bash
cd server
npm install
```

### B. Edit File .env
Buka file `server/.env` dan ubah password MySQL:
```
DB_PASSWORD=     # <-- isi dengan password MySQL kamu
```

Jika pakai XAMPP dan belum set password, biarkan kosong.

## Langkah 3: Jalankan Backend

Di folder `server/`:
```bash
npm run dev
```

✅ Jika berhasil, akan muncul:
```
✅ Database connected successfully
🚀 Server berjalan di http://localhost:5000
```

❌ Jika error "Access denied":
- Cek password di file `.env`
- Pastikan MySQL sudah running

## Langkah 4: Jalankan Frontend

**Buka terminal BARU** (jangan tutup yang backend):

```bash
# Kembali ke folder root
cd ..

# Jalankan React
npm run dev
```

Buka browser: http://localhost:5173

## 🧪 Testing

1. Di browser, buka http://localhost:5173
2. Klik toggle untuk **Sign Up**
3. Isi form:
   - Full Name: Test User
   - Email: test@gmail.com
   - Password: 123456
4. Klik Submit
5. Jika berhasil → muncul "Welcome, Test User!"
6. Coba Logout dan Login lagi

## ❗ Troubleshooting

### "Database connection failed"
- Pastikan MySQL sudah running (XAMPP/MySQL Server)
- Cek file `server/.env` sudah benar
- Pastikan database `belajarreact_db` sudah dibuat

### "Failed to fetch"
- Pastikan backend sudah running di http://localhost:5000
- Cek terminal backend, harus ada pesan "Server berjalan..."

### "Email sudah terdaftar"
- Normal! Email memang harus unik
- Gunakan email berbeda untuk sign up

### Port sudah digunakan
- Tutup aplikasi lain yang pakai port 5000 atau 5173
- Atau ubah port di `server/.env` (PORT=3000)

## 📝 Catatan

- **Backend** harus running terus selama development
- **Frontend** juga harus running
- Jadi total ada 2 terminal yang aktif

---

**Butuh bantuan lebih?** Lihat file `SETUP-MYSQL.md` untuk panduan lengkap.
