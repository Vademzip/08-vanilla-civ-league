const {player} = require('../models/models')

class PlayerController {
    async create(req, res) {
        const {nickname, country, wins, pts, communityId} = req.body
        const Player = await player.create({nickname, country, wins, pts, communityId})
        return res.json(Player)
    }

    async getAll(req, res) {
        let {communityId, limit, page} = req.query
        page = page || 1
        limit = limit || 20 //limit - количество игроков на одной странице
        let offset = page * limit - limit // с какого начать
        let players;
        if (!communityId) {
            players = await player.findAndCountAll({limit,offset})
        } else {
            players = await player.findAndCountAll({where: {communityId}, limit, offset})
        }
        return res.json(players)
    }

    async getOne(req, res) {
        const {id} = req.params
        const Player = await player.findOne(
            {
                where: {id}
            }
        )
        return res.json(Player)
    }

}

module.exports = new PlayerController()