const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Mock user data
const userData = {
  username: 'user',
  password: bcrypt.hashSync('password', 10)
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === userData.username && bcrypt.compareSync(password, userData.password)) {
    const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;