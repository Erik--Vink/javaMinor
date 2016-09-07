var handler = require('../datahandler');
var PracticumUser;
var Practicum;
var User;

function all(req, res, next) {

    var query = {};

    if(req.query.position){
        query.position = req.query.position;
    }

    PracticumUser.find(query).exec(function (err, data) {
        if(err) { return next(err); }
        handler.found(data, res, function (data) {
            res.json(data);
        });
    });
}

function one(req, res, next){
    PracticumUser.findOne({_id: req.params.id}).exec(function (err, data) {
        if(err) { return next(err); }
        handler.found(data, res, function (data) {
            res.json(data);
        });
    });
}


function update(req, res, next){

    PracticumUser.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, function (err, data) {
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

    var query = {};
    query._id = req.query.id;
    var result = Practicum.find(query);
    result.exec(function(err, data){
        console.log(data);
        if(data[0]){
            var practicumUser = new PracticumUser(req.body);
            practicumUser.save(function(err, savedItem){
                if(err){  return next(err); }
                else {
                    var practicumUsers = data[0].practicum_users;
                    practicumUsers.push(savedItem._id);
                    query = {"_id" : data[0]._id};
                    var options = { multi: true };
                    Practicum.update(query, { $set: { practicum_users: practicumUsers }}, options, function(err, numAffected){
                        if(err){ return next(err); }
                        res.status(201);
                        res.json(savedItem);
                    });
                }
            });
        } else {
            res.status(404).json({ "msg": "Het Practicum bestaat niet"});
        }
    });
}

// function remove(req, res, next) {
//
//     Area.findOne({canonicalName: req.params.id}).exec(function (err, area) {
//         if(err){ return next(err); }
//         if(area == null) {
//             res.status(404);
//             res.send("Resource does not exist");
//         } else {
//             Pokemon.update({}, {$pull: {area: area._id}}, {multi: true}).exec(function (err, data) {
//                 if (err) {
//                     console.log(err.message);
//                     return next(err);
//                 }
//                 //remove area
//                 Area.remove({_id: area._id}).exec(function (err) {
//                     if (err) {
//                         console.log(err.message);
//                         res.status(500);
//                         res.send("Something went wrong while communicating with the back-end.");
//                     } else {
//                         res.status(200);
//                         res.send("Success");
//                     }
//                 });
//             });
//         }
//     });
// }


var exp = {};
exp.all = all;
exp.one = one;
exp.update = update;
exp.create = create;
// exp.delete = remove;

module.exports = function (mongoose){
    PracticumUser = mongoose.model('PracticumUser');
    Practicum = mongoose.model('Practicum');
    User = mongoose.model('User');
    return exp;
};