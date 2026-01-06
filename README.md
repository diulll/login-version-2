# BelajarReact2 - React + MySQL Authentication

Aplikasi web React dengan sistem authentication menggunakan MySQL database.

## 🚀 Quick Start

### 1. Setup Database MySQL
```bash
# Jalankan SQL script di MySQL
mysql -u root -p < QUICK-START.sql
```
Atau copy-paste isi file `QUICK-START.sql` ke MySQL Workbench/phpMyAdmin.

### 2. Konfigurasi Backend
```bash
cd server
npm install
# Edit file .env dan sesuaikan password MySQL Anda
```

### 3. Jalankan Backend Server
```bash
cd server
npm run dev
```
Server akan berjalan di: http://localhost:5000

### 4. Jalankan Frontend React  
```bash
# Di terminal baru
npm run dev
```
Frontend akan berjalan di: http://localhost:5173

## 📚 Dokumentasi Lengkap

- **Setup MySQL**: Lihat [SETUP-MYSQL.md](SETUP-MYSQL.md)
- **API Backend**: Lihat [server/README.md](server/README.md)

## ✨ Fitur

- ✅ User Registration (Sign Up)
- ✅ User Login  
- ✅ JWT Authentication
- ✅ Password Hashing (bcrypt)
- ✅ Protected Routes
- ✅ Auto Login
- ✅ Logout

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- React Router DOM

**Backend:**
- Node.js
- Express
- MySQL2
- JWT (jsonwebtoken)
- bcrypt

## 📁 Struktur Project

```
belajarReact2/
├── server/              # Backend API
│   ├── config/         # Database config
│   ├── routes/         # API routes
│   └── index.js        # Server entry
├── src/                # Frontend React
│   ├── pages/         # Page components
│   ├── services/      # API services
│   └── ...
└── QUICK-START.sql    # Database setup
```

## 🔧 Troubleshooting

Lihat [SETUP-MYSQL.md](SETUP-MYSQL.md) untuk troubleshooting lengkap.

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
