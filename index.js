const express = require('express');
const app = express();

app.use('/', require('./controllers/controller'));

app.listen(3000);
