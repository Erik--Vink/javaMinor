var practicumModule = angular.module('app.practicum', []);

var practicumRoutes = require("./practicum.routes");
var practicumService = require("./practicum.service");
var practicumController = require("./practicum.controller");
var practicumDetailController = require("./practicumDetail.controller");

practicumModule.service("PracticumService", practicumService);
practicumModule.controller("PracticumController", practicumController);
practicumModule.controller("PracticumDetailController", practicumDetailController);
practicumModule.config(practicumRoutes);

module.exports = practicumModule;