const express = require('express');
const app = express();

const connect = require('./config/database');
// const Tweet = require('./models/tweet');

const TweetRepository =  require('./repository/tweet-repository');
const Comment = require('./models/comments');

app.listen(3000, async () =>{
    console.log("Server started at port 3000");
    await connect();
    console.log("Mongo db connected");

    //did this initially for showing how to create a collection
    // const tweet = await Tweet.create({
    //     content: 'First tweet',
    //     userEmail: 'a@b.com'
    // });


    //after creating the repo hitting function there
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.update()

    //this was after adding the comment to the tweet model itself
    // const tweet = await tweetRepo.create({content: 'tweet with a comment'});
    // tweet.comments.push({content: 'Some comment'});
    // tweet.save();

    //after segregating the comment model

    // const tweet = await tweetRepo.create({content: 'Tweet with comment schema'});
    // const comment = await Comment.create({content: 'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();

    // const tweet = await tweetRepo.get('64907034e5a3112ed2b0618b'); //simply like this if we log the tweet the comment in that will show only the objectid
    // console.log(tweet);

    //to solve the above problem we used the populate method in repo
    const tweet = await tweetRepo.getWithComments('64907034e5a3112ed2b0618b');
    console.log(tweet);
})