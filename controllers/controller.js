console.log("controller loaded");

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    require('../routes/home')(req, res);
})

router.get('/second', (req, res, next) => {
    res.json({ message: "second page" });
})

router.get('/third', (req, res, next) => {
    res.json({ message: "third page" });
})

module.exports = router;
