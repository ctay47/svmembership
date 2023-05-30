const express = require('express');
const users = express.Router();
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../queries/userQueries.js');

users.get('/', async (req, res) => {
    const allUsers = await getAllUsers();
    if (allUsers) {
        res.status(200).json(allUsers);
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

users.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await getUser(id);
    if (user.id) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'not found' });
    }
});

users.post('/', async (req, res) => {
    const newUser = await createUser(req.body);
    if (newUser.id) {
        res.status(201).json(newUser);
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

users.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    if (deletedUser.id) {
        res.status(200).json({ message: 'User deleted successfully.' });
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

users.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedUser = await updateUser(id, req.body);
    if (updatedUser.id) {
        res.status(200).json(updatedUser);
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

module.exports = users;

