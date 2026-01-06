# 🚀 Auto Commit Script

Script untuk melakukan auto commit setiap perubahan file secara terpisah di Git.

## 📝 Deskripsi

Script ini akan:
- ✅ Mengambil semua file yang berubah (modified, staged, untracked)
- ✅ Commit setiap file secara terpisah dengan message yang sesuai
- ✅ Generate commit message otomatis berdasarkan tipe file
- ✅ Menampilkan ringkasan hasil commit

## 🎯 Cara Menggunakan

### Di Windows

#### Opsi 1: Menggunakan .bat (Paling Mudah)
```bash
# Double-click file atau jalankan di cmd/powershell
auto-commit.bat
```

#### Opsi 2: Menggunakan .sh di Git Bash
```bash
# Buka Git Bash, lalu jalankan:
./auto-commit.sh
```

### Di Linux/Mac

```bash
# Berikan permission execute
chmod +x auto-commit.sh

# Jalankan script
./auto-commit.sh
```

## 📋 Format Commit Message

Script akan otomatis membuat commit message berdasarkan tipe file:

| Tipe File | Prefix | Contoh |
|-----------|--------|--------|
| `.md` | `docs:` | `docs: update README.md` |
| `.jsx`, `.js` | `feat:` | `feat: update Auth.jsx` |
| `.css` | `style:` | `style: update Auth.css` |
| `.sql` | `db:` | `db: update QUICK-START.sql` |
| `.bat`, `.sh` | `script:` | `script: update auto-commit.sh` |
| `.json` | `config:` | `config: update package.json` |
| Lainnya | `chore:` | `chore: update file.txt` |

## 🔄 Alur Kerja Script

1. **Check Repository**
   - Memastikan Git terinstall
   - Memastikan berada di dalam Git repository

2. **Deteksi Perubahan**
   - Mengambil semua file yang berubah
   - Menampilkan daftar file

3. **Konfirmasi**
   - Menunggu konfirmasi dari user (y/n)

4. **Auto Commit**
   - Loop setiap file
   - Add file ke staging
   - Commit dengan message otomatis

5. **Ringkasan**
   - Menampilkan total file, berhasil, gagal

## 📊 Contoh Output

```
============================================
  AUTO COMMIT - Git Script
============================================

📝 Mengambil daftar file yang berubah...

🔍 Ditemukan 5 file yang berubah:
--------------------------------------------
 1. README.md
 2. src/pages/Auth.jsx
 3. src/services/api.js
 4. CARA-MENJALANKAN.md
 5. auto-commit.sh
--------------------------------------------

❓ Lanjutkan commit satu persatu? (y/n): y

🚀 Memulai auto commit...

--------------------------------------------
[1/5] Processing: README.md
--------------------------------------------
✅ Berhasil commit: README.md

--------------------------------------------
[2/5] Processing: src/pages/Auth.jsx
--------------------------------------------
✅ Berhasil commit: src/pages/Auth.jsx

...

============================================
  RINGKASAN
============================================
Total file     : 5
✅ Berhasil    : 5
❌ Gagal       : 0
============================================

💡 Tips:
   - Untuk melihat commit: git log --oneline
   - Untuk push ke remote: git push origin main

✨ Selesai!
```

## ⚠️ Catatan Penting

1. **Backup Dulu**
   - Pastikan sudah backup kode sebelum menjalankan script
   - Script akan langsung commit perubahan

2. **Review Perubahan**
   - Sebaiknya review perubahan dengan `git status` terlebih dahulu
   - Pastikan tidak ada file yang tidak seharusnya di-commit

3. **Git Ignore**
   - Pastikan `.gitignore` sudah dikonfigurasi dengan benar
   - File seperti `node_modules/`, `.env` tidak akan di-commit

4. **Commit Message**
   - Jika ingin custom message, edit manual setelah script selesai
   - Gunakan `git commit --amend` untuk edit commit terakhir

## 🛠️ Troubleshooting

### "Git tidak terinstall"
**Solusi:** Install Git dari https://git-scm.com/

### "Bukan git repository"
**Solusi:** Jalankan `git init` terlebih dahulu

### "Permission denied" (Linux/Mac)
**Solusi:** 
```bash
chmod +x auto-commit.sh
```

### Script tidak jalan di Windows
**Solusi:** 
- Gunakan file `.bat` untuk Command Prompt/PowerShell
- Gunakan file `.sh` untuk Git Bash

## 📚 Tips Tambahan

### Melihat History Commit
```bash
git log --oneline
```

### Undo Commit Terakhir (Soft)
```bash
git reset --soft HEAD~1
```

### Push ke Remote
```bash
git push origin main
```

### Push Semua Commit Sekaligus
```bash
# Setelah script selesai, push semua commit
git push origin main
```

## 🎓 Best Practices

1. **Commit Atomic**: Script ini sudah membuat commit per file (atomic commits)
2. **Meaningful Messages**: Message otomatis disesuaikan dengan tipe file
3. **Review Before Push**: Selalu review dengan `git log` sebelum push
4. **Branch Protection**: Gunakan branch untuk development, jangan langsung ke main

## 📞 Butuh Bantuan?

Jika ada masalah:
1. Cek apakah Git sudah terinstall: `git --version`
2. Cek apakah di dalam Git repo: `git status`
3. Review perubahan manual: `git diff`
4. Lihat log commit: `git log --oneline`

---

**Happy Coding! 🚀**
