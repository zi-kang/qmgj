app.controller('loginController',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
	$rootScope.showa = 9;
	$scope.showspan = 0;
	$scope.spanBgFn = function(){
		$scope.showspan = $scope.showspan == 0 ? 1 : 0;
	}
	$scope.toUser = function(index){
		if( index == true ){
			$state.go('personal.homepage');
		}
	}
}]);