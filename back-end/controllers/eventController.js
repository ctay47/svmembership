// controllers/EventController.js

const express = require('express');
const events = express.Router();
const { getAllEvents, getEvent, createEvent, deleteEvent, updateEvent } = require('../queries/EventQueries.js');

events.get('/', async (req, res) => {
    const allEvents = await getAllEvents();
    if (allEvents) {
        res.status(200).json(allEvents);
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

events.get('/:id', async (req, res) => {
    const { id } = req.params;
    const event = await getEvent(id);
    if (event.id) {
        res.json(event);
    } else {
        res.status(404).json({ error: 'not found' });
    }
});

events.post('/', async (req, res) => {
    const newEvent = await createEvent(req.body);
    if (newEvent.id) {
        res.status(201).json(newEvent);
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

events.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedEvent = await deleteEvent(id);
    if (deletedEvent.id) {
        res.status(200).json({ message: 'Event deleted successfully.' });
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

events.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedEvent = await updateEvent(id, req.body);
    if (updatedEvent.id) {
        res.status(200).json(updatedEvent);
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});

module.exports = events;
