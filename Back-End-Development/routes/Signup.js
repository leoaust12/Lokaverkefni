const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

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

// Route for handling user signup
router.post('/', (req, res) => {
  const { username, password } = req.body;

  // Check if username already exists in the database
  pool.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
    if (error) {
      console.error('Error checking existing username:', error);
      return res.status(500).json({ message: 'Error checking existing username' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // If username is unique, insert new user into the database
    pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (error) => {
      if (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Error registering user' });
      }

      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

module.exports = router;