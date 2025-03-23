const { Pool } = require('pg'); // PostgreSQL

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: 5432, // Default PostgreSQL port
    ssl: {
        rejectUnauthorized: false, // Required if using AWS RDS with SSL
    }
});

// Test the database connection
pool.connect()
    .then(client => {
        console.log("Database connected successfully!");
        client.release();
    })
    .catch(err => console.error("Database connection error:", err));

module.exports = pool;
