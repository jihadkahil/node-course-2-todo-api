var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//mongodb://heroku_kslhg7zt:fvr75n0kq2pemog59s2qcqbmcu@ds115283.mlab.com:15283/heroku_kslhg7zt
mongoose.connect(process.env.MONGO_URI||'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};