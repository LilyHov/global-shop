const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    console.log("request incoming");
    res.json({ time: Date.now() });
});

app.listen(8080);