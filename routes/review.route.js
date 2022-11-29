const express = require('express');
const router = express.Router();
const controller = require('../controllers/review.controller')

router.get('/', controller.getReviews);

router.post('/', controller.createReview);

router.put('/', controller.updateReview);

router.delete('/', controller.deleteReview);

router.get('/user/:idUser', controller.getReviewsByUser);

router.get('/product/:idProduct', controller.getReviewsByProduct);

router.get('/rating/:rating', controller.getReviewsByRating);

router.get('/user/:idUser/rating/:rating', controller.getUserReviewsByRating)

router.get('/product/:idProduct/rating/:rating', controller.getProductReviewsByRating)

module.exports = router;