const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

let siteData = {};

// receive data from extension
app.post("/track", (req, res) => {
    const { site, time } = req.body;

    if (!siteData[site]) {
        siteData[site] = 0;
    }

    siteData[site] += time;

    console.log(site, siteData[site]);

    res.json({ status: "saved" });
});

// send report
app.get("/report", (req, res) => {
    res.json(siteData);
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});