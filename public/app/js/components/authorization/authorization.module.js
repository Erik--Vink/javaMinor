var authorizationModule = angular.module('app.authorization', []);

var authorizationRoutes = require("./authorization.routes");
var authorizationService = require("./authorization.service");
var authorizationController = require("./authorization.controller");

authorizationModule.service("AuthorizationService", authorizationService);
authorizationModule.controller("AuthorizationController", authorizationController);
authorizationModule.config(authorizationRoutes);

module.exports = authorizationModule;