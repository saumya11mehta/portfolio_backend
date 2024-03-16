// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UsersSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    first_name:String,
    last_name:String,
    date_added:String
}, { collection: 'Users' });

module.exports = mongoose.model('Users', UsersSchema);