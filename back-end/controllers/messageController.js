// controllers/MessageController.js

const express = require('express');
const messages = express.Router();
const { getAllMessages, getMessage, createMessage, deleteMessage, updateMessage } = require('../queries/MessageQueries.js');

messages.get('/', async (req, res) => {
    const allMessages = await getAllMessages();
    if (allMessages) {
        res.status(200).json(allMessages);
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

messages.get('/:id', async (req, res) => {
    const { id } = req.params;
    const message = await getMessage(id);
    if (message.id) {
        res.json(message);
    } else {
        res.status(404).json({ error: 'not found' });
    }
});

messages.post('/', async (req, res) => {
    const newMessage = await createMessage(req.body);
    if (newMessage.id) {
        res.status(201).json(newMessage);
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

messages.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedMessage = await deleteMessage(id);
    if (deletedMessage.id) {
        res.status(200).json({ message: 'Message deleted successfully.' });
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

messages.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedMessage = await updateMessage(id, req.body);
    if (updatedMessage.id) {
        res.status(200).json(updatedMessage);
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

module.exports = messages;

