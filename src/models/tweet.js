const mongoose =  require('mongoose');

//schema refers to the attributes of out collection what all fields it will be having
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    },
    // comments: [  //added comment also , later we created a new model for comments
    //     {
    //         content: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ]

    comments: [  //to include the other comments model with this
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
}, {timestamps: true})  //adding timestamps as true here it will add createdat and updatedat field for the collection

const Tweet = mongoose.model('Tweet', tweetSchema); //it will make a model named tweet with the above schema for the collections;
module.exports = Tweet;