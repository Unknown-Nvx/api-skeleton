const express = require('express');
const app = express();

app.use('/', require('./controllers/controller'));

app.listen(3000);

// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb+srv://bot:iGbLGncZJIEXeKRI@cluster0.1ipw1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// }

// const schema = new mongoose.Schema({ name: 'string', size: 'string' });
// const Tank = mongoose.model('Tank', schema, 'toto');

// Tank.watch().on('change', data => {
//     console.log(data);
// })

// // const small = new Tank({ size: 'small' });
// // small.save(function (err) {
// //     if (err) throw err;
// //     console.log("inserted");
// // });

// // or

// // Tank.create({ size: 'small' }, (err, doc) => {
// //     if (err) throw err;
// //     console.log(doc);
// // });