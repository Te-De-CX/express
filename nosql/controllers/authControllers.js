const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user')

const registerUser = async (req, res) => {
    try
    {
        const { name, email, password } = req.body;
        // check if the user already exists
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(400).json({ message: 'Email already in use' });
        // Hash the password
        const hashedPassword = await bcrypt.hash( password, 10 );
        //Create new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save()
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch(err) 
    {
        res.status(500).json({ message: 'Server error' });
    } 

}

const loginUser = async (req,res) => {
    try {
        const { email, password } = req.body;
        // check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message : 'Invalid email or password' });
        // compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ message: 'Invalid email or password' });
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn : '1h'});
        res.json({ token });
    }catch (err){
        res.status(500).json({ message : "Server Error" })
    }
}

module.exports = { registerUser, loginUser }
