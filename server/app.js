const express = require('express')
const bodyParser = require('body-parser');
const app = express()
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

app.post('/allproducts', function (req, res) {
    res.json(productsList);
})

app.post('/guitars', function (req, res) {
    let filteredProducts = [];
    productsList.forEach(product => {
        if (product.type === 'acoustic' || product.type === 'electric') {
            filteredProducts.push(product);
        }
    });
    res.json(filteredProducts);
})

app.post('/straps', function (req, res) {
  let filteredProducts = [];
  productsList.forEach(product => {
      if (product.type === 'straps') {
          filteredProducts.push(product);
      }
  });
  res.json(filteredProducts);
})

app.post('/picks', function (req, res) {
  let filteredProducts = [];
  productsList.forEach(product => {
      if (product.type === 'pick') {
          filteredProducts.push(product);
      }
  });
  res.json(filteredProducts);
})
