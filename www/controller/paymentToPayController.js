app.controller('paymentToPayController', ['$scope','$rootScope','$stateParams', function($scope,$rootScope,$stateParams){
	$rootScope.name = $stateParams.name;
	$rootScope.money = $stateParams.money;
	$rootScope.payState = 1;
	$scope.selsetNum = 1;
	$scope.selectBank = function(index){
		$scope.selsetNum = index;
	}
	$scope.banks = [
		{"img":"images/bankOfChina.png"},
		{"img":"images/constructionBankOfChina.png"},
		{"img":"images/CIB.png"},
		{"img":"images/CMBC.png"},
		{"img":"images/bankOfChina.png"},
		{"img":"images/constructionBankOfChina.png"},
		{"img":"images/CIB.png"},
		{"img":"images/CMBC.png"},
		{"img":"images/bankOfChina.png"},
		{"img":"images/constructionBankOfChina.png"},
		{"img":"images/CIB.png"},
		{"img":"images/CMBC.png"},
		{"img":"images/bankOfChina.png"},
		{"img":"images/constructionBankOfChina.png"},
		{"img":"images/CIB.png"},
		{"img":"images/CMBC.png"},
		{"img":"images/constructionBankOfChina.png"},
		{"img":"images/CIB.png"},
		{"img":"images/CMBC.png"}
	];
	$scope.clicked = 0;
	$scope.toSelect = function(index){
		$scope.clicked = index;
	}
}])