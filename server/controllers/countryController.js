const {country} = require('../models/models')
const ApiError = require("../error/ApiError");
const uuid = require("uuid")
const path = require("path")

class CountryController {
    async create(req, res,next) {
        try {
            const {name} = req.body //получаем эти данные из запроса
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const Country = await country.create({name, img: fileName}) //create встроенная функция для создание записи
            return res.json(Country)
        }
        catch (e) {
            next (ApiError.badRequest(e.message))
        }
       
    }


    async getAll(req, res) {
        const countries = await country.findAll()
        return res.json(countries)
    }
}

module.exports = new CountryController()