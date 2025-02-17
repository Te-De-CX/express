const mongoose = require('mongoose');	// Import mongoose
const userSchema = new mongoose.Schema({	// Create a schema for the user
    name: {type: String, required: true}
});
const User = mongoose.model('User', userSchema);	// Create a model for the user
module.exports = User;	// Export the user model