// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
    id : String,
    title: String
}, { collection: 'Projects' })

module.exports = mongoose.model('Projects', ProjectsSchema);