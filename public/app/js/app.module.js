require('angular/angular.min');
require('angular-ui-router/release/angular-ui-router.min');
require('angular-bootstrap-npm/dist/angular-bootstrap.min');
require('angular-bootstrap-npm/dist/angular-bootstrap-tpls.min');
require('angular-resource/angular-resource.min');
require('angular-permission');

var app = angular.module('app', [
    'app.core',
    'app.practicum'
]);

require("./config/core.module");
require("./components/practicum/practicum.module");

// app.config(function ($httpProvider, $urlRouterProvider) {
//     $httpProvider.interceptors.push('httpRequestInterceptor');
//     $urlRouterProvider.deferIntercept();//intercept the default route change (so the permissions in the run method can be loaded before a state change event takes place)
// });

app.run(function() {

    // AuthorizationService.isLoggedIn()
    //     .then(function(isLoggedIn){
    //         PermPermissionStore.definePermission('user', function(){
    //             return isLoggedIn;
    //         });
    //     })
    //     .then(function(){
    //         // Once permissions are set-up
    //         // kick-off router and start the application rendering
    //         $urlRouter.sync();
    //         // Also enable router to listen to url changes
    //         $urlRouter.listen();
    //     });
});
