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

	dM.directive('validateMatch', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p2/validate-match.html',
			/*replace: true,
			transclude: true,*/
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	dM.directive('dynamicForm', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				var cs = $scope;
				cs.forks = [
					{name: 'Chris', email: ''},
					{name: 'Kaka', email: ''}];
				cs.persons = [
					{name: 'Yaya', email: ''},
					{name: 'Meme', email: ''}];
				cs.EMAIL_REGEX = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p2/right/dynamic-form.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	dM.directive('angujsFormValidation', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				$scope.user = {
					name: '',
					email: ''
				};
				$scope.NAME_REGEX = /^[a-zA-Z]+$/i;
				$scope.afvSubmit = function (isValid) {
					if (isValid) {
						console.log('promise submit...');
					} else{
						console.log('can\'t submit...');
					}
				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p2/right/angujs-form-validation.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);

	dM.directive('ngmessageCheckboxRaido', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				$scope.NAME_REGEX = /^[a-zA-Z]+$/i;
				$scope.EMAIL_REGEX = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
				$scope.formData = {name: "", email: ""};

				$scope.mcrSubmit = function (isValid) {
					if (isValid) {
						alert('promise to submit');
					} else{
						console.log('can\'t submit...');
					}
				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p2/right/ngmessage-checkbox-raido.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);



})();