const mongoose = require('mongoose');
const uri = 'mongodb+srv://TeDeCX:6334Te%24lim@cluster0.dfnwe.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err.message));
module.exports = mongoose;