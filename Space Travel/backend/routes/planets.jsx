const express = require('express');
const router = express.Router();
const planetsController = require('../controllers/planetsController');

router.get('/', planetsController.getPlanets); // Get / Planets

module.exports = router;