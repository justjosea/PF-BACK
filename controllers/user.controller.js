const User = require("../models/user.model")
const Kart = require("../models/kart.model")
const {Error, Success} = require("../functions/responseFormats")  


// CRUD de usuarios hecho

exports.createUser = async (req, res) => {
    const { body } = req;

    const user = new User(body);
    await user.save()
        .then(() => {
            res
                .status(200)
                .send(Success("Usuario creado exitosamente"));
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

exports.getUsers = async (req, res) => {
    User.find(function (error, docs) {
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
};

exports.updateUser = async (req, res) => {
    const { body } = req;
    const user = await User.findByIdAndUpdate(body.id, req.body)
    await user.save()
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

exports.deleteUser = async (req, res) => {
    const { id } = req.body;

    User.findByIdAndDelete(id, function (error, docs) {
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

exports.buyKart = async (req, res) =>{   
    
    const {idUser} = req.body
    try {
        const kart = await Kart.find({user: idUser})
        await Kart.deleteMany({user: idUser})
        const user = await User.findByIdAndUpdate(idUser, {purchases: kart})
        await user.save()
        .then(() => {
            res
                .status(200)
                .send(Success("Compra de carrito exitosa"));
        })
        .catch((error) => {
            console.log(error);
            res
                .status(500)
                .send(
                    Error(
                        "Ha ocurrido un error al registrar la compra, por favor intenta mas tarde"
                    )
                );
        });
    } catch (error) {
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
