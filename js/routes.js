'use strict';

var myApp = angular.module('myApp', ['ngRoute','chart.js']);

myApp.config(function($routeProvider) {
    $routeProvider.when(
    	'/', 
    	{
    		templateUrl: 'main.html', 
    		controller: 'Main'
    	});    
    $routeProvider.otherwise(
        {
            redirectTo: '/'
        });
});
