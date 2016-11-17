app.controller('programListController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    $rootScope.showa = 9;
    $scope.itemList = ["全部","微电影", "电影", "电视剧", "传统戏曲", "话剧", "书画", "相声", "戏剧", "音乐剧", "纪录片"];
    $scope.states = ['筹资中', '即将结束', '已成功'];
    $scope.hotTop = ['最新', '热门', '结束时间'];
    $scope.showSpan1 = 0;
    $scope.showSpan2 = 2;
    $scope.showSpan3 = 0;
    $scope.showList ='';
    $scope.showState = '';
    $scope.itemClFn = function(index) {
        $scope.showSpan1 = index;
        if( index !=0 ){
            $scope.showList = {type:$scope.itemList[index]}
        }else{
            $scope.showList = '';
            $scope.showState = '';
        }
        setTimeout(function(){
            console.log(document.getElementsByClassName('pushMove').length);
        },30);
    }
    $scope.staClFn = function(index) {
        $scope.showSpan2 = index;
        $scope.showState = {stute:$scope.states[index]}
    }
    $scope.hotClFn = function(index) {
        $scope.showSpan3 = index;
    }
    $http({
        url: 'json/box.json',
        method: 'get',
    }).success(function(res) {
        $scope.information = res;
    });


}])
