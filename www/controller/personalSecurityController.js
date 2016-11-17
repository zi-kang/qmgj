app.controller('personalSecurityController', ['$scope','$interval', function($scope,$interval){
	$scope.activeSpan = 0;
	$scope.selectClick = function(index){
		$scope.activeSpan = index;
	}
	$scope.getkey = '免费获取验证码';
	$scope.getKeyNumber = function(){
		$scope.num = 10;
		var keyNumber = Math.floor(Math.random()*10000);
		if( keyNumber <= 999 ){
			keyNumber += 1000;
		}
		$interval(function(){
			$scope.getkey = $scope.num+'秒后重新获取';
			$scope.num--;
			if( $scope.num < 0 ){
				$scope.num = 10;
				$scope.getkey = '获取验证码';
				$scope.keyNumber = keyNumber;
			}
		},1000,11);
	}
	$scope.input1 = false;
	$scope.input2 = false;
	$scope.input3 = false;
	$scope.promptFn = function(){
		$scope.input1 = true;
	}
	$scope.promptFn1 = function(){
		$scope.input2 = true;
	}
	$scope.promptFn2 = function(){
		$scope.input3 = true;
	}
	$scope.keywords = '';
	$scope.clickBtn = '发送验证码';
	$scope.getKeyWords = function(){
		$scope.nums = 10;
		var keyNumber = Math.floor(Math.random()*10000);
		if( keyNumber <= 999 ){
			keyNumber += 1000;
		}
		$interval(function(){
			$scope.clickBtn = $scope.nums+'秒后重新获取';
			$scope.nums--;
			if( $scope.nums < 0 ){
				$scope.nums = 10;
				$scope.clickBtn = '获取验证码';
				$scope.keywords = keyNumber;
			}
		},1000,11);
	}







}])