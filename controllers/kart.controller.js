const Kart = require("../models/kart.model")

const {Error, Success} = require("../functions/responseFormats")  

exports.getKartByUser = async (req, res) => {
    const {idUser} = req.params;

    Kart.find({user: idUser},function (error, docs) {
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

exports.createKartItem = async (req, res) => {
    const { body } = req;
    
    const kart = new Kart(body);

    await kart.save()
        .then(() => {
            res
                .status(200)
                .send(Success("Producto añadido al carrito"));
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
};

exports.deleteKartItem = async (req, res) => {
    const { idProduct } = req.body;
    const {idUser} = req.params;

    Kart.findOneAndDelete({user: idUser, product: idProduct}, function (error, docs) {
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
                .send(Success("Producto eliminado del carrito"));
        }
    });
}