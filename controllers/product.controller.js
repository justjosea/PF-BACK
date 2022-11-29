const Product = require("../models/product.model")
const {Error, Success} = require("../functions/responseFormats") 

getProductReviews = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('reviews');
}





//  CRUD  de productos hecho

exports.updateProduct = async (req, res) => {
    const { body } = req;
    const product = await Product.findByIdAndUpdate

    await product.save()
        .then(() => {
            res
                .status(200)
                .send(Success("Usuario actualizado exitosamente"));
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
    const { id } = req.params;

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
                .send(Success("Usuario eliminado exitosamente"));
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
    const product = await Product.findById  (id);
}

exports.getProductByName = async (req, res) => {  
    const { name } = req.params;
    const product = await Product.find({name: name});  
}
