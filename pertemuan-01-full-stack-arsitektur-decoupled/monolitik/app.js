// Mini Project - Pertemuan 1: Arsitektur Monolitik
// Tujuan: server merender tampilan HTML langsung untuk dikirim ke browser.
//
// TODO Mahasiswa:
// 1. Lengkapi array `produk` dengan minimal 3 data produk (nama, harga).
// 2. Lengkapi fungsi renderHalamanProduk() agar menghasilkan HTML yang
//    menampilkan seluruh data produk dalam bentuk daftar (<ul><li>...).
// 3. Jalankan dengan: npm install && npm start, lalu buka http://localhost:3000

const express = require("express");
const app = express();
const PORT = 3000;

const produk = [
  { nama: "Ram 16GB DDR5", harga: 1999999 },
  { nama: "SSD NVME 1TB", harga: 2250000 },
  { nama: "HDD 1TB", harga: 3759000 },
];

function renderHalamanProduk(daftarProduk) {
  const itemHtml = daftarProduk
    .map((item) => `<li>${item.nama} - Rp${item.harga.toLocaleString("id-ID")}</li>`)
    .join("");

  return `
    <html>
      <head><title>TokoKita - Monolitik</title></head>
      <body>
        <h1>Daftar Produk (Monolitik)</h1>
        <ul>${itemHtml}</ul>
      </body>
    </html>
  `;
}

app.get("/produk", (req, res) => {
  const html = renderHalamanProduk(produk);
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server monolitik berjalan di http://localhost:${PORT}/produk`);
});
