const express = require('express');
require('dotenv').config()
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth')
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});