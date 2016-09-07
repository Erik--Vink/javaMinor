var coreModule = angular.module('app.core', [
    "ui.router",
    'ngResource'
]);

var resourceService = require("./resource.service");
coreModule.factory("ResourceService", resourceService);

var coreRoutes = require("./core.route");
coreModule.config(coreRoutes);

coreModule.constant("serviceBase", "api/");

module.exports = coreModule;