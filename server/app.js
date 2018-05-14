const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const con = require('./db/database.connection');
let productsList = require('./products/products');

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );


app.listen(3000, function () {
  console.log('Simpsons Guitar Store Web app service listening on port 3000!')
})

app.get('/', function (req, res) {
  res.send('Simpson\'s API. Please hit the correct API to get the information.')
})

app.post('/test', function (req, res) {
	var data = "";
	con.query('SELECT * FROM users',function(err,rows){
		if(err) throw err;
		res.send(rows);
	});
})

app.post('/allproducts', function (req, res) {
    con.query('SELECT * FROM products',function(err,rows){
      if(err) throw err;
      res.send(rows);
    });
})

app.post('/guitars', function (req, res) {
    con.query('SELECT * FROM products WHERE type = "guitars"',function(err,rows){
      if(err) throw err;
      res.send(rows);
    });
})

app.post('/straps', function (req, res) {
  con.query('SELECT * FROM products WHERE type = "straps"',function(err,rows){
    if(err) throw err;
    res.send(rows);
  });
})

app.post('/picks', function (req, res) {
  con.query('SELECT * FROM products WHERE type = "picks"',function(err,rows){
    if(err) throw err;
    res.send(rows);
  });
});

app.post('/updatecart', function (req, res) {
    // NEED TO WORK ON IT
});

app.post('/savepurchasedata', function (req, res) {
  if(req.body.username === null) {
    req.body.username = 'admin';
    req.body.purchaseDetails = 'Admin purchased items.';
  }
  sql = "INSERT INTO purchase_details (username, products) VALUES (?, ?)";
  con.query(sql, [req.body.username, req.body.purchaseDetails],function(err,rows){
    if(err) throw err;
    res.send(rows);
  });
});
