
const Categorie = require("../models/categorie.model")

const {Error, Success} = require("../functions/responseFormats")  

exports.createCategorie = async (req, res) => {
    const { body } = req;

    const categorie = new Categorie(body);
    await categorie.save()
        .then(() => {
            res
                .status(200)
                .send(Success("Categoria creada exitosamente"));
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

exports.getCategories = async (req, res) => {
    Categorie.find(function (error, docs) {
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

exports.updateCategorie = async (req, res) => {
    const { body } = req;
    const categorie = await Categorie.findByIdAndUpdate(body.id, req.body)
    await categorie.save()
        .then(() => {
            res
                .status(200)
                .send(Success("Categoria actualizada exitosamente"));
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

exports.deleteCategorie = async (req, res) => {
    const { id } = req.body;

    Categorie.findByIdAndDelete(id, function (error, docs) {
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
                .send(Success("Categoria eliminada exitosamente"));
        }
    });
}
