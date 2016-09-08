module.exports = function(PracticumService, AuthorizationService, $state){
    var self = this;

    self.init = function(){
        PracticumService.getUser(AuthorizationService.getUser()).$promise.then(function(response){
            self.user = response;
            self.practicum = PracticumService.getPracticum($state.params.id);
        });
    };

};

