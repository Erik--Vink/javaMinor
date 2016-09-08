module.exports = function(PracticumService, AuthorizationService){
    var self = this;

    self.init = function(){
        console.log(AuthorizationService.getUser());
        self.practicums = PracticumService.getPracticums(AuthorizationService.getUser());
    };

    self.updateState = function(practicumuser, state){
        practicumuser.status = state;
        PracticumService.update(practicumuser);
    }

};
