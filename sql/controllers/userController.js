const db = require('../db/db');

const getUsers = (req, res) => {
    db.query("SELECT * FROM users;", (err, results) => {
        if (err) return res.status(500).json({ message: "Database query error" });
        if (results.length === 0) return res.status(404).json({ message: "No users found" });
        res.json(results);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database query error' });
        if (results.length === 0) return res.status(404).json({ message: 'User not found' });
        res.json(results[0]);
    });
};

const createUser = (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Name is required' });

    db.query('INSERT INTO users (name) VALUES (?)', [name], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database query error' });
        res.status(201).json({ id: results.insertId, name });
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Name is required' });

    db.query('UPDATE users SET name = ? WHERE id = ?', [name, id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database query error' });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
        res.json({ id, name });
    });
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database query error' });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted' });
    });
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};