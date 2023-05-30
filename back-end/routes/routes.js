const express = require('express');
const router = express.Router();

const userRouter = require('./routes/userRouter');
const nftRouter = require('./routes/nftRouter');
const eventRouter = require('./routes/eventRouter');
const messageRouter = require('./routes/messageRouter');
const commentRouter = require('./routes/commentRouter');

router.use('/users', userRouter);
router.use('/nfts', nftRouter);
router.use('/events', eventRouter);
router.use('/messages', messageRouter);
router.use('/comments', commentRouter);

module.exports = router;
