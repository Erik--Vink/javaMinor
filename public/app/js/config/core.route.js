module.exports = function($locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise( function($injector) {
        var $state = $injector.get("$state");
        $state.go('main');
    });

    $locationProvider.html5Mode(true);
};