(function () {
	var mrM = angular.module('uibfv.requirengmodol.dir');

	mrM.directive('contenteditable', [function(){
		return {
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, ctrl) {

				iElm.on('blur', function() {
					ctrl.$setViewValue(iElm.html());
				});

				ctrl.$render = function () {
					iElm.html(ctrl.$viewValue);
				};

				ctrl.$setViewValue(iElm.html());
			}
		};
	}]);

})();