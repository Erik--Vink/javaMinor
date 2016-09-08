var User;
var handler = require('../datahandler');
var _ = require('underscore');

function all(req, res, next) {

    User.find({}).exec(function (err, data) {
        if(err){return next(err); }
        handler.found(data, res, function(data){
            res.json(data);
        });
    });
}

function one(req, res, next){

    var query = {};

    if(req.query.number){

        User.find({number : req.query.number}).exec(function (err, user) {

            if(err){return next(err);}
            if(user[0]){
                return user[0];
            }
            else{
                res.status(404).json({ "msg": "Het nummer bestaat niet"});
            }
        });
    }
    else{
        res.status(404).json({ "msg": "Geen nummer meegegeven"});
    }
}

function remove(req,res,next){

    //remove area
    User.remove({_id: req.params.id}).exec(function(err){
        if(err) {
            res.status(500);
            res.send("Something went wrong while communicating with the back-end.");
        } else {
            res.status(200);
            res.send("Success");
        }
    });
}

function create(req, res, next) {
    var user = new User(req.body);

    user.save(function(err){
        if(err) { return next(err); }
        res.sendStatus(200);
    });
}


var exp = {};
exp.all = all;
exp.delete = remove;
exp.create = create;

module.exports = function (mongoose){
    User = mongoose.model('User');
    return exp;
};