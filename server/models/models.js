const sequelize = require('../db')
const {DataType, DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nickname: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const favoriteList = sequelize.define('favorite_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const favoritePlayers = sequelize.define('favorite_players', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const player = sequelize.define('player', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nickname: {type: DataTypes.STRING, unique: true, allowNull: false},
    country: {type: DataTypes.STRING, allowNull: true},
    wins: {type: DataTypes.INTEGER, defaultValue: 0},
    pts: {type: DataTypes.INTEGER, defaultValue: 0},
})

const community = sequelize.define('community', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    size: {type: DataTypes.STRING, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

User.hasOne(favoriteList)
favoriteList.belongsTo(User)

favoriteList.hasMany(favoritePlayers)
favoritePlayers.belongsTo(favoritePlayers)

community.hasMany(player)
player.belongsTo(community)

player.hasMany(favoritePlayers)
favoritePlayers.belongsTo(player)

module.exports = {
    User,
    favoriteList,
    favoritePlayers,
    player,
    community
}