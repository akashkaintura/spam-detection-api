const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/:id', contactController.getContactDetails);

module.exports = router;