// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const NavLinksSchema = new Schema({
    id : String,
    title: String
}, { collection: 'NavLinks' })

module.exports = mongoose.model('NavLinks', NavLinksSchema);