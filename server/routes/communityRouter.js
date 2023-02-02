const Router = require('express')
const router = new Router()
const communityController = require('../controllers/communityController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'),communityController.create)
router.get('/', communityController.getAll)
router.get('/:id')

module.exports = router

