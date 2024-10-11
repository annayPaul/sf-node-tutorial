const express = require("express");
const jsforce = require("jsforce");
const app = express();
const PORT = 3001;
require("dotenv").config();

const { SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_TOKEN } = process.env;
const connection = new jsforce.Connection({
    loginUrl: SF_LOGIN_URL,
});

connection.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, (error, user) => {
    if (error) {
        console.log(error);
    } else {
        console.log(user.id);
        console.log(user.organizationId);
    }
});

app.get("/", (req, res) => {
    res.send("Integration Success!....");
});
app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
});
