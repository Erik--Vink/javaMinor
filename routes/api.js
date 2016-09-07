var express = require('express');
var router = express.Router();
var user = require('./user');
var practicum = require('./practicum');
var practicumUser = require('./practicum_user');

module.exports = function (userRepository, practicumRepository, practicumUserRepository){
    router.use('/user', user(userRepository));
    router.use('/practicum', practicum(practicumRepository));
    router.use('/practicumuser', practicumUser(practicumUserRepository));
    return router;
};
