console.log("controller loaded");

const express = require('express');
const router = express.Router();

const keys = require('../models/Keys');
const Keys = new keys();

const apiKeyAuth = (req, res, next) => {  // middleware to check if the request have an API Key
    let keysList = []; //tmp
    const key = req.query.id;
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

router.get('/second', apiKeyAuth, (req, res, next) => {
    res.json({ message: "second page" });
})

router.get('/third', apiKeyAuth, (req, res, next) => {
    res.json({ message: "third page" });
})

module.exports = router;
