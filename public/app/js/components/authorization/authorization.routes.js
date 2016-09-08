module.exports = function($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'dist/js/components/authorization/templates/login.html',
            controller: 'AuthorizationController as c'
        });
};
