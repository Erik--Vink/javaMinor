module.exports = function($window){
    return {
        setUser: setUser,
        getUser: getUser

    };

    function setUser(number) {
        $window.localStorage.setItem("user", number);
    }

    function getUser() {
        return $window.localStorage.getItem("user");
    }
};