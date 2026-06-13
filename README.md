# Shift+Scroll Tab Switcher

A lightweight browser extension for Brave and Chrome that lets you switch between tabs using **Shift + Mouse Scroll**.

- Skips collapsed tab groups
- Cycles through open groups and ungrouped tabs
- Works on all pages
- No permissions except tab access

---

## Installation

### From source (manual)

1. Download or clone this repository:
git clone https://github.com/Ruthlesscg/shift-scroll-tab-extension.git
2. Open Brave or Chrome and go to:
brave://extensions
   or
chrome://extensions
3. Enable **Developer mode** (top right toggle)
4. Click **Load unpacked**
5. Select the `shift-scroll-tab-extension` folder
6. Done! Hold **Shift** and scroll anywhere on a page to switch tabs.

---

## How it works

- **Shift + Scroll Up** → previous tab
- **Shift + Scroll Down** → next tab
- Collapsed tab groups are skipped automatically
- Wraps around (last tab → first tab and vice versa)

---

## Notes

- Works on Brave and Chrome (Manifest V3)
- Tested on Bazzite OS (Fedora-based Linux) with Brave Flatpak
- Does not work on `chrome://`, `brave://` or `edge://` internal pages (browser limitation)

---

## License

MIT License — free to use, modify and distribute.

This extension is developed with the help of Antropic Cloude

---

## Türkçe

### Shift+Scroll ile Sekme Değiştirici

Brave ve Chrome için hafif bir tarayıcı eklentisi. **Shift + Fare Tekerleği** ile sekmeler arasında geçiş yapmanı sağlar.

**Özellikler:**
- Kapalı sekme gruplarını atlar
- Açık gruplar ve grupsuz sekmeler arasında geçiş yapar
- Tüm sayfalarda çalışır
- Döngüsel geçiş (son sekmeden ilk sekmeye geçer)

**Kurulum:**

1. Bu repoyu indir veya klonla
2. Brave'de `brave://extensions` adresine git
3. Sağ üstten **Geliştirici modu**nu aç
4. **Paketlenmemiş öğe yükle** butonuna tıkla
5. İndirdiğin klasörü seç
6. Hazır! Herhangi bir sayfada **Shift + scroll** yaparak sekme değiştirebilirsin.

**Kullanım:**
- **Shift + Scroll Yukarı** → önceki sekme
- **Shift + Scroll Aşağı** → sonraki sekme

- Antropic Cloude ile geliştirilmiştir
