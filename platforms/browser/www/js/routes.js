angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.tasks', {
    url: '/tasks',
    views: {
      'tab1': {
        templateUrl: 'templates/tasks.html',
        controller: 'tasksCtrl'
      }
    }
  })

  .state('tabsController.files', {
    url: '/files',
    views: {
      'tab3': {
        templateUrl: 'templates/files.html',
        controller: 'filesCtrl'
      }
    }
  })

  .state('tabsController.map', {
    url: '/map',
    views: {
      'tab2': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true,
    controller: 'tabsController'
  })

  .state('loadingCars', {
    url: '/loading-cars',
    templateUrl: 'templates/loadingCars.html',
    controller: 'loadingCarsCtrl'
  })

  .state('welcomeBack', {
    url: '/page6',
    templateUrl: 'templates/welcomeBack.html',
    controller: 'welcomeBackCtrl'
  })

$urlRouterProvider.otherwise('/page6')

  

});