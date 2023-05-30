// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();
const usersController = require("./controllers/usersController.js");
const messagesController = require("./controllers/messageController.js");
const eventsController = require("./controllers/eventController.js");
const nftsController = require("./controllers/nftController.js");
const commentsController = require("./controllers/commentController.js");

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
app.use(cors());

app.use("/users", usersController);
app.use("/events", eventsController);
app.use("/messages", messagesController);
app.use("/nfts", nftsController);
app.use("/comments", commentsController);



// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the NFT StreetVerse Membership API!");
});

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;


