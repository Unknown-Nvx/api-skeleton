const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => require('./controllers/home')(req, res, next));

module.exports = router;
