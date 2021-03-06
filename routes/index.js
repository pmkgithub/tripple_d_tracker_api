'use strict';
const router = require('express').Router();
const authController = require('../controllers/authController');
const ctrlLocations = require('../controllers/locationsController');
const ctrlReviews = require('../controllers/reviewsController');

// passport - BEGIN
const passportService = require('../services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false} );       // jwtStrategy
const requireSignin = passport.authenticate('local', { session: false } );  // localStrategyu
// passport - END

// authentication - BEGIN
router.post('/signup', authController.signup);
router.post('/signin', requireSignin, authController.signin);
// authentication - END

// locations - BEGIN
router.get('/locations', requireAuth, ctrlLocations.getAllLocations); // with auth
// Don't need .get('/locations/:state'..) b/c this logic handled on Client via cachedLocations.
// router.get('/locations/:state', requireAuth, ctrlLocations.getLocationsByState);
router.get('/locations/nearme', requireAuth, ctrlLocations.getNearmeLocations);
// locations - END

// reviews - BEGIN
router.get('/reviews/:userId', requireAuth, ctrlReviews.getReviews);
router.post('/reviews/create', requireAuth, ctrlReviews.createReview);
router.put('/reviews/edit/:userId/:reviewId', requireAuth, ctrlReviews.editReview);
router.delete('/reviews/delete/:userId/:reviewId', requireAuth, ctrlReviews.deleteReview);
// reviews - END

module.exports = router;