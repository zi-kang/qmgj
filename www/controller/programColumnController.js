app.controller('programColumnController',['$scope','$timeout',function($scope,$timeout){
	$scope.shows = 1;
	$timeout(function(){
		$scope.shows = 0;
	},2000);
}]);