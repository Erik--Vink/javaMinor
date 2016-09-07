var express = require('express');
var router = express.Router();
var auth = require('../modules/auth');

module.exports = function (repository){
    router.get('/', repository.all);
    router.get('/:id', repository.one);
    router.put('/:id', repository.update);
    router.post('/', repository.create);
    return router;
};