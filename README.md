
# WebSocket Real-Time Chatting App

A real-time chatting application built using **Laravel**, **WebSocket (via Laravel WebSockets)**, and **Bootstrap UI**, allowing seamless two-way communication in real-time.

![Preview Screenshot](./img/tampilan1.png)

![Preview Screenshot](./img/tampilan1-2.png)

![Preview Screenshot](./img/tampilan1-3.png)

![Preview Screenshot](./img/tampilan2.png)

![Preview Screenshot](./img/tampilan2-2.png)

![Preview Screenshot](./img/tampilan2-3.png)

---

## 🚀 Fitur Utama

- 🔁 Real-time message sending and receiving
- 👤 Nama pengguna (guest) otomatis atau manual
- 🧠 Sistem event broadcasting dengan Laravel WebSockets
- 📶 Status koneksi WebSocket real-time
- 💬 UI sederhana dan responsif berbasis Bootstrap

---

## 🛠️ Teknologi yang Digunakan

- Laravel 10.x
- Laravel WebSockets
- Laravel Echo + Pusher JS
- Bootstrap 5
- Redis (opsional untuk queue)
- Node.js (untuk server WebSocket opsional)

---

## 📁 Struktur Proyek

```
resources/
├── js/
│   └── app.js          # Konfigurasi Echo dan WebSocket
├── views/
│   └── chat.blade.php  # Tampilan halaman chatting
routes/
└── web.php             # Routing aplikasi
app/
└── Events/
    └── MessageSent.php # Event untuk mengirim pesan
```

---

## 🧪 Cara Menjalankan Proyek

```bash
# 1. Clone repo
git clone https://github.com/Ald-satriya/Websocket.git
cd Websocket

# 2. Install dependencies
composer install
npm install && npm run dev

# 3. Copy .env dan generate key
cp .env.example .env
php artisan key:generate

# 4. Jalankan migrasi (jika ada)
php artisan migrate

# 5. Jalankan WebSocket dan Laravel
php artisan serve
php artisan websockets:serve
```

---

## 🔒 Catatan Keamanan

Pastikan Anda menggunakan HTTPS dan API key yang aman untuk implementasi produksi.

---

## 📸 Tampilan Aplikasi

Gambar dapat ditemukan di folder `/img`:
- `Screenshot 2025-05-03 134727.png`

---

## 👨‍💻 Kontributor

- **Aldi Satriya** – [GitHub](https://github.com/Ald-satriya) – NPM 321310759 – Universitas Pelita Bangsa
