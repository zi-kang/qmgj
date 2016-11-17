app.controller('forgetPasswordController', ['$scope', '$interval','$rootScope','$state', function($scope, $interval,$rootScope,$state) {
    $rootScope.showa = 9;
    $scope.getkeys = '发送验证码'
    $scope.pushKey = function() {
        var timee = 60;
        $interval(function() {
            if (timee >= 0) {
                $scope.getkeys = '已发送，' + (timee--) + '秒后重发';
            } else {
                $scope.getkeys = '发送验证码';
            }
            if( timee == 0 ){
                var key = Math.floor( Math.random()*10000 );
                if( key > 999 ){
                    $scope.keywords = key;
                }else{
                    key = Math.floor( Math.random()*10000 );
                }
            }
        }, 1000, 62);
    }
    $scope.nextState = function(index){
        if( index == true ){
            $state.go('login');
        }
    }
}]);
