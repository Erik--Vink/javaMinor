module.exports = function(PracticumService, $state){
    var self = this;

    self.init = function(){
        self.practicum = PracticumService.getPracticum($state.params.id);
    };

};

