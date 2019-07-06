// angular.module('meanhotel').directive('hotelRating', hotelRating);
//
// function hotelRating() {
//   return {
//     restrict: 'E',
//     template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star">{{ star }}</span>',
//     bindToController: true,
//     controller: 'HotelController',
//     controllerAs: 'vm',
//     scope: {
//       stars: '@'
//     }
//   }
// }

angular.module('meanhotel').component('hotelRating', {
  bindings: {
    stars: '='
  },
  template: '<span ng-repeat="star in vm.stars track by $index"> <i style="font-size: 12px;color:gold" class="fa fa-star"></i>{{ star }}</span>',
  controller: 'HotelController',
  controllerAs: 'vm'
});
