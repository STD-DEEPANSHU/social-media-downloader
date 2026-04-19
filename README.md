# ⚡ Social Media Downloader

🚀 **The Ultimate Social Media Downloader** — Download videos from YouTube, Instagram & TikTok in seconds with a blazing-fast engine and a stunning premium UI.

<p align="center">
  <b>Paste URL → Click Download → Done ⚡</b>
</p>

---

## 📸 Preview

<p align="center">
  <img src="frontend/public/preview.png" alt="Preview" width="800"/>
</p>

---

## ✨ Features

* ⚡ Ultra-fast video downloads
* 🎬 Instant preview before download
* 🎧 Supports MP4 & MP3 extraction
* 🌐 Works across multiple platforms
* 📱 Fully responsive (mobile + desktop)
* 🎨 Clean, modern & premium UI

---

## 🧠 Tech Stack

* **Frontend:** Next.js (TypeScript), Tailwind CSS, Framer Motion
* **Backend:** FastAPI
* **Engine:** stdapi (supports 1000+ sites)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/social-media-downloader.git
cd social-media-downloader
```

---

### 2️⃣ Run Backend

```bash
cd backend
pip install -r requirements.txt
python run.py
```

👉 API running at: `http://localhost:8000`

---

### 3️⃣ Run Frontend

```bash
cd frontend
npm install
npm run dev
```

👉 App running at: `http://localhost:3000`

---

## ⚡ Usage

1. Paste your video URL
2. Click **Download**
3. Preview & download instantly

---

## 🧑‍💻 Developer Usage (stdapi)

```python
from stdapi.media import info, download_link

data = info("VIDEO_URL")
link = download_link("VIDEO_URL")

print(data["title"])
print(link)
```

---

## ⚠️ Disclaimer

This project is intended for **educational and personal use only**.
Please respect the terms of service of content platforms.

---

## ⭐ Support & Contribute

If you find this project useful:

* ⭐ Star the repo
* 🍴 Fork it
* 🛠️ Contribute improvements

---

## 🚀 Future Improvements

* 🎯 Multiple quality selection (720p / 1080p)
* 🎧 Audio-only (MP3) download
* 📂 Download history
* 🌙 Advanced UI enhancements

---

<p align="center">
  Made with ❤️ by <b>STD Deepanshu</b>
</p>
