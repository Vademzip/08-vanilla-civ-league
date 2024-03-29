const express = require('express')
require('dotenv').config()
const sequelize = require("./db")
const models = require('./models/models')
const cors = require('cors')
const router = require ('./routes/index.js')
const PORT = process.env.PORT || 5000
const errorHandler = require ('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler) //Обработка ошибок, после Middleware


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Сервер запустился успешно на порту ${PORT}`)
        })
    } catch (e){
        console.log(e)
    }
}

start()

