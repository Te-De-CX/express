let users = [
    { id:1, name:"John" },
    { id:2, name:"Jane" },
    { id:3, name:"Bob" },
]

const getUsers = (req, res) => {
    res.json(users);
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if(!user) return res.status(404).json({message: 'User not found'});
    res.json(user);
}

const createUser = (req, res) => {
    const { name } = req.body;
    if (!name || typeof name !== 'string') {
        return res.status(400).json({ message: 'Invalid or missing name' });
    }
    const newUser = {
        id : users.length + 1,
        name : name
    };
    users.push(newUser);
    res.status(201).json(newUser)
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if(!user) return res.status(404).json({ message: "user not found" });
    user.name = req.body.name;
    res.status(200).json(user);
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if(!user) return res.status(404).json({ message: "user not found" });
    users = users.filter(user => user.id !== id);
    res.status(200).json(user);
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}