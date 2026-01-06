# Contoh Penggunaan API

## 1. Sign Up (Registrasi User Baru)

### Request
```http
POST http://localhost:5000/api/auth/signup
Content-Type: application/json

{
  "fullname": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Response (Success)
```json
{
  "success": true,
  "message": "Registrasi berhasil!",
  "data": {
    "id": 1,
    "fullname": "John Doe",
    "email": "john@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Response (Error - Email sudah terdaftar)
```json
{
  "success": false,
  "message": "Email sudah terdaftar!"
}
```

---

## 2. Log In

### Request
```http
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Response (Success)
```json
{
  "success": true,
  "message": "Login berhasil!",
  "data": {
    "id": 1,
    "fullname": "John Doe",
    "email": "john@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Response (Error - Email/Password salah)
```json
{
  "success": false,
  "message": "Email atau password salah!"
}
```

---

## 3. Get Profile (Protected Route)

### Request
```http
GET http://localhost:5000/api/auth/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 1,
    "fullname": "John Doe",
    "email": "john@example.com",
    "created_at": "2026-01-01T10:30:00.000Z"
  }
}
```

### Response (Error - Token tidak valid)
```json
{
  "success": false,
  "message": "Token tidak valid"
}
```

---

## Testing dengan cURL

### Sign Up
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d "{\"fullname\":\"Jane Doe\",\"email\":\"jane@example.com\",\"password\":\"pass123\"}"
```

### Log In
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"jane@example.com\",\"password\":\"pass123\"}"
```

### Get Profile
```bash
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## Testing dengan JavaScript (Frontend)

### Sign Up
```javascript
const response = await fetch('http://localhost:5000/api/auth/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    fullname: 'John Doe',
    email: 'john@example.com',
    password: 'password123'
  })
});

const data = await response.json();
console.log(data);
```

### Log In
```javascript
const response = await fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'john@example.com',
    password: 'password123'
  })
});

const data = await response.json();
const token = data.data.token;
// Simpan token untuk request selanjutnya
localStorage.setItem('token', token);
```

### Get Profile
```javascript
const token = localStorage.getItem('token');

const response = await fetch('http://localhost:5000/api/auth/profile', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
});

const data = await response.json();
console.log(data);
```

---

## Database Structure

### Table: users

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key, auto increment |
| fullname | VARCHAR(255) | Nama lengkap user |
| email | VARCHAR(255) | Email (unique) |
| password | VARCHAR(255) | Password (hashed) |
| created_at | TIMESTAMP | Waktu dibuat |
| updated_at | TIMESTAMP | Waktu diupdate |

---

## Query Database Manual

### Lihat semua users
```sql
SELECT id, fullname, email, created_at FROM users;
```

### Cari user by email
```sql
SELECT * FROM users WHERE email = 'john@example.com';
```

### Hapus user
```sql
DELETE FROM users WHERE email = 'john@example.com';
```

### Reset table (hapus semua data)
```sql
TRUNCATE TABLE users;
```
