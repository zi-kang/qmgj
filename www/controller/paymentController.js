app.controller('paymentController', ['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.name = '';
    $rootScope.money = 0;
    $rootScope.payState = 0;
    $scope.paycess = function(index){
    	$rootScope.payState = index;
    }
	
}])