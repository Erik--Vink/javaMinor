module.exports = function(PracticumService, $state){
    var self = this;

    self.init = function(){
        PracticumService.getUser(2072640).$promise.then(function(response){
            self.user = response;
            self.practicum = PracticumService.getPracticum($state.params.id);
        });
    };

};

