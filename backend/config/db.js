// import pg from 'pg';
// import dotenv from 'dotenv';
// dotenv.config();

// const { Pool } = pg;

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// export default pool;





const { Pool } = require('pg'); // Import Pool correctly
const pool = new Pool({
    user: 'postgres', // PostgreSQL username
    host: 'localhost', // Host (default is localhost)
    database: 'Websolution', // Your database name
    password: 'shubham@123', // Your PostgreSQL password
    port: 5432, // Default PostgreSQL port

     port: process.env.DB_PORT,

});


module.exports = pool;
