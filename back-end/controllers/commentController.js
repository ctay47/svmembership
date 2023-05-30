const express = require('express');
const comments = express.Router();
const CommentQueries = require('../queries/commentQueries');

// POST route handler for creating a new comment
comments.post('/', async (req, res) => {
    try {
        const newComment = await CommentQueries.createComment(req.body);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

// GET route handler for getting all comments
comments.get('/', async (req, res) => {
    try {
        const comments = await CommentQueries.getAllComments();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

// GET route handler for getting a comment by id
comments.get('/:id', async (req, res) => {
    try {
        const comment = await CommentQueries.getComment(req.params.id);
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

// PUT route handler for updating a comment by id
comments.put('/:id', async (req, res) => {
    try {
        const updatedComment = await CommentQueries.updateComment(req.params.id, req.body);
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

// DELETE route handler for deleting a comment by id
comments.delete('/:id', async (req, res) => {
    try {
        await CommentQueries.deleteComment(req.params.id);
        res.status(204).json({});
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

module.exports = comments;
