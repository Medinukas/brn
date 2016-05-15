angular.module('app.controllers', [])

.controller('tasksCtrl', function($scope) {
	$scope.init = function() {
		if(window.localStorage['member'] == undefined) {
			$state.go('welcomeBack');
		} else {
			 window.plugins.OneSignal.init("b6e659df-5d64-4472-ad2a-9d1f547827c0", {googleProjectNumber: "276104501585"}, notificationOpenedCallback);
		 	 
		 	 window.plugins.OneSignal.getIds(function(ids) {
		 		 $scope.pushToken = ids.pushToken;
		 		 //$.get(baseUrl+'mobile/index.php?module=members&action=push&user_id='+ids.userId+'&push_token='+ids.pushToken+'&id='+memberInfo.id+'&token='+memberInfo.confirmation_key);
		 	 });
		}
	}
})
   
.controller('filesCtrl', function($scope) {

})
   
.controller('mapCtrl', function($scope) {

})
      
.controller('loadingCarsCtrl', function($scope) {

})
   
.controller('welcomeBackCtrl', function($scope, $http, $state) {
	$scope.user = {};
	
	$scope.init = function() {
		if(window.localStorage['member'] != undefined) {
			$state.go('tabsController.tasks');
		}
	}
	
	$scope.doLogin = function() {
		$http.post(baseUrl+'mobile/index.php?module=drivers&action=login&email='+$scope.user.email+'&password='+$scope.user.password)
		.success(function(data) {
			if(data.error == 1) {
				alert('klaida');
			} else {
				var memberInfo = JSON.stringify(data);
				
				window.localStorage.setItem('member', memberInfo);
				
			    $state.go('tabsController.tasks');
			}
		})
    }
})

.controller('tabsController', function($scope, $http, $state) {
	$scope.logout = function() {
		var memberInfo = JSON.parse(window.localStorage.getItem('member'));
		
		$http.post(baseUrl+'mobile/index.php?module=drivers&action=logout&token='+memberInfo.token)
		.success(function(data) {
			if(data.status == 1) {
				window.localStorage.removeItem('member');
				
				$state.go('welcomeBack');
			} else {
				alert('nepavyko');
			}
		});
    }
})
 