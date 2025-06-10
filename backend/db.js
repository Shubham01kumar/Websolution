const { Pool } = require('pg'); // Import Pool correctly
const pool = new Pool({
    user: 'postgres', // PostgreSQL username
    host: 'localhost', // Host (default is localhost)
    database: 'Websolution', // Your database name
    password: 'shubham@123', // Your PostgreSQL password
    port: 5432, // Default PostgreSQL port
});

module.exports = pool;