// const jwt = require('jsonwebtoken');
// const pool = require('../config/db');

// const loginAdmin = async (req, res) => {
//   const { username, password } = req.body;

//   console.log("Username:", username);
//   console.log("Password:", password);
//   console.log("JWT_SECRET:", process.env.JWT_SECRET);

//   try {
//     const result = await pool.query('SELECT * FROM admin_users WHERE username = $1', [username]);

//     if (result.rows.length === 0) {
//       return res.status(401).json({ error: 'Invalid username' });
//     }

//     const user = result.rows[0];
//     const isMatch = password === user.password;

//     if (!isMatch) {
//       return res.status(401).json({ error: 'Invalid password' });
//     }

//     const token = jwt.sign(
//       { id: user.id, username: user.username },
//       process.env.JWT_SECRET || "mysecretkey",
//       { expiresIn: '2h' }
//     );

//     res.json({ message: 'Login successful', token });
//   } catch (err) {
//     console.error("Login Error:", err.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// module.exports = { loginAdmin };
