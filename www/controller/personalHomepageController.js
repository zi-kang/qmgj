app.controller('personalHomepageController', ['$scope','$http', function($scope,$http){
	$http({
		url:'json/box.json',
		method:'get'
	}).success(function(res){
		$scope.personalLis = res;
	})
}])