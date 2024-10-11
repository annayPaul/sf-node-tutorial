"use strict";

const express = require("express");
// const sessions = require("./sessions.json");
const fs = require("fs");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

const sessions = fs.readFileSync(path.join(__dirname, "sessions.json"), "utf8");

app.get("/", (req, res) => {
    res.send("<h1>Hello Salesforce Devss</h1>");
});

app.get("/api/sessions/", (req, res) => {
    res.json(JSON.parse(sessions));
});

app.listen(port, () => {
    console.log(`Express server running on https://localhost:${port}`);
});
