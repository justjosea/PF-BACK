const Product = require("../models/product.model")
const Categorie = require("../models/categorie.model")
const {Error, Success} = require("../functions/responseFormats"); 
const productModel = require("../models/product.model");


//  CRUD  de productos hecho

exports.updateProduct = async (req, res) => {
    const { body } = req;
    const product = await Product.findByIdAndUpdate(body.id, req.body);

    await product.save()
        .then(() => {
            res
                .status(200)
                .send(Success("Producto actualizado exitosamente"));
        })
        .catch((error) => {
            console.log(error);
            res
                .status(500)
                .send(
                    Error(
                        "Ha ocurrido un error, por favor intenta mas tarde"
                    )
                );
        });
}

exports.deleteProduct = async (req, res) => {  
    const { id } = req.body;

    Product.findByIdAndDelete(id, function (error, docs) {
        if (error) {
            console.log(error);
            res
                .status(500)
                .send(
                    Error(
                        "Ha ocurrido un error, por favor intenta mas tarde"
                    )
                );
        }
        else {
            res
                .status(200)
                .send(Success("Producto eliminado exitosamente"));
        }
    });
}

exports.createProduct = async (req, res) => {
    const { body } = req;

    const product = new Product(body);
    await product.save()
        .then(() => {
            res
                .status(200)
                .send(Success("Producto creado exitosamente"));
        })
        .catch((error) => {
            console.log(error);
            res
                .status(500)
                .send(
                    Error(
                        "Ha ocurrido un error, por favor intenta mas tarde"
                    )
                );
        });
}

exports.getProducts = async (req, res) => {
    Product.find(function (error, docs) {
        if (error) {
            console.log(error);
            res
                .status(500)
                .send(
                    Error(
                        "Ha ocurrido un error, por favor intenta mas tarde"
                    )
                );
        }
        else {
            res
                .status(200)
                .send(Success(docs));
        }
    })
}

exports.getProductById = async (req, res) => {  
    const { id } = req.params;
    Product.findById(id, function (error, docs) {
        if (error) {
            console.log(error);
            res
                .status(500)
                .send(
                    Error(
                        "Ha ocurrido un error, por favor intenta mas tarde"
                    )
                );
        }
        else {
            res
                .status(200)
                .send(Success(docs));
        }
    })
}

exports.getProductByName = async (req, res) => {  
    const { name } = req.body;
    
    Product.find({name: name}, function (error, docs) {
        if (error) {
            console.log(error);
            res
                .status(500)
                .send(
                    Error(
                        "Ha ocurrido un error, por favor intenta mas tarde"
                    )
                );
        }
        else {
            res
                .status(200)
                .send(Success(docs));
        }
    })
}

exports.getProductByCategories = async (req, res) => {  
    const { categories } = req.body;
    try{
        let products = await Product.find()
    
        products = await products.filter( product => checkCategories(product.categories, categories))
      
        res.status(200).send(Success(products));
    }
    catch(error){
        console.log(error);
            res
                .status(500)
                .send(
                    Error(
                        "Ha ocurrido un error, por favor intenta mas tarde"
                    )
                );
    }
   
    
}

exports.getProductByCategorieName = async (req, res) =>{
    const { name } = req.body;
   
    try{
        const categorie = await Categorie.findOne({name: name}, '_id')
        let products = await Product.find()
        products = products.filter(product => product.categories.includes(categorie._id))
        res.status(200).send(Success(products));
    }
    catch(error){
        console.log(error);
        res
            .status(500)
            .send(
                Error(
                    "Ha ocurrido un error, por favor intenta mas tarde"
                )
            );
    }

}

function checkCategories(main, toLook){
    return toLook.every(categorie => main.includes(categorie))
} 