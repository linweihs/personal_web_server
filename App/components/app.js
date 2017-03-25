var customerOrdersApp = angular.module("customerOrdersApp", ["ui.router", "customerOrdersApp.controllers", "customerOrdersApp.appData"]);

console.log('test');

customerOrdersApp.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

    // single views
    .state("home", {
        url: "/home",
        templateUrl: "App/components/customerorders/partials/openOrders.html",
        controller: "openOrdersController"
    })

    .state("campaigns", {
        url: "/campaigns",
        templateUrl: "App/components/customerorders/partials/campaigns.html",
    })

    .state("promos", {
        url: "/promos",
        templateUrl: "App/components/customerorders/partials/promotions.html",
    })

    .state("help", {
        url: "/help",
        templateUrl: "App/components/customerorders/partials/help.html",
    })

    // multiple views & route parameter
    .state("customerInfo", {
        url: "/customerInfo/:customerID",
        views: {
            "": {
                templateUrl: "App/components/customerorders/partials/customerMain.html",
                controller: "customerController"
            },
            "contact@customerInfo": {
                templateUrl: "App/components/customerorders/partials/customerContact.html",
                controller: "customerContactController"
            },
            "history@customerInfo": {
                templateUrl: "App/components/customerorders/partials/customerHistory.html",
                controller: "customerHistoryController"
            }
        }

    })

    // nested views (children of customerInfo)
    .state("customerInfo.shipping", {
        url: "/shipping",
        templateUrl: "App/components/customerorders/partials/billShipInfo.html",
        controller: "customerShippingController"
    })

    .state("customerInfo.billing", {
    	url: "/billing",
        templateUrl: "App/components/customerorders/partials/billShipInfo.html",
        controller: "customerBillingController"
    });

    $urlRouterProvider.otherwise("/home");

});
