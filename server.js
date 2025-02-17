const express = require('express');

const app = express();
let users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Jack'}
];

app.use(express.json());

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if(!user) return res.status(404).json({message: 'User not found'});
    res.json(user);
});

app.post('/users', (req, res) => {
    const newUser = {
        id: 4, 
        name: "dude"
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({message: "User not found"});
    user.name = req.body.name;
    res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if(!user) return res.status(404).json({message: 'User not found'});
    users = users.filter(user => user.id !== id);
    res.json(user);
});

app.listen(3000, () => {   
    console.log('Server started');
});