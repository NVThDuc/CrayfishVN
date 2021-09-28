const express = require('express')
const route = require('.')
const router = express.Router()

const newsController = require('../app/controllers/NewsController');

router.use('/', newsController.index);

//NewsController.index;


module.exports =router;