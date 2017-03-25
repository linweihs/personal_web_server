var resumeApp = angular.module("resumeApp", ["ui.router", "resumeApp.controllers", "resumeApp.appData"]);

console.log('app get loaded');

resumeApp.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

    // single views
    .state("home", {
        url: "/home",
        templateUrl: "App/components/projectlist/partials/workExperience.html",
        controller: "workExperienceController"
    })


    $urlRouterProvider.otherwise("/home");

});
