var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var myblogSchema   = new Schema({
    title: String,
    description:String,
    username:String,
    poster:String,
    dateofblog:Date,
}, {collection:'MyBlogCollection'});

module.exports = mongoose.model('Blog', myblogSchema);
