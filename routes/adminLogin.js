const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Mock admin data
const adminData = {
  username: 'admin',
  password: bcrypt.hashSync('password', 10)
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === adminData.username && bcrypt.compareSync(password, adminData.password)) {
    const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;