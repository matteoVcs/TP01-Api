const express = require("express");
const { json } = require("express");
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        message: JSON.parse(fs.readFileSync("./data/message.json", 'utf8')).message
    })
});

module.exports = router;