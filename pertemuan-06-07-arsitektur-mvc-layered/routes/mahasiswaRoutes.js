// Mini Project - Pertemuan 6-7: Layer Route
// TODO 3: daftarkan ketiga endpoint berikut, arahkan ke fungsi controller yang sesuai.

const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswaController");

router.get("/", mahasiswaController.getAll);
router.get("/:id", mahasiswaController.getById);
router.post("/", mahasiswaController.create);

module.exports = router;
