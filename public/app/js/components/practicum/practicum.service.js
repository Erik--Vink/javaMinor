module.exports = function(ResourceService, serviceBase){
    return {
        getPracticums: getPracticums,
        getPracticum: getPracticum,
        getUser: getUser,
        updateState: updateState
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

    function update(practicumuser) {
        console.log('user/');
        return ResourceService(serviceBase+'practicum_user/'+practicumuser._id).create(practicumuser);
    }
};