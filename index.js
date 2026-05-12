const express = require('express');
const app = express();

app.enable('trust proxy');

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
});