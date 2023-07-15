const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transaction.js");


//INDEX
transactions.get("/", (req, res) => {

  res.json(transactionsArray);
});

//SHOW
transactions.get("/:id", (req, res) => {
  if (transactionsArray[req.params.id]) {
    res.json(transactionsArray[req.params.id]);
  } else {
    res.status(404).redirect("/404");
  }
});


//CREATE
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

//DELETE
transactions.delete("/:id", (req, res) => {
  if (transactionsArray[req.params.id]) {
    const deletedTransaction = transactionsArray.splice(req.params.id, 1)
    res.json(deletedTransaction);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

//UPDATE
transactions.put("/:id", (req, res) => {
  if (transactionsArray[req.params.id]) {
    transactionsArray[req.params.id] = req.body;
    res.status(200).json(transactionsArray[req.params.id])
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});





module.exports = transactions;