var Medicion = require('../modelos/Medicion.js');

var medicionController = {};

medicionController.list = function(req, res){
    
    Medicion.find({}).exec(function(err, mediciones){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/product/index', {mediciones: mediciones} );
        
    });
    
};

module.exports = medicionController;


productController.show = function(req, res){
    Product.findOne({_id: req.params.id}).exec(function(err, product){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/product/show', {product: product} );
    });
    
};