var app = angular.module("myApp", ["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
        .when("/CSS", {
            template : "<h1>CSS</h1>"
        })
        .when("/bootstrap", {
            template : "<h1>bootstrap</h1>"
        })
        .otherwise({
            template : "<h1>nothing</h1><p></p>"
        });
    });
