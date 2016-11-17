app.controller('registerController', ['$scope', '$interval','$rootScope','$state', function($scope, $interval,$rootScope,$state) {
    $rootScope.showa = 9;
    $scope.getkey = '获取验证码'
    $scope.pushKey = function() {
        var timeEle = document.getElementsByTagName('button')[0];
        var timee = 10;
        $interval(function() {
            timee--;
            if (timee > 0) {
                $scope.getkey = '已发送，' +timee+ '秒后重发';
            } else {
                $scope.getkey = '发送验证码';
            }
            if( timee == 0 ){
                var key = Math.floor( Math.random()*10000 );
                if( key > 999 ){
                    $scope.keywords= key;
                }else{
                    key = Math.floor( Math.random()*10000 );
                }
            }
        }, 1000, 10);
    }
    $scope.showspan = 0;
    $scope.spanBgFn = function() {
        $scope.showspan = $scope.showspan == 0 ? 1 : 0;
    }
    $scope.goToLogin = function(index){
        if( index==true ){
            $state.go('login');
        }
    }
}]);
