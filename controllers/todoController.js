var data = [{item: 'do something'}];
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {
    app.get('/todo', (req,res)=>{
        res.render('todo', {todos: data});
    })
    .post('/todo', urlEncodedParser, (req,res)=>{
        data.push(req.body);
        res.json(data);
    })
    .delete('/todo/:item', (req,res)=>{
        data = data.filter((todo)=>{
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });

};