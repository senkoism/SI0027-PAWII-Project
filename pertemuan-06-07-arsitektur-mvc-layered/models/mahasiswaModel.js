// Mini Project - Pertemuan 6-7: Layer Model
// TODO 1: lengkapi data awal & tiga fungsi akses data di bawah ini.

let mahasiswa = [
  { id: 1, nama: "Andi", jurusan: "Sistem Informasi" },
  { id: 2, nama: "Budi", jurusan: "Informatika" },
];

function getAll() {
  return mahasiswa;
}

function getById(id) {
  return mahasiswa.find((m) => m.id === parseInt(id));
}

function create(data) {
  const newMahasiswa = { id: mahasiswa.length + 1, ...data };
  mahasiswa.push(newMahasiswa);
  return newMahasiswa;
}

module.exports = { getAll, getById, create };
