const Router = require('express')
const router = new Router()
const playerController = require('../controllers/playerController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), playerController.create)

router.get('/', playerController.getAll)
router.get('/:id', playerController.getOne)

module.exports = router

