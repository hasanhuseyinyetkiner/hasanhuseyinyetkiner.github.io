# 🚀 GitHub Pages Kurulum Rehberi

## ⚠️ Şu Anda Karşılaşılan Hata:

```
HttpError: Not Found
Get Pages site failed. Please verify that the repository has Pages enabled...
```

Bu hata, GitHub Pages'in henüz aktif olmadığını gösteriyor.

---

## ✅ ÇÖZÜM 1: Manuel Aktifleştirme (ÖNERİLEN - 30 SANİYE)

### Adım Adım:

1. **GitHub'da repo'nuzu açın:**
   ```
   https://github.com/hasanhuseyinyetkiner/hasanhuseyinyetkiner.github.io
   ```

2. **Settings sekmesine gidin**
   - Repo sayfasının üst kısmında, sağ tarafta "Settings" var
   - Tıklayın

3. **Sol menüden "Pages" seçin**
   - Settings sayfasında sol tarafta bir menü var
   - "Pages" yazısını bulun ve tıklayın

4. **Source ayarını yapın (EN ÖNEMLİ ADIM!):**
   ```
   Build and deployment
   ├── Source: [Dropdown açın]
   │   ├── ❌ Deploy from a branch (BUNU SEÇMEYİN!)
   │   └── ✅ GitHub Actions (BUNU SEÇİN!)
   ```

5. **Kaydedin ve bekleyin**
   - Değişiklik otomatik kaydedilir
   - "Actions" sekmesine gidin
   - Son workflow'u göreceksiniz
   - Yeşil ✓ çıkana kadar bekleyin (2-3 dakika)

6. **Siteniz hazır!**
   ```
   https://hasanhuseyinyetkiner.github.io
   ```

---

## 📸 Görsel Rehber:

```
┌─────────────────────────────────────────────┐
│  GitHub Repository                          │
│  ┌─────────────────────────────────────┐  │
│  │ < > Code  Issues  Pull Requests     │  │
│  │     Actions  Projects  ➡️ Settings  │  │
│  └─────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
                    ⬇️
┌─────────────────────────────────────────────┐
│  Settings                                   │
│  ┌───────────┬─────────────────────────┐  │
│  │ General   │ Build and deployment    │  │
│  │ Branches  │                         │  │
│  │ ➡️ Pages   │ Source:                 │  │
│  │ Actions   │ [GitHub Actions ▼]      │  │
│  │           │  ✅ GitHub Actions       │  │
│  └───────────┴─────────────────────────┘  │
└─────────────────────────────────────────────┘
```

---

## 🔄 ÇÖZÜM 2: Alternatif - Basit Deploy

Eğer yukarıdaki yöntem işe yaramazsa:

1. Settings > Pages > Source: **Deploy from a branch**
2. Branch: **main**
3. Folder: **/ (root)**
4. Save

Sonra `npm run build` çalıştırıp `dist` klasörünü manuel yükleyin.

**ANCAK:** GitHub Actions yöntemi çok daha iyi çünkü otomatik!

---

## 🆘 Hala Çalışmıyor mu?

Bana şunu söyleyin:
1. Settings > Pages sayfasını açtınız mı?
2. "Source" dropdown'unda hangi seçenekleri görüyorsunuz?
3. "GitHub Actions" seçeneği var mı?

---

## ✨ Pages Aktif Olduktan Sonra:

- Her `git push` ile otomatik güncelleme
- 2-3 dakikada yayına geçer
- URL: https://hasanhuseyinyetkiner.github.io
- Profesyonel, hızlı ve güvenli!

---

**🎯 ÖZET:** Settings > Pages > Source: GitHub Actions seçin!

