# ✅ CHECKLIST SETUP

Ikuti langkah-langkah ini secara berurutan:

## □ 1. Setup Database MySQL

### Pilih salah satu cara:

**Cara A - XAMPP/phpMyAdmin (Paling Mudah)**
- [ ] Buka XAMPP Control Panel
- [ ] Start Apache & MySQL
- [ ] Buka browser: http://localhost/phpmyadmin
- [ ] Klik tab "SQL"
- [ ] Copy-paste isi file `QUICK-START.sql`
- [ ] Klik "Go"

**Cara B - MySQL Workbench**
- [ ] Buka MySQL Workbench
- [ ] Connect ke MySQL
- [ ] File > Open SQL Script > pilih `QUICK-START.sql`
- [ ] Execute (klik icon ⚡)

**Cara C - Command Line**
```bash
mysql -u root -p < QUICK-START.sql
```

## □ 2. Setup Backend

- [ ] Double klik file: `setup-backend.bat` (Windows)
- [ ] ATAU jalankan manual:
  ```bash
  cd server
  npm install
  ```

## □ 3. Konfigurasi Environment

- [ ] Buka file: `server\.env`
- [ ] Edit baris `DB_PASSWORD=`
- [ ] Isi dengan password MySQL kamu
- [ ] Jika pakai XAMPP tanpa password, biarkan kosong
- [ ] Save file

## □ 4. Test Backend

- [ ] Double klik: `run-backend.bat`
- [ ] ATAU jalankan manual:
  ```bash
  cd server
  npm run dev
  ```
- [ ] Cek terminal harus muncul:
  - ✅ `Database connected successfully`
  - 🚀 `Server berjalan di http://localhost:5000`

**Jika error:**
- Cek MySQL sudah running
- Cek password di file `.env` sudah benar
- Cek database `belajarreact_db` sudah dibuat

## □ 5. Jalankan Frontend

- [ ] Buka terminal BARU (jangan tutup backend!)
- [ ] Double klik: `run-frontend.bat`
- [ ] ATAU jalankan manual:
  ```bash
  npm run dev
  ```
- [ ] Buka browser: http://localhost:5173

## □ 6. Testing

- [ ] Buka http://localhost:5173
- [ ] Klik toggle "Sign Up"
- [ ] Isi form registrasi:
  ```
  Full Name: Test User
  Email: test@gmail.com
  Password: 123456
  ```
- [ ] Klik Submit
- [ ] Harus muncul: "Welcome, Test User!"
- [ ] Klik Logout
- [ ] Coba Login lagi dengan email & password yang sama
- [ ] Harus berhasil login

---

## 🎯 Ringkasan File Penting

| File | Fungsi |
|------|--------|
| `QUICK-START.sql` | Script untuk buat database MySQL |
| `setup-backend.bat` | Install dependencies backend |
| `run-backend.bat` | Jalankan backend server |
| `run-frontend.bat` | Jalankan frontend React |
| `server/.env` | Konfigurasi database (PASSWORD!) |
| `CARA-MENJALANKAN.md` | Panduan lengkap bahasa Indonesia |
| `SETUP-MYSQL.md` | Dokumentasi detail setup MySQL |

---

## 🚨 Troubleshooting Cepat

| Masalah | Solusi |
|---------|--------|
| Database connection failed | Cek MySQL running, password di .env |
| Failed to fetch | Backend belum running |
| Port sudah digunakan | Tutup aplikasi lain atau ubah port |
| Email sudah terdaftar | Normal, pakai email lain |

---

## 📞 Butuh Bantuan?

1. Lihat file `CARA-MENJALANKAN.md`
2. Lihat file `SETUP-MYSQL.md`
3. Cek console browser (F12)
4. Cek terminal backend untuk error logs
