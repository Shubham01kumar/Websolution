const bcrypt = require('bcrypt');
const pool = require('./config/db'); // Make sure path is correct to your db config

const insertAdmin = async () => {
  try {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await pool.query(
      'INSERT INTO admin_users (username, password) VALUES ($1, $2)',
      ['admin', hashedPassword]
    );
    console.log('Admin inserted');
    process.exit(0); // exit after successful insert
  } catch (error) {
    console.error('Error inserting admin:', error);
    process.exit(1);
  }
};

insertAdmin();
