console.log("controller loaded");

const express = require('express');
const router = express.Router();

const keys = require('../models/Keys');
const Keys = new keys();

const apiKeyAuth = (req, res, next) => {
    const key = req.query.id;
    const keysList = ["123456", "azerty", "987654"];
    const keyIsValid = keysList.includes(key);

    if (!keyIsValid) {
        res.json({ error: "API Key does not exist or is incorrect" });
        return;
    }
    next();
}

router.get('/', apiKeyAuth, (req, res, next) => {
    require('../routes/home')(req, res);
})

router.get('/second', (req, res, next) => {
    res.json({ message: "second page" });
})

router.get('/third', (req, res, next) => {
    res.json({ message: "third page" });
})

module.exports = router;