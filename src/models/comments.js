const mongoose =  require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    }
}, {timestamps: true}) 

const Comment = mongoose.model('Comment', commentSchema); //it will make a model named tweet with the above schema for the collections;
module.exports = Comment;