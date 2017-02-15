app.controller('boxController',['$scope','$interval','$http',function($scope,$interval,$http){
		$scope.imgList = [
			{
				src:'images/indexbg2.png',
				name:'《犹太人在上海》音乐剧'
			},

			{
				src:'images/indexbg1.jpg',
				name:'《晚秋》再现舞台'
			}

		];
		$scope.showIndex = 0;
		$scope.timer = $interval(runloop,2500);
		function runloop(){
			$scope.showIndex++;
			if($scope.showIndex == 2){
				$scope.showIndex = 0;
			}
		}
		$scope.clickFn = function(index){
			$interval.cancel($scope.timer);
			if(index == 0){
				$scope.showIndex--;
				if($scope.showIndex < 0){
					$scope.showIndex = 1;
				}
			}else{
				$scope.showIndex++;
				if($scope.showIndex == 2){
					$scope.showIndex = 0;
				}
			}
			$scope.timer = $interval(runloop,2500);
		}

		$scope.itemList=["微电影","电影","电视剧","传统戏曲","话剧","书画","相声","戏剧","音乐剧","纪录片"];
		$scope.conts = 4;
		$scope.showIndexs = 0;
		$scope.mouseoverFn = function(index){
			$scope.conts = index;
			$scope.showIndexs = index%6;
		}

		$http({
			url:'json/box.json',
			method:'get',
		}).success(function(res){
			$scope.information = res;
		})

}]);
