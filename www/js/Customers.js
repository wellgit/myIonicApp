angular.module('starter',[])
.controller('Customers', [function($rootScope) {
  var vm = this;
  vm.title = 'Customers';
  vm.customers = [
    {name: 'Haley'}, {name: 'Ella'}, {name: 'Landon'}, {name: 'John'}
    ];
}]);

/*angular.module('starter').controller('Customers', customers);
customers.$inject = ['$rootScope','$state'];

function customers($rootScope, $state){
    var vm = this;
    $rootScope.msgTeste = 'Hello World';
}*/
