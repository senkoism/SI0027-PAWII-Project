// Mini Project - Pertemuan 13-14: Register & Login
// TODO 1: lengkapi kedua fungsi di bawah ini.

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashed });
  res.status(201).json({ id: user._id, username: user.username });
};


exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) throw { status: 401, message: 'Username/password salah' };
 
  const cocok = await bcrypt.compare(password, user.password);
  if (!cocok) throw { status: 401, message: 'Username/password salah' };
 
  const token = jwt.sign({ 
      id: user._id, 
      username: user.username 
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  res.json({ token });
};

