// Mini Project - Pertemuan 11-12: Middleware Error Handling Terpusat
// TODO 2: lengkapi middleware di bawah ini.
// Didaftarkan PALING AKHIR pada app.js, setelah seluruh route.

function errorHandler(err, req, res, next) {
  let status = err.status || 500;
  let message = err.message || "Terjadi kesalahan pada server";

  if (err.name === "ValidationError") {
    status = 400;
  } else if (err.name === "CastError") {
    status = 400;
    message = `Format ${err.path} tidak valid`;
  } else if (err.code === 11000) {
    status = 400;
    message = "Data dengan nilai unik tersebut sudah ada";
  }

  if (status === 500) {
    console.error(err);
    message = "Terjadi kesalahan pada server";
  }

  res.status(status).json({ message });
}

module.exports = errorHandler;
