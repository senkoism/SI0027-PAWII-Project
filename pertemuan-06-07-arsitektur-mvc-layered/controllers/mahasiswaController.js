// Mini Project - Pertemuan 6-7: Layer Controller
// TODO 2: lengkapi setiap handler agar memanggil fungsi model yang sesuai.

const mahasiswaModel = require("../models/mahasiswaModel");

exports.getAll = (req, res) => {
  const data = mahasiswaModel.getAll();
  res.json(data);
};

exports.getById = (req, res) => {
  const data = mahasiswaModel.getById(req.params.id);
  if (!data) {
    return res.status(404).json({ message: "Tidak ditemukan" });
  }
  res.json(data);
};

exports.create = (req, res) => {
  const newMahasiswa = mahasiswaModel.create(req.body);
  res.status(201).json(newMahasiswa);
};
