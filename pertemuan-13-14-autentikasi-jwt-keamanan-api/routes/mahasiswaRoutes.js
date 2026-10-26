// Mini Project - Pertemuan 13-14: Route Mahasiswa
// TODO 3: pasang middleware verifyToken pada route POST, PUT, DELETE (GET tetap publik).

const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswaController");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", mahasiswaController.getAll);
router.get("/:id", mahasiswaController.getById);

router.post('/', verifyToken, mahasiswaController.create);
router.put('/:id', verifyToken, mahasiswaController.update);
router.delete('/:id', verifyToken, mahasiswaController.remove);

module.exports = router;
