var exp = {};
exp.found = function (data, res, callback){

    if(data == null || data == undefined) {
        res.status(404);
        res.send("404 - Resource does not exist.");
    } else {
        callback(data);
    }
};

exp.lost = function (data, res, callback){
    if(data != null && data != undefined){
        res.status(500);
        res.send("500 - Resource already exists.");
    } else {
        callback()
    }
};

module.exports = exp;