var Group;
var handler = require('../datahandler');
var _ = require('underscore');

function all(req, res, next) {

    Group.find({}).exec(function (err, data) {
        if(err){return next(err); }
        handler.found(data, res, function(data){
            res.json(data);
        });
    });
}

function create(req, res, next) {
    var group = new Group(req.body);

    group.save(function(err){
        if(err) { return next(err); }
        res.sendStatus(200);
    });
}

var exp = {};
exp.all = all;
exp.create = create;

module.exports = function (mongoose){
    Group = mongoose.model('Group');
    return exp;
};
