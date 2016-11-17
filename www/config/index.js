var app = angular.module('myapp', ['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		.state('index',{
			url:'/index',
			templateUrl:'view/box.html',
			controller:'boxController'
		})
		.state('programColumn',{
			url:'/programColumn',
			templateUrl:'view/programColumn.html',
			controller:'programColumnController'
		})
		.state('community',{
			url:'/community',
			templateUrl:'view/community.html',
			controller:'communityController'
		})
		.state('login',{
			url:'/login',
			templateUrl:'view/login.html',
			controller:'loginController'
		})
		.state('register',{
			url:'/register',
			templateUrl:'view/register.html',
			controller:'registerController'
		})
		.state('forgetPassword',{
			url:'/forgetPassword',
			templateUrl:'view/forgetPassword.html',
			controller:'forgetPasswordController'
		})
		.state('programList',{
			url:'/programList',
			templateUrl:'view/programList.html',
			controller:'programListController'
		})
		.state('programDetails',{
			url:'/programDetails/:name',
			templateUrl:'view/programDetails.html',
			controller:'programDetailsController'
		})
		.state('programDetails.expline',{
			url:'/programDetails.expline',
			templateUrl:'view/programDetailsExpline.html'
		})
		.state('payment',{
			url:'/payment',
			templateUrl:'view/payment.html',
			controller:'paymentController'
		})
		.state('payment.toSure',{
			url:'/payment.toSure/:name/:money',
			templateUrl:'view/paymentToSure.html',
			controller:'paymentToSureController'
		})
		.state('payment.toPay',{
			url:'/payment.toPay/:name/:money',
			templateUrl:'view/paymentToPay.html',
			controller:'paymentToPayController'
		})
		.state('payment.paySure',{
			url:'/payment.paySure',
			templateUrl:'view/paymentpaySure.html',
			controller:'paymentPaySureController'
		})
		.state('personal',{
			url:'/personal',
			templateUrl:'view/personal.html',
			controller:'personalController'
		})
		.state('personal.homepage',{
			url:'/homepage',
			templateUrl:'view/personalHomepage.html',
			controller:'personalHomepageController'
		})
		.state('personal.information',{
			url:'/information',
			templateUrl:'view/personalInformation.html',
			controller:'personalInformationController'
		})
		.state('personal.security',{
			url:'/security',
			templateUrl:'view/personalSecurity.html',
			controller:'personalSecurityController'
		})
		.state('personal.circles',{
			url:'/circles',
			templateUrl:'view/personalCircles.html',
			// controller:'personalCirclesController'
		})
		.state('personal.purchaseHistory',{
			url:'/purchaseHistory',
			templateUrl:'view/personalPurchaseHistory.html',
			controller:'personalPurchaseHistoryController'
		})



}])