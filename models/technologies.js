// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TechnologiesSchema = new Schema({
    name : String,
    icon : String,
	isMobile : Boolean,
}, { collection: 'Technologies' });

module.exports = mongoose.model('Technologies', TechnologiesSchema);