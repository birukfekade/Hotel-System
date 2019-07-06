var app = angular.module("myApp", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: './templates/home.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state("about", {
      url: "/about",
      templateUrl: './templates/about.html',
      controller: 'AboutController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
});

module.exports = app;