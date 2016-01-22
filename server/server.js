
var express = require('express');
var app = express();

// cross origin resource sharing
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser() );

var mongoose = require('mongoose');
// db connection
mongoose.connect("mongodb://localhost/jetbrains");
// model define
var Product = mongoose.model('Product',{name: String});

/*
// insert data with model form
var product = new Product({name : "WebStorm"});
product.save(function(err){
    if(err) {
        console.log('failed');
    } else {
        console.log('saved');
    }
})
*/
app.get('/',function(req,res){
   Product.find(function(err, products) {
       res.send(products);
   })
});
app.post("/add", function(req,res) {
    var name = req.body.name;
    var product = new Product({name: name});
    product.save(function(err){
        res.send();
    })
});
app.listen(3000);