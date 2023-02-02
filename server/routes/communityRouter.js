const Router = require('express')
const router = new Router()
const communityController = require('../controllers/communityController')


router.post('/', communityController.create)
router.get('/', communityController.getAll)
router.get('/:id')

module.exports = router

