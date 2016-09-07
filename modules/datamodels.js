function init(mongoose) {
    var connection = 'mongodb://erik:javaminor@ds021046.mlab.com:21046/labtracker';
    if(process.env.MONGO_CONNECTION_STRING != null && process.env.MONGO_CONNECTION_STRING != undefined){ connection = process.env.MONGO_CONNECTION_STRING; }

    console.log("Connecting to: " + connection);
    mongoose.connect(connection);
    
    //models
    require('../models/user')(mongoose);
    require('../models/practicum')(mongoose);
    require('../models/practicum_user')(mongoose);
}

var exp = {};
exp.init = init;

module.exports = exp;