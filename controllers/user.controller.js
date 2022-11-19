const User = require("../models/user.model")
const {Error, Success} = require("../functions/responseFormats")  

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
