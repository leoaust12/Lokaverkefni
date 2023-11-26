const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'ivan',
  password: 'ivandb',
  database: 'ivansql',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Route for handling user login
router.post('/', (req, res) => {
  const { username, password } = req.body;

  // Check if username exists in the database
  pool.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
    if (error) {
      console.error('Error checking username:', error);
      return res.status(500).json({ message: 'Error checking username' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0];

    // Check if password matches the password in the database
    bcrypt.compare(password, user.password, (compareError, isMatch) => {
      if (compareError) {
        console.error('Error comparing passwords:', compareError);
        return res.status(500).json({ message: 'Error comparing passwords' });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate a JWT token upon successful login
      const token = jwt.sign({ username: user.username }, 'your-secret-key', { expiresIn: '1h' });

      // Set an HTTP-only cookie with the token
      res.cookie('token', token, { httpOnly: true });

      res.status(200).json({ message: 'Login successful', username: user.username });
    });
  });
});

module.exports = router;