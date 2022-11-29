
const Review = require("../models/review.model")

const {Error, Success} = require("../functions/responseFormats")  

exports.createReview = async (req, res) => {
    const { body } = req;
    
    const review = new Review(body);

    await review.save()
        .then(() => {
            res
                .status(200)
                .send(Success("Review creada exitosamente"));
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

exports.getReviews = async (req, res) => {
    Review.find(function (error, docs) {
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

exports.deleteReview = async (req, res) => {
    const { id } = req.body;

    Review.findByIdAndDelete(id, function (error, docs) {
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
                .send(Success("Review eliminada exitosamente"));
        }
    });
}

exports.getReviewsByUser = async (req, res) => {
    const {idUser} = req.params;

    Review.find({user: idUser},function (error, docs) {
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

exports.getReviewsByProduct = async (req, res) => {
    const {idProduct} = req.params;

    Review.find({product: idProduct},function (error, docs) {
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

exports.getReviewsByRating = async (req, res) => {
    const {rating} = req.params;
    console.log(rating)
    Review.find({rating: rating},function (error, docs) {
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

exports.getUserReviewsByRating = async (req, res) => {
    const {idUser, rating} = req.params;
    Review.find({user: idUser, rating: rating},function (error, docs) {
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

exports.getProductReviewsByRating = async (req, res) => {
    const {idProduct, rating} = req.params;
    Review.find({product: idProduct, rating: rating},function (error, docs) {
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
