module.exports = function(PracticumService, AuthorizationService){
    var self = this;

    self.init = function(){
        console.log(AuthorizationService.getUser());
        PracticumService.getPracticums(AuthorizationService.getUser()).$promise.then(function(response){
            response.forEach(function(item){
                item.practicum_users.forEach(function(subitem){
                    if(subitem.user.number == AuthorizationService.getUser()){
                        item.practicum_users[0] = subitem;
                    }
                });
            });
            self.practicums = response;
        });
    };

    self.updateState = function(practicumuser, state){
        practicumuser.status = state;
        PracticumService.update(practicumuser);
    }
    self.updateQuestion = function(practicumuser){
        PracticumService.update(practicumuser)
    };


};

