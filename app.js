// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
app.use(require('cors')());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Budgeting App");
});

const transactionsController = require("./controllers/transactionsController");
app.use("/transactions", transactionsController);


// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});


// EXPORT
module.exports = app;