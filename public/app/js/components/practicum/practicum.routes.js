module.exports = function($stateProvider) {
    $stateProvider
        .state('practicums', {
            url: '/',
            templateUrl: 'dist/js/components/practicum/templates/practicums.html',
            controller: 'PracticumController as c'
        })
        .state('practicum', {
            url: '/practicum/:id',
            templateUrl: 'dist/js/components/practicum/templates/practicum.html',
            controller: 'PracticumDetailController as c'
        });
};
