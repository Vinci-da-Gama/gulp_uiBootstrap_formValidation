(function () {
	var dM = angular.module('uibfv.dir');

	dM.directive('overwriteEmail', [function(){
		var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com$/i;
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', //can be empty... // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, ctrl) {
				// only ngModel has validator for email (like $error);
				if (ctrl && ctrl.$validators.email) {
					ctrl.$validators.email = function (modelValue) {
						return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
					};
				}
			}
		};
	}]);

	dM.directive('integerValidate', [function(){
		var INTEGER_REGEXP = /^\-?\d+$/;
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, ctrl) {
				ctrl.$validators.cao = function (modelValue, viewValue) {
					if (ctrl.$isEmpty(modelValue)) {
						// empty model value is valid... (people can write nothing...)
						return true;
					}
					if (INTEGER_REGEXP.test(viewValue)) {
						return true;
					}
					return false;
				};
			}
		};
	}]);

	dM.directive('usernameValidate', ['$q', '$timeout', function($q, $timeout){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, ctrl) {
				var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

				ctrl.$asyncValidators.ganName = function (modelValue, viewValue) {
					if (ctrl.$isEmpty(modelValue)) {
				        // consider empty model valid
				         return $q.when();
			        }

			        var def = $q.defer();

			        $timeout(function() {
			          	// Mock a delayed response
			          	if (usernames.indexOf(modelValue) === -1) {
			            	// The username is available
			            	def.resolve();
			          	} else {
			            	def.reject();
			          	}

			        }, 2000);

			        return def.promise;
				};
			}
		};
	}]);

})();