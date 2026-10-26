// Mini Project - Pertemuan 13-14: Middleware Verifikasi Token
// TODO 2: lengkapi middleware di bawah ini.

const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const header = req.headers.authorization;
  if (!header) throw { status: 401, message: 'Token tidak ditemukan' };
 
  const token = header.split(' ')[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    throw { status: 401, message: 'Token kadaluwarsa (O_O;)' };
  }
}


module.exports = verifyToken;
