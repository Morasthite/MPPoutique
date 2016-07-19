app.factory("user", ["$http", function($http){
    return {
        firstName: "",
        isLoggedIn: false,
        user_name: "",
        password: ""
    }
}]);