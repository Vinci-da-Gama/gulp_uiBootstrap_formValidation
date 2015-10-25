(function () {
	var cdM = angular.module('uibfv.cust.dir');

	cdM.directive('uibsAccordion', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				var cs = $scope;
				cs.oneAtATime = true;

				cs.groups = [
				{
					title: 'Dynamic Group Header - 1',
					content: 'Dynamic Group Body - 1'
				},
				{
					title: 'Dynamic Group Header - 2',
					content: 'Dynamic Group Body - 2'
				}];

				cs.items = ['Item 1', 'Item 2', 'Item 3'];

				cs.addItem = function() {
					var newItemNo = cs.items.length + 1;
					cs.items.push('Item ' + newItemNo);
				};

				cs.status = {
					isFirstOpen: true,
					isFirstDisabled: false
				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p1/uibs-accordion.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

cdM.directive('uibsButtons', [function(){
	return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude, p1btnsTitle) {
				var cs = $scope;
				cs.ptt = p1btnsTitle;

				cs.singleModel = 1;
				cs.radioModel = 'Middle';

				cs.checkModel = {
					left: false,
					middle: true,
					right: false
				};

				cs.checkResults = [];

				cs.$watchCollection('checkModel', function () {
					cs.checkResults = [];
					angular.forEach(cs.checkModel, function (value, key) {
						if (value) {
							cs.checkResults.push(key);
						}
					});
				});
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p1/uibs-buttons.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);

cdM.directive('uibsCarousel', [function(){
	return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude, carouselConstant, signsConstant) {
				var cs = $scope;
				cs.cc = carouselConstant;
				var sc = signsConstant;

				cs.myInterval = 3000;
				cs.noWrapSlides = false;

				var sliderArr = cs.cc.imgArr;
				var textArr = cs.cc.isuffix;
				cs.sliderCollection = [];

				sliderArr.forEach(function (elem, index) {
					var newElem = {
						img: elem,
						text: textArr[index]
					};
					if (angular.isObject(newElem)) {
						cs.sliderCollection.push(newElem);
					} else{
						console.log('The new element is empty or format is incorrct...');
					}
				});

				console.log('cs.sliderCollection --> ', cs.sliderCollection);
				console.log('approval sign could be done in this way --> '+sc.taiqi+" - "+sc.dollar);
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p1/uibs-carousel.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);

cdM.directive('uibsCollapse', [function(){
	return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				var cs = $scope;
				cs.isCollapsed = false;
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p1/uibs-collapse.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);

cdM.directive('uibsDatepicker', [function(){
	return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				var cs = $scope;

				cs.today = function() {
					cs.dt = new Date();
				};
				cs.today();

				cs.clear = function () {
					cs.dt = null;
				};

				var todayDate = cs.dt.toString();
				console.log('today is --> ', cs.dt+" -- type is: "+typeof(cs.dt));
				console.log('today is --> ', todayDate+" -- type is: "+typeof(todayDate));
				var momentToday = moment(cs.dt).format('MMMM Do YYYY, h:mm:ss a');
				console.log('momentToday is -> '+momentToday+" -- type is: "+typeof(momentToday));

				// Disable weekend selection
				cs.disabled = function(date, mode) {
					return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
				};

				cs.toggleMin = function() {
					cs.minDate = cs.minDate ? null : new Date();
				};
				cs.toggleMin();
				cs.maxDate = new Date(2020, 5, 22);

				cs.status = {
					openedLeft: false,
					openedRight: false
				};

				cs.openLeft = function($event) {
					cs.status.openedLeft = true;
				};

				cs.openRight = function($event) {
					cs.status.openedRight = true;
				};

				cs.setDate = function(year, month, day) {
					cs.dt = new Date(year, month, day);
				};

				cs.dateOptions = {
					formatYear: 'yy',
					startingDay: 1
				};

				cs.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
				cs.format = cs.formats[0];

				var tomorrow = new Date();
				tomorrow.setDate(tomorrow.getDate() + 1);
				var afterTomorrow = new Date();
				afterTomorrow.setDate(tomorrow.getDate() + 2);

				cs.events = [
				{
					date: tomorrow,
					status: 'full'
				},
				{
					date: afterTomorrow,
					status: 'partially'
				}];

				cs.getDayClass = function(date, mode) {
					if (mode === 'day') {
						var dayToCheck = new Date(date).setHours(0,0,0,0);

						for (var i=0; i<cs.events.length; i++){
							var currentDay = new Date(cs.events[i].date).setHours(0,0,0,0);

							if (dayToCheck === currentDay) {
								return cs.events[i].status;
							}
						}
					}

					return '';
				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p1/uibs-datepicker.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	cdM.directive('uibsDropdown', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				var cs = $scope;
				cs.items = [
				    'The first choice!',
				    'And another choice for you.',
				    'but wait! A third!'
				];

				cs.status = {isopen: false};

				cs.toggled = function(open) {
				    $log.log('Dropdown is now: ', open);
				};

				cs.toggleDropdown = function($event) {
				    $event.preventDefault();
				    $event.stopPropagation();
				    cs.status.isopen = !cs.status.isopen;
				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p1/uibs-dropdown.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

})();