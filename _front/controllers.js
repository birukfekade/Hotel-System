var app = require('./app');

var MainController = function($http){
    var vm = this;
    vm.name = "Main home controller"

    $http.get('https://www.sapanalytics.cloud/resources-star-wars-day')
    .then(function(response){
        vm.films = response.data;
    });
}

var AboutController = function(){
    var vm = this;
    vm.name = "About controller"
}

app.controller('MainController', [MainController]);
app.controller('AboutController', [AboutController]);

module.exports = app;

