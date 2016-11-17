app.controller('personalController', ['$scope', function($scope){
	$scope.timeHello = '';
	$scope.data = new Date();
	$scope.hour = $scope.data.getHours();
	if($scope.hour < 6){"凌晨好！"} 
	else if ($scope.hour < 9){$scope.timeHello = "早上好！"} 
	else if ($scope.hour < 12){$scope.timeHello = "上午好！"} 
	else if ($scope.hour < 14){$scope.timeHello = "中午好！"} 
	else if ($scope.hour < 17){$scope.timeHello = "下午好！"} 
	else if ($scope.hour < 19){$scope.timeHello = "傍晚好！"} 
	else if ($scope.hour < 22){$scope.timeHello = "晚上好！"} 
	else {$scope.timeHello = "夜里好！"} 
	$scope.classs = 70;
	if( $scope.classs < 60 ){
		$scope.personalClass = '低';
	}else if( $scope.classs <85 ){
		$scope.personalClass = '中';
	}else{
		$scope.personalClass = '高';
	}

}])