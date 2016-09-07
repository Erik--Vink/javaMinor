module.exports = function(ResourceService, serviceBase){
    return {
        getPracticums: getPracticums,
        getPracticum: getPracticum
    };

    function getPracticums(number) {
        return ResourceService(serviceBase+'practicum').query({number: number});
    }

    function getPracticum(id, number) {
        return ResourceService(serviceBase+'practicum/'+ id).get({number: number});
    }
};