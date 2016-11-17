app.controller('paymentToSureController',['$scope','$rootScope','$stateParams','$rootScope','$http',function($scope,$rootScope,$stateParams,$rootScope,$http){
	$rootScope.payState = 0;
	$rootScope.name = $stateParams.name;
	$rootScope.money = $stateParams.money;
	console.log($rootScope.money);
	 $http({
        url: 'json/'+$rootScope.name+'.json',
        method: 'get',
    }).success(function(res) {
        $scope.pays = res;
    });
}]);