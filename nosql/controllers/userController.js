const User = require('../models/user');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Database query error' });
    }
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Database query error' });
    }
}

const createUser = async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Name is required' });

    try {
        const newUser = await User.create({ name });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: 'Database query error' });
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Name is required' });

    try {
        const user = await User.findByIdAndUpdate(id, { name }, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Database query error' });
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } 
    catch (err) {
        res.status(500).json({ message: 'Database query error' });
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}