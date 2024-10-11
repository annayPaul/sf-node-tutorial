"use strict";

const http = require("http");
const sessions = require("./sessions.json");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write("<h1>Hello SF Devs</h1>");
        res.write("<p>This is our first Node App</p>");
    } else if (req.url === "/api/sessions") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.write(JSON.stringify(sessions));
    } else {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.write(`404: Not Found - ${req.url}`);
    }
    res.end();
});

// https://conference-lwc-app.herokuapp.com/api/sessions/
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// continue from : https://www.youtube.com/live/vqPr64AZdTQ?si=3qaIzo76un2lmU5R&t=1178
