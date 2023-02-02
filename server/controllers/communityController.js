const {community} = require('../models/models')
const ApiError = require("../error/ApiError");
const uuid = require("uuid")
const path = require("path")

class CommunityController {
    async create(req, res,next) {
        try {
            const {name, size} = req.body //получаем эти данные из запроса
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const Community = await community.create({name, size, img: fileName}) //create встроенная функция для создание записи
            return res.json(Community)
        }
        catch (e) {
            next (ApiError.badRequest(e.message))
        }
       
    }


    async getAll(req, res) {
        const communities = await community.findAll()
        return res.json(communities)
    }
}

module.exports = new CommunityController()