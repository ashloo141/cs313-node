var express = require('express');
var app = express();
var todoController = require('./controllers/todoController');

app.set('view engine', 'ejs')
   .use(express.static('.'))
   .listen(3000);
console.log('You are listening to port 3000');

//controllers
todoController(app);