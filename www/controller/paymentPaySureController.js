app.controller('paymentPaySureController', ['$scope','$rootScope', function($scope,$rootScope){
	$rootScope.payState = 2;
	$scope.review = 0;
	$scope.clickReview = function(index){
		$scope.review = index;
	}

}])