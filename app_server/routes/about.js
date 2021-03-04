const express = require('express');
const router = express.Router();
const ctrLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/about', ctrlOthers.about);

/* GET locations page. */
router.get('/', ctrLocations.homelist);
router.get('/location', ctrLocations.locationInfo);
router.get('/location/review/new', ctrLocations.addReview);

module.exports = router;
