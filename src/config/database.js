const mongoose = require('mongoose');

const connect = async() =>{
    await mongoose.connect('mongodb://localhost/twitter_Dev'); // this will create a db in mongo named twitter_Dev, but until we add any collections there it wont be visible in the mongo compass
}

module.exports = connect;