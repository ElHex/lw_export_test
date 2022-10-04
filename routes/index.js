var express = require('express');
var router = express.Router();
var pdfgenController = require('../controllers/pdfgen');

/* GET home page. */
router.get('/', pdfgenController.generatePDF);

module.exports = router;
