const express = require("express");
const app = express();
const path = require("path");
port = 3030;

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "index.html")))
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "contact.html")))
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "music.html")))
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "about.html")))


app.listen(port, () => console.log("server running in port " + port) )