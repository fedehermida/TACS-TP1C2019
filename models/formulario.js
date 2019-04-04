const mongoose = require('mongoose')

const Schema = mongoose.Schema

const formSchema = new Schema({
    name: {type:String, require:true},
    sirname: {type:String, require:true},
    mail: {type:String, require:true},
    telephone: {type: String, require:true},
    web: String,
    comment: String
})

module.exports = mongoose.model('form', formSchema)