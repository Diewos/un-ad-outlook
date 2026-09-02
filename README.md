# Un-Ad Outlook

Simple and yet useful extension that removes the ad element from the outlook mail page, this gives more space to the user to look at the emails

![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Firefox Add-on](https://img.shields.io/badge/Firefox-Add--on-FF7E1F?style=flat&logo=firefox)](https://addons.mozilla.org/en-US/firefox/addon/un-ad-outlook/)
![github](https://img.shields.io/badge/github-Diewos-blue?style=social&logo=github&link=https%3A%2F%2Fgithub.com%2FDiewos)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

---

## 📝 About

**Un-Ad Outlook** is a lightweight browser extension designed to enhance your Outlook email experience by removing advertisements from the mail interface. By eliminating ads, the extension provides you with a cleaner, more spacious inbox view, allowing you to focus entirely on your emails without distractions.
---

## 📥 Installation

### Firefox

Install directly from the Mozilla Firefox Add-ons store:

[![Get the addon](https://img.shields.io/badge/Get_the_Addon-Firefox-FF7E1F?style=for-the-badge&logo=firefox)](https://addons.mozilla.org/en-US/firefox/addon/un-ad-outlook/)

### Manual Installation (Release)

1. Donwload the

   ```
   un_ad_outlook.xpi
   ```
   file from the lasted release of the extension 

2. Execute it 

### Manual Installation (Development)

If you want to install from source:

1. Clone this repository:
   ```bash
   git clone https://github.com/Diewos/no-ad-outlook.git
   cd no-ad-outlook
   ```

2. **For Firefox:**
   - Open `about:debugging#/runtime/this-firefox` in Firefox
   - Click "Load Temporary Add-on"
   - Select the `manifest.json` file from the cloned directory
   - The extension will be loaded for the current session

3. **For Chrome/Edge:**
   - Open `chrome://extensions/` (or `edge://extensions/`)
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the cloned directory
   - The extension will be installed

---

## 💡 Usage

Once installed, the extension works automatically:

1. Navigate to your Outlook mail (outlook.live.com or outlook.office.com)
2. The ads will be removed automatically
3. Enjoy your ad-free email experience!

**The Extension is Deactivated by default** - install and then activate

---

## 🌐 Browser Support

| Browser | Status |
|---------|--------|
| Firefox | ✅ Fully Supported |
| Chrome/Chromium | ✅ Compatible |
| Edge | ✅ Compatible |
| Safari | ⚠️ Not Tested |

---
### Development Notes

The extension structure is simple:
- `manifest.json` - Extension configuration and permissions
- `unad.js` - Main script that removes ad elements
- `popup/` - Extension popup interface files
- `icons/` - Extension icon assets


