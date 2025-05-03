const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Melayani file HTML dari folder 'public'
app.use(express.static('public'));

// Ketika client terhubung
wss.on('connection', (ws) => {
  console.log('🟢 Client terhubung');

  ws.on('message', (message) => {
    console.log('📨 Pesan diterima:', message);

    // Kirim ke semua client yang terhubung
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('🔴 Client terputus');
  });
});

// Jalankan server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
