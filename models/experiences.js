var mongoose = require('mongoose');
var Int32 = require('mongoose-int32').loadType(mongoose);
var Schema = mongoose.Schema;

const ExperiencesSchema = new Schema({
    id : Int32,
    title: String,
    company_name:String,
    icon:String,
    iconBg:String,
    date:String,
    points:Array
}, { collection: 'Experiences' })

module.exports = mongoose.model('Experiences', ExperiencesSchema);