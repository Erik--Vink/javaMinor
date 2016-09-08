var express = require('express');
var router = express.Router();
var user = require('./user');
var practicum = require('./practicum');
var practicumUser = require('./practicum_user');
var group = require('./group');

module.exports = function (userRepository, practicumRepository, practicumUserRepository, groupRepository){
    router.use('/user', user(userRepository));
    router.use('/practicum', practicum(practicumRepository));
    router.use('/practicumuser', practicumUser(practicumUserRepository));
    router.use('/group', group(groupRepository))
    return router;
};
