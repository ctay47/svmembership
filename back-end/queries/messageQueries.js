// queries/MessageQueries.js

const db = require('../db/dbConfig');

const getAllMessages = async () => {
    try {
        const messages = await db.any('SELECT * FROM messages');
        return messages;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getMessage = async (id) => {
    try {
        const message = await db.one('SELECT * FROM messages WHERE id = $1', [id]);
        return message;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const createMessage = async (message) => {
    try {
        const newMessage = await db.one(
            'INSERT INTO messages (sender, receiver, content) VALUES ($1, $2, $3) RETURNING *',
            [message.sender, message.receiver, message.content]
        );
        return newMessage;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const deleteMessage = async (id) => {
    try {
        const deletedMessage = await db.one('DELETE FROM messages WHERE id = $1 RETURNING *', [id]);
        return deletedMessage;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const updateMessage = async (id, message) => {
    try {
        const updatedMessage = await db.one(
            'UPDATE messages SET sender = $1, receiver = $2, content = $3 WHERE id = $4 RETURNING *',
            [message.sender, message.receiver, message.content, id]
        );
        return updatedMessage;
    } catch (error) {
        console.log(error);
        return null;
    }
};

module.exports = {
    getAllMessages,
    getMessage,
    createMessage,
    deleteMessage,
    updateMessage,
};
