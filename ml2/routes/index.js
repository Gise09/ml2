var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

  const listadoProductos = JSON.parse(fs.readFileSync('data/productos.json'));

  const productosEnOferta = listadoProductos.filter((producto) => {
    return producto.category == "in-sale"
  });

  const rutaDeImagen = productosEnOferta.map((producto) => {

    producto.image = '/images/products/' + producto.image;
    return producto;

  })
   
  
  res.render('index', { title: 'Express', 'productosEnOferta': productosEnOferta });
});

module.exports = router;
