# Setup MySQL Database untuk BelajarReact2

## 📋 Prerequisites

1. **MySQL Server** - Pastikan MySQL sudah terinstall di komputer Anda
   - Download: https://dev.mysql.com/downloads/mysql/
   - Atau gunakan XAMPP/WAMP yang sudah include MySQL

2. **Node.js** - Untuk menjalankan backend server
   - Download: https://nodejs.org/

## 🚀 Langkah-Langkah Setup

### 1. Setup Database MySQL

#### Opsi A: Menggunakan MySQL Command Line
```bash
# Login ke MySQL
mysql -u root -p

# Jalankan script SQL
source server/config/init-database.sql
```

#### Opsi B: Menggunakan MySQL Workbench
1. Buka MySQL Workbench
2. Connect ke MySQL server
3. File > Open SQL Script
4. Pilih file `server/config/init-database.sql`
5. Execute (⚡ icon)

#### Opsi C: Menggunakan phpMyAdmin (XAMPP/WAMP)
1. Buka phpMyAdmin di browser: http://localhost/phpmyadmin
2. Klik tab "SQL"
3. Copy-paste isi file `server/config/init-database.sql`
4. Klik "Go"

### 2. Konfigurasi Backend

```bash
# Masuk ke folder server
cd server

# Install dependencies
npm install

# Edit file .env dan sesuaikan dengan konfigurasi MySQL Anda
# Buka file server/.env dengan text editor
```

Edit file `server/.env`:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=     # Isi dengan password MySQL Anda
DB_NAME=belajarreact_db
JWT_SECRET=my_secret_key_12345
```

### 3. Jalankan Backend Server

```bash
# Di folder server/
npm run dev
```

Jika berhasil, Anda akan melihat:
```
✅ Database connected successfully
🚀 Server berjalan di http://localhost:5000
```

### 4. Jalankan Frontend React

Buka terminal baru (jangan tutup terminal backend):

```bash
# Kembali ke root folder
cd ..

# Jalankan React app
npm run dev
```

Frontend akan berjalan di: http://localhost:5173

## 🧪 Testing

### Test dengan Browser
1. Buka http://localhost:5173
2. Klik toggle "Sign Up"
3. Isi form registrasi:
   - Full Name: John Doe
   - Email: john@example.com
   - Password: password123
4. Klik Submit
5. Jika berhasil, akan muncul halaman welcome
6. Coba logout dan login lagi

### Test dengan Postman/Thunder Client

**1. Test Sign Up:**
```
POST http://localhost:5000/api/auth/signup
Content-Type: application/json

{
  "fullname": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123"
}
```

**2. Test Login:**
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "jane@example.com",
  "password": "password123"
}
```

**3. Test Get Profile:**
```
GET http://localhost:5000/api/auth/profile
Authorization: Bearer YOUR_TOKEN_HERE
```

## 📁 Struktur Folder

```
belajarReact2/
├── server/                    # Backend API
│   ├── config/
│   │   ├── database.js       # Konfigurasi MySQL
│   │   └── init-database.sql # Script SQL untuk membuat database
│   ├── routes/
│   │   └── auth.js          # API routes untuk authentication
│   ├── .env                 # Environment variables
│   ├── index.js             # Entry point server
│   └── package.json
│
├── src/                      # Frontend React
│   ├── pages/
│   │   └── Auth.jsx         # Halaman Login/Signup
│   ├── services/
│   │   └── api.js           # Service untuk komunikasi dengan backend
│   └── ...
└── ...
```

## ⚙️ Konfigurasi

### Port Configuration
- **Frontend**: http://localhost:5173 (default Vite)
- **Backend**: http://localhost:5000

Jika ingin mengubah port backend, edit file `server/.env`:
```env
PORT=3000  # Ubah ke port yang diinginkan
```

Jangan lupa update juga di `src/services/api.js`:
```javascript
const API_URL = 'http://localhost:3000/api';
```

### Database Configuration
Edit `server/.env`:
```env
DB_HOST=localhost      # Host MySQL
DB_USER=root          # Username MySQL
DB_PASSWORD=          # Password MySQL
DB_NAME=belajarreact_db
```

## 🔧 Troubleshooting

### Error: "Access denied for user 'root'@'localhost'"
- Pastikan password MySQL di `.env` sudah benar
- Coba login ke MySQL manual untuk verifikasi password

### Error: "Database connection failed"
- Pastikan MySQL server sudah berjalan
- Cek konfigurasi di file `.env`
- Pastikan database `belajarreact_db` sudah dibuat

### Error: "Failed to fetch" di frontend
- Pastikan backend server sudah running
- Cek console browser untuk detail error
- Pastikan URL di `src/services/api.js` sudah benar

### Error: CORS
- Sudah diatasi dengan package `cors` di backend
- Jika masih error, pastikan backend menggunakan `app.use(cors())`

## 📚 Fitur yang Tersedia

✅ User Registration (Sign Up)
✅ User Login
✅ JWT Token Authentication
✅ Password Hashing dengan bcrypt
✅ Protected Routes (Get Profile)
✅ Auto Login setelah Sign Up
✅ Logout Functionality

## 🔐 Keamanan

- Password di-hash menggunakan bcrypt
- JWT token untuk authentication
- Token disimpan di localStorage
- Protected API routes dengan middleware verifyToken

## 📖 Dokumentasi API

Lihat file `server/README.md` untuk dokumentasi lengkap API endpoints.

## 💡 Tips

1. Jangan commit file `.env` ke Git (sudah ada di .gitignore)
2. Gunakan `.env.example` sebagai template
3. Ganti `JWT_SECRET` dengan string random yang aman untuk production
4. Untuk production, gunakan HTTPS dan environment variables yang lebih aman

## 🆘 Butuh Bantuan?

Jika ada masalah:
1. Cek console browser (F12)
2. Cek terminal backend untuk error logs
3. Cek apakah semua service sudah running (MySQL, Backend, Frontend)
