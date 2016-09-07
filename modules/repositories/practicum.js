var handler = require('../datahandler');
var Practicum;
var PracticumUser;
var User;

function all(req, res, next) {

    var query = {};

    if(req.query.number){

        User.find({number : req.query.number}).exec(function (err, user) {
            if(err){return next(err);}
            if(user[0]){
                PracticumUser.find({user : user[0]._id}).exec(function (err, data) {
                    if(err){return next(err);}

                    query.practicum_users = { $in: data };

                    Practicum.find(query).populate({
                        path: 'practicum_users',
                        populate: { path: 'user' }
                    }).exec(function (err, data) {
                        if(err){return next(err);}
                        res.json(data);
                    });
                });
            }
            else{
                res.status(404).json({ "msg": "Het nummer bestaat niet"});
            }
        });
    }
    else{
        Practicum.find(query).populate({
            path: 'practicum_users',
            populate: { path: 'user' }
        }).exec(function (err, data) {
            if(err) { return next(err); }
            handler.found(data, res, function (data) {
                res.json(data);
            });
        });
    }
}

function one(req, res, next){

    var query = {};

    if(req.query.number){

        User.find({number : req.query.number}).exec(function (err, user) {
            if(err){return next(err);}
            if(user[0]){
                PracticumUser.find({user : user[0]._id}).exec(function (err, data) {
                    if(err){return next(err);}

                    query.practicum_users = { $in: data };

                    Practicum.findOne({_id: req.params.id, practicum_users : { $in: data }}).populate({
                        path: 'practicum_users',
                        populate: { path: 'user' }
                    }).exec(function (err, data) {
                        if(err) { return next(err); }
                        handler.found(data, res, function (data) {
                            res.json(data);
                        });
                    });
                });
            }
            else{
                res.status(404).json({ "msg": "Het nummer bestaat niet"});
            }
        });
    }
    else{
        Practicum.findOne({_id: req.params.id}).populate({
            path: 'practicum_users',
            populate: { path: 'user' }
        }).exec(function (err, data) {
            if(err) { return next(err); }
            handler.found(data, res, function (data) {
                res.json(data);
            });
        });
    }
}


function update(req, res, next){

    Practicum.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, function (err, data) {
        if(err) { return next(err); }
        handler.found(data, res, function (data) {
            res.json(data);
        });
    });

    // Area.findOne({canonicalName: req.params.id}).exec(function (err, data) {
    //     if(err) { return next(err); }
    //     handler.found(data, res, function (data) {
    //         data.name = req.body.name;
    //         data.pokemon = req.body.pokemon;
    //         data.save(function(err){
    //             if(err) {
    //                 console.log(err.message);
    //                 res.status(500);
    //                 res.send("Something went wrong while communicating with the back-end.");
    //             } else {
    //                 res.status(200);
    //                 res.send("Success");
    //             }
    //         });
    //     });
    // });
}

function create(req, res, next) {
    var practicum = new Practicum(req.body);

    practicum.save(function(err){
        if(err) { return next(err); }
        res.sendStatus(200);
    });
}

var exp = {};
exp.all = all;
exp.one = one;
exp.update = update;
exp.create = create;

module.exports = function (mongoose){
    Practicum = mongoose.model('Practicum');
    PracticumUser = mongoose.model('PracticumUser');
    User = mongoose.model('User');
    return exp;
};