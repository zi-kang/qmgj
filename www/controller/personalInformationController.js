app.controller('personalInformationController', ['$scope', function($scope){
	$scope.checkBox = ["微电影","电影","电视剧","戏曲","相声","话剧","书画","戏剧","音乐剧","歌剧"];
	$scope.circles = [];
	$scope.circles[0] = true;
	$scope.circles[8] = true;
	$scope.selectCircle = function(index){
		$scope.circles[index] = !$scope.circles[index];
	}
	
}])