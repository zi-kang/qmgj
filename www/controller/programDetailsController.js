app.controller('programDetailsController', ['$scope','$stateParams','$http','$state', function($scope,$stateParams,$http,$state){
	$state.go('programDetails.expline');
	$scope.name = $stateParams.name;
	$http({
        url: 'json/'+$scope.name+'.json',
        method: 'get',
    }).success(function(res) {
        $scope.information = res;
    });
    $scope.actSpan = 0;
    $scope.cilkFn = function(index){
    	$scope.actSpan = index;
    }
}])