app.controller('personalPurchaseHistoryController', ['$scope','$http','$state', function($scope,$http,$state){
	$scope.count = 0;
	$scope.states = '';
	$scope.clickFn = function(index){
		$scope.count = index;
		$scope.states = index==0?'':index==1?{state:0}:{state:1};
	}
	$scope.listname = ['项目信息','实付款(元)','交易状态','操作'];
	$http({
		url:'json/box.json',
		method:'get',
	}).success(function(res){
		$scope.myInformation = res;
		$scope.remove = function(name){
			for( var  i = 0; i < $scope.myInformation.length; i++){
				if( $scope.myInformation[i].name == name ){
					$scope.myInformation.splice(i,1);
				}
			}
		}
	});
	$scope.topay = function(na,cost){
		$state.go('payment.toSure',{name:na,money:cost});
	}
	
}])