const express = require('express');
const env = require('dotenv');
const PORT = process.env.PORT || 4747;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Keepers")
})

app.listen(PORT, () => {
    console.log("Server is connected on port " + PORT);
})