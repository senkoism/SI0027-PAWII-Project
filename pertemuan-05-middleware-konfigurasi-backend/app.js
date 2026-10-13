// Mini Project - Pertemuan 5: Middleware & Konfigurasi Backend
// Melanjutkan RESTful API "mahasiswa" dari Pertemuan 3-4.

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

// TODO 2: gunakan process.env.PORT sebagai PORT, dengan fallback 3000
const PORT = process.env.PORT ?? 3000;

// TODO 3: middleware kustom logger
function logger(req, res, next) {
  const waktu = new Date().toISOString();
  console.log(`[${waktu}] ${req.method} ${req.url}`);
  next();
}

// Logger harus dipasang sebelum route
app.use(logger);

// TODO 4: gunakan middleware cors
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Middleware untuk membaca JSON
app.use(express.json());

let mahasiswa = [
  { id: 1, nama: "Andi", jurusan: "Sistem Informasi" },
  { id: 2, nama: "Budi", jurusan: "Informatika" },
];

// Middleware cek API key
function cekApiKey(req, res, next) {
  const apiKey = req.headers["x-api-key"];

  if (apiKey !== "rahasia123") {
    return res.status(401).json({
      message: "API key tidak valid",
    });
  }

  next();
}

// GET semua mahasiswa
app.get("/mahasiswa", cekApiKey, (req, res) => {
  res.json(mahasiswa);
});

// GET mahasiswa berdasarkan ID
app.get("/mahasiswa/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const data = mahasiswa.find((m) => m.id === id);

    if (!data) {
      throw new Error("Data tidak ditemukan");
    }

    res.json(data);
  } catch (err) {
    // TODO 5: teruskan error ke error-handling middleware
    next(err);
  }
});

// POST mahasiswa
app.post("/mahasiswa", (req, res) => {
  const { nama, jurusan } = req.body;

  const baru = {
    id: mahasiswa.length + 1,
    nama,
    jurusan,
  };

  mahasiswa.push(baru);

  res.status(201).json(baru);
});

// PUT mahasiswa
app.put("/mahasiswa/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = mahasiswa.findIndex((m) => m.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  mahasiswa[index] = {
    ...mahasiswa[index],
    ...req.body,
  };

  res.json(mahasiswa[index]);
});

// DELETE mahasiswa
app.delete("/mahasiswa/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = mahasiswa.findIndex((m) => m.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  mahasiswa.splice(index, 1);

  res.status(204).send();
});

// TODO 6: error-handling middleware
// Harus diletakkan PALING BAWAH setelah seluruh route
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: "Terjadi kesalahan pada server",
  });
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
