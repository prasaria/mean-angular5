const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI, {promiseLibrary: require('bluebird')})
    .then(() => console.log('Connection Successful'))
    .catch((e) => console.log(e));

module.exports = {mongoose};