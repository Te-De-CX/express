const mysql = require('mysql2');

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '6334Te$lim',
    database: 'userdb'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        process.exit(1); // Exit the process if the connection fails
    }
    console.log('Connected to MySQL');
});

// Export the db object
module.exports = db;