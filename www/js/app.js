// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('forabook', ['ionic'])

.controller('EventController', function($scope, $http) {
    $http.get('https://graph.facebook.com/1648730325346291/feed?access_token=CAACEdEose0cBAHCQp6E50UbVx86WJpY48cNkLCfepcF3tSOJP7jlqI0I8RgaMUGpSRXAzIdPl5HoAuHKYhZB99LmPhfbnY4z57QVV4LQWJgyjBNVi9ji9JiZCUqRz9NX0qjNygwh4sPnaQ55iz0tEwZBIVnGDMoKasLtPbveOxykztIMxHJmnNdLJXpgsSABvssf8OfY6MXRTdyynV7').then(function(resp) {
      $scope.events = resp.data.data;
    }, function(err) {
      console.error('Error from event', err);
      // err.status will contain the status code
    })
})

.controller('PageController', function ($scope, $http) {
    $http({
      method: 'POST',
      url: 'http://40.122.170.208:3000/login',
      data: {
        access_token: "CAACEdEose0cBAKOWTr6sfv3ZAIieZBi0o0H36067s9z0B1f5GXICZA8wqugA7EwKxbASqjumKzVIgeASHnusu34ZACfUa0ZBoCoc38IoZBlZCkMJJ6WZBKdstuTcu2m54LzK8fEhPeqXFlAGqPQiWUUNlAuCZApt2SOu67FtimaoEmjsmC50dsgNjZA1cSWz1fNQYw8BXZAM3y1hdsU1lIoMmw1"
      }
    }).success(function(response) {
      console.log("success from page!!");
      $scope.pages = response;
      console.log(response);
    }).error(function() {
      console.log("error from page");
    })
  })
/*
.controller('AppCtrl', function ($scope, $ionicModal, Session, ngFB) {
    $scope.share = function (event) {
      ngFB.api({
        method: 'POST',
        path: '/me/feed',
        params: {
          message: "I'll be attending: '" + $scope.session.title + "' by " +
          $scope.session.speaker
        }
      }).then(
        function () {
          alert('The session was shared on Facebook');
        },
        function () {
          alert('An error occurred while sharing this session on Facebook');
        });
    };
  })
  */

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
});
