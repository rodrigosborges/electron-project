var app = angular.module('cdg', [require('angular-route'),'angularUtils.directives.dirPagination']);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "views/cliente.html",
		controller : "clienteController",
        access: { requiredLogin: false }
	});
});