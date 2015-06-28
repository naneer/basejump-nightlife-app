'use strict';

angular.module('workspaceApp')
  .controller('LoginCtrl', ['$scope', 'Auth', '$rootScope', '$window', '$state',
  function ($scope, Auth, $rootScope, $window, $state) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to previous state unless login, signup, settings, or none
          var state = $rootScope.$previousState.name;
          if(state === "login" || !state || state === "signup" || state === "settings"){
            $state.go("main");
          } else {
            $state.go(state, $rootScope.$previousStateParams);
          }
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  }]);
