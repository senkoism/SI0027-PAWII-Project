// Mini Project - Pertemuan 11-12: Controller Mahasiswa
// TODO 1: lengkapi getAll agar mendukung filtering, sorting, pagination, dan projection.
// getById/create/update/remove sudah lengkap (dari Pertemuan 9-10).

const Mahasiswa = require("../models/mahasiswaModel");

const MAX_LIMIT = 100;

// GET /mahasiswa?prodiId=...&sort=nama&page=1&limit=10&fields=nama,nim
exports.getAll = async (req, res) => {
  const filter = {};
  if (req.query.prodiId) {
    filter.prodiId = req.query.prodiId;
  }

  const page = Math.max(parseInt(req.query.page) || 1, 1);
  const limit = Math.min(parseInt(req.query.limit) || 10, MAX_LIMIT);
  const sortField = req.query.sort || "createdAt";
  const projection = req.query.fields ? req.query.fields.split(",").join(" ") : "";

  const data = await Mahasiswa.find(filter)
    .populate("prodiId")
    .select(projection)
    .sort({ [sortField]: 1 })
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Mahasiswa.countDocuments(filter);

  res.json({ data, page, limit, total });
};

exports.getById = async (req, res) => {
  const data = await Mahasiswa.findById(req.params.id).populate("prodiId");
  if (!data) throw { status: 404, message: "Tidak ditemukan" };
  res.json(data);
};

exports.create = async (req, res) => {
  const mahasiswa = await Mahasiswa.create(req.body);
  res.status(201).json(mahasiswa);
};

exports.update = async (req, res) => {
  const data = await Mahasiswa.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!data) throw { status: 404, message: "Tidak ditemukan" };
  res.json(data);
};

exports.remove = async (req, res) => {
  const data = await Mahasiswa.findByIdAndDelete(req.params.id);
  if (!data) throw { status: 404, message: "Tidak ditemukan" };
  res.status(204).send();
};
