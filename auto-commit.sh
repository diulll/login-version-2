#!/bin/bash

# Script untuk auto commit setiap perubahan file secara terpisah
# Author: GitHub Copilot
# Date: 2026-01-06

echo "============================================"
echo "  AUTO COMMIT - Git Script"
echo "============================================"
echo ""

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Bukan git repository!"
    echo "   Jalankan 'git init' terlebih dahulu"
    exit 1
fi

# Get all changed files
echo "📝 Mengambil daftar file yang berubah..."
echo ""

# Get unstaged files
CHANGED_FILES=$(git diff --name-only)
# Get staged files
STAGED_FILES=$(git diff --cached --name-only)
# Get untracked files
UNTRACKED_FILES=$(git ls-files --others --exclude-standard)

# Combine all files
ALL_FILES="$CHANGED_FILES"$'\n'"$STAGED_FILES"$'\n'"$UNTRACKED_FILES"

# Remove empty lines and duplicates
UNIQUE_FILES=$(echo "$ALL_FILES" | grep -v '^$' | sort -u)

# Count files
FILE_COUNT=$(echo "$UNIQUE_FILES" | grep -c .)

if [ -z "$UNIQUE_FILES" ] || [ "$FILE_COUNT" -eq 0 ]; then
    echo "✅ Tidak ada perubahan untuk di-commit"
    exit 0
fi

echo "🔍 Ditemukan $FILE_COUNT file yang berubah:"
echo "--------------------------------------------"
echo "$UNIQUE_FILES" | nl -w2 -s'. '
echo "--------------------------------------------"
echo ""

# Confirm
read -p "❓ Lanjutkan commit satu persatu? (y/n): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Dibatalkan"
    exit 0
fi

echo ""
echo "🚀 Memulai auto commit..."
echo ""

# Counter
COUNT=0
SUCCESS=0
FAILED=0

# Loop through each file
while IFS= read -r file; do
    if [ -z "$file" ]; then
        continue
    fi
    
    COUNT=$((COUNT + 1))
    
    echo "--------------------------------------------"
    echo "[$COUNT/$FILE_COUNT] Processing: $file"
    echo "--------------------------------------------"
    
    # Get file extension for better commit message
    EXTENSION="${file##*.}"
    FILENAME=$(basename "$file")
    DIRNAME=$(dirname "$file")
    
    # Create commit message based on file type
    if [ "$DIRNAME" = "." ]; then
        DIR_INFO=""
    else
        DIR_INFO=" di $DIRNAME"
    fi
    
    case "$EXTENSION" in
        md)
            COMMIT_MSG="docs: update $FILENAME$DIR_INFO"
            ;;
        jsx|js)
            COMMIT_MSG="feat: update $FILENAME$DIR_INFO"
            ;;
        css)
            COMMIT_MSG="style: update $FILENAME$DIR_INFO"
            ;;
        sql)
            COMMIT_MSG="db: update $FILENAME$DIR_INFO"
            ;;
        bat|sh)
            COMMIT_MSG="script: update $FILENAME$DIR_INFO"
            ;;
        json)
            COMMIT_MSG="config: update $FILENAME$DIR_INFO"
            ;;
        *)
            COMMIT_MSG="chore: update $FILENAME$DIR_INFO"
            ;;
    esac
    
    # Add file to staging
    git add "$file"
    
    # Check if add was successful
    if [ $? -eq 0 ]; then
        # Commit the file
        git commit -m "$COMMIT_MSG"
        
        if [ $? -eq 0 ]; then
            echo "✅ Berhasil commit: $file"
            SUCCESS=$((SUCCESS + 1))
        else
            echo "❌ Gagal commit: $file"
            FAILED=$((FAILED + 1))
        fi
    else
        echo "❌ Gagal menambahkan file: $file"
        FAILED=$((FAILED + 1))
    fi
    
    echo ""
    
done <<< "$UNIQUE_FILES"

# Summary
echo "============================================"
echo "  RINGKASAN"
echo "============================================"
echo "Total file     : $FILE_COUNT"
echo "✅ Berhasil    : $SUCCESS"
echo "❌ Gagal       : $FAILED"
echo "============================================"
echo ""

if [ $SUCCESS -gt 0 ]; then
    echo "💡 Tips:"
    echo "   - Untuk melihat commit: git log --oneline"
    echo "   - Untuk push ke remote: git push origin main"
    echo ""
fi

echo "✨ Selesai!"
