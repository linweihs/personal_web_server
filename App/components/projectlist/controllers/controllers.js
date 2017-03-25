var routerControllers = angular.module("resumeApp.controllers", []);

console.log("yo sup");
// header
routerControllers.controller("navController", ["$scope", function($scope){
	$scope.user = "Max Linx ";
}]);

// company list history
routerControllers.controller("workExperienceController", ["$scope", "resumeData", function($scope, resumeData){
	$scope.companyList = resumeData.getInfoForCompany("Yahoo");
}]);

// customer info
//routerControllers.controller("customerController", ["$scope", "$stateParams", "customerData", function($scope, $stateParams, customerData){
//	$scope.custInfo= customerData.getInfoForCust($stateParams.customerID);
//}]);
//
//// all open orders
//routerControllers.controller("openOrdersController", ["$scope", "customerData", function($scope, customerData){
//	$scope.recentOrders = customerData.getOpenOrders();
//}]);
//
//// history for a given customer
//routerControllers.controller("customerHistoryController", ["$scope", "$stateParams", "customerData", function($scope, $stateParams, customerData){
//	$scope.custHist = customerData.getAllHistoryForCust($stateParams.customerID);
//}]);
//
//// contact info for a given customer
//routerControllers.controller("customerContactController", ["$scope", "$stateParams", "customerData", function($scope, $stateParams, customerData){
//	var info = customerData.getInfoForCust($stateParams.customerID);
//	$scope.contactInfo = info.contactInfo;
//}]);
//
//// shipping info for a given customer
//routerControllers.controller("customerShippingController", ["$scope", "$stateParams", "customerData", function($scope, $stateParams, customerData){
//	var info = customerData.getInfoForCust($stateParams.customerID);
//	$scope.infoType = "Shipping";
//	$scope.billShipInfo = info.shippingAddress;
//}]);
//
//// billing info for a given customer
//routerControllers.controller("customerBillingController", ["$scope", "$stateParams", "customerData", function($scope, $stateParams, customerData){
//	var info = customerData.getInfoForCust($stateParams.customerID);
//	$scope.infoType = "Billing";
//	$scope.billShipInfo = info.billingAddress;
//}]);
