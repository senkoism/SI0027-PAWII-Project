// Mini Project - Pertemuan 3-4: RESTful API CRUD dengan Express.js
// Entitas: mahasiswa (id, nama, jurusan)
//
// TODO Mahasiswa: lengkapi setiap handler di bawah ini sesuai komentar.
// Jalankan dengan: npm install && npm start

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let mahasiswa = [
  { id: 1, nama: "Ahuwa", jurusan: "Sistem Informasi", status : "Aktif" },
  { id: 2, nama: "herry", jurusan: "Informatika", status : "Cuti" },
  { id: 3, nama: "Akiong", jurusan: "Manajemen", status : "Cuti"},
  { id: 4, nama: "Taufiq", jurusan: "Elektro", status : "Aktif"},
];

// TODO 1: GET /mahasiswa -> kirim seluruh data sebagai JSON
app.get("/mahasiswa", (req, res) => {
  res.json(mahasiswa);
  if (!data) return res.status(404).json({message:'data tidak ditemukan'});
  req.json(data);
});

// TODO 2: GET /mahasiswa/:id -> cari data berdasarkan id,
// kirim 404 dengan { message: 'Data tidak ditemukan' } jika tidak ada
app.get("/mahasiswa/:id", (req, res) => {
  req.json({message:'Data tidak ditemukan'});
});

// TODO 3: POST /mahasiswa -> ambil { nama, jurusan } dari req.body,
// buat objek baru dengan id = mahasiswa.length + 1, simpan ke array,
// kirim response dengan status 201
app.post("/mahasiswa", (req, res) => {
  req.body(
    
  );
});

// TODO 4: PUT /mahasiswa/:id -> cari index berdasarkan id,
// jika tidak ditemukan kirim 404, jika ditemukan gabungkan data lama
// dengan req.body lalu kirim data yang telah diperbarui
app.put("/mahasiswa/:id", (req, res) => {
  // lengkapi di sini
});

// TODO 5: DELETE /mahasiswa/:id -> cari index berdasarkan id,
// jika tidak ditemukan kirim 404, jika ditemukan hapus dari array
// dan kirim response dengan status 204
app.delete("/mahasiswa/:id", (req, res) => {
  // lengkapi di sini
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
