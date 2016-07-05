// angular.module('mainApp').directive('bsActiveLink', ['$location', function ($location) {
//     return {
//         restrict: 'A', //use as attribute
//         replace: false,
//         link: function (scope, elem) {
//             //after the route has changed
//             scope.$on("$routeChangeSuccess", function () {
//                 var hrefs = ['/#' + $location.path(),
//                     '#' + $location.path(), //html5: false
//                     $location.path()]; //html5: true
//                 angular.forEach(elem.find('a'), function (a) {
//                     a = angular.element(a);
//                     if (-1 !== hrefs.indexOf(a.attr('href'))) {
//                         a.parent().addClass('active');
//                     } else {
//                         a.parent().removeClass('active');
//                     };
//                 });
//             });
//         }
//     }
// }]);
app.directive('activeLink',[ function () {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {
            element.find('.n-link a').on('click', function () {
                angular.element(this)
                    .parent().siblings('.active')
                    .removeClass('active');
                angular.element(this)
                    .parent()
                    .addClass('active');
            });
        }
    };
}]);