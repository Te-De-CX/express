const express = require('express');
const db = require('./db'); // Import db from db.js
const userRoutes = require('./routes/users');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});