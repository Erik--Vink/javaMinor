module.exports = function(PracticumService, AuthorizationService){
    var self = this;

    self.init = function(){
        console.log(AuthorizationService.getUser());
        self.practicums = PracticumService.getPracticums(AuthorizationService.getUser());
    };

    self.updateQuestion = function(practicumuser){
        PracticumService.update(practicumuser)
    };


};

