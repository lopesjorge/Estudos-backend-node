const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    descricao: String
})

const HomeModel = new mongoose.model('Home', HomeSchema)

module.exports = HomeModel