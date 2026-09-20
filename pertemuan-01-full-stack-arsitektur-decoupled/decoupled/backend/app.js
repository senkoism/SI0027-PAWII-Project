// Mini Project - Pertemuan 1: Arsitektur Decoupled (Backend)
// Tujuan: backend hanya menyediakan data murni (JSON), tidak merender tampilan.
//
// TODO Mahasiswa:
// 1. Lengkapi array `produk` dengan data yang SAMA dengan versi monolitik.
// 2. Lengkapi endpoint GET /api/produk agar mengirim seluruh data sebagai JSON.
// 3. Jalankan dengan: npm install && npm start, lalu buka http://localhost:4000/api/produk

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());

// TODO 1: lengkapi data produk
const produk = [
  { nama: "Ram 16GB DDR5", harga: 1999999 },
  { nama: "SSD NVME 1TB", harga: 2250000 },
  { nama: "HDD 1TB", harga: 3759000 },
];

app.get("/api/produk", (req, res) => {
  // TODO 2: kirim `produk` sebagai response JSON
  res.json(produk);
});

app.listen(PORT, () => {
  console.log(`Backend API decoupled berjalan di http://localhost:${PORT}/api/produk`);
});
