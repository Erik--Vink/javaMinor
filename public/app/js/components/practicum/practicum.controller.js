module.exports = function(PracticumService){
    var self = this;

    self.init = function(){
        self.practicums = PracticumService.getPracticums(2063041);
    };

};

