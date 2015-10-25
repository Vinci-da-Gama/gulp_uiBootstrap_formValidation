(function () {
	var rM = angular.module('uibfv.router');

	rM.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('p1', {
			url: '/',
			templateUrl: './partials/p1.html',
			controller: 'p1Ctrl'
		})
		.state('p2', {
			url: '/p2',
			templateUrl: './partials/p2.html',
			controller: 'p2Ctrl'
		});

	}]);

})();