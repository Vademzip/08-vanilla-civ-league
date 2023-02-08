const Router = require('express')
const router = new Router()
const communityRouter = require('./communityRouter')
const playerRouter = require('./playerRouter')
const userRouter = require('./userRouter')
const countryRouter = require('./countryRouter')


router.use('/user', userRouter)
router.use('/player', playerRouter)
router.use('/community', communityRouter)
router.use('/country', countryRouter)

module.exports = router