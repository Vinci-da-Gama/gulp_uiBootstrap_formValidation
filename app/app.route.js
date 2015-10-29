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
			views: {
				'': {
					templateUrl: './partials/p2.html',
					controller: 'p2Ctrl'
				},
				// parallel view can share same ctrl...
				"leftForm@p2": {
					templateUrl: './partials/p2/p2-leftform.html',
					controller: 'p2Ctrl'
				},
				"rightForm@p2": {
					templateUrl: './partials/p2/p2-rightform.html',
					controller: 'p2Ctrl'
				}

			}
		});

	}]);

})();