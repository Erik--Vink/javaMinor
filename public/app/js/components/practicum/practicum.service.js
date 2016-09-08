module.exports = function(ResourceService, serviceBase){
    return {
        getPracticums: getPracticums,
        getPracticum: getPracticum,
        getUser: getUser
    };

    function getPracticums(number) {
        return ResourceService(serviceBase+'practicum').query({number: number});
    }

    function getPracticum(id, number) {
        return ResourceService(serviceBase+'practicum/'+ id).get({number: number});
    }

    function  getUser(id) {
        return ResourceService(serviceBase+'user/'+ id).get({number: id});
    }
};