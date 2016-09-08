module.exports = function(AuthorizationService, $state){
    var self = this;

    self.login = function(){
        if(self.number){
            AuthorizationService.setUser(self.number);
            $state.go("practicums");
        }
    };

    self.isLoggedIn = function(){
        return AuthorizationService.getUser();
    };

    self.logOut = function(){
        AuthorizationService.setUser(null);
        $state.go("login");
    };

};

