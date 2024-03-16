// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ServicesSchema = new Schema({
    title: String,
    icon : String
}, { collection: 'Services' })

module.exports = mongoose.model('Services', ServicesSchema);