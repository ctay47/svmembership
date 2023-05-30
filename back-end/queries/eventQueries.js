// queries/EventQueries.js

const db = require('../db/dbConfig');

const getAllEvents = async () => {
    try {
        const events = await db.any('SELECT * FROM events');
        return events;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getEvent = async (id) => {
    try {
        const event = await db.one('SELECT * FROM events WHERE id = $1', [id]);
        return event;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const createEvent = async (event) => {
    try {
        const newEvent = await db.one(
            'INSERT INTO events (title, description, date, location) VALUES ($1, $2, $3, $4) RETURNING *',
            [event.title, event.description, event.date, event.location]
        );
        return newEvent;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const deleteEvent = async (id) => {
    try {
        const deletedEvent = await db.one('DELETE FROM events WHERE id = $1 RETURNING *', [id]);
        return deletedEvent;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const updateEvent = async (id, event) => {
    try {
        const updatedEvent = await db.one(
            'UPDATE events SET title = $1, description = $2, date = $3, location = $4 WHERE id = $5 RETURNING *',
            [event.title, event.description, event.date, event.location, id]
        );
        return updatedEvent;
    } catch (error) {
        console.log(error);
        return null;
    }
};

module.exports = {
    getAllEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent,
};
