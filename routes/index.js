const express = require('express');
const router = express.Router();

const hello = require('./../request/GET/hello');
const calculate = require('./../request/POST/calculate');

router.use('/hello', hello);
router.use('/calculate', calculate);

module.exports = router;