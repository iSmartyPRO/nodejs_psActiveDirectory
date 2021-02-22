const express = require('express')
const router = express.Router()

// Подключение коетроллера
const Controller = require('../controllers/ad')

router.get('/', Controller.index)
router.get('/generateADPhotos', Controller.generateADPhotos)

module.exports = router