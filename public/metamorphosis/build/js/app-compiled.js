(function () {
	var angu = ['ui.bootstrap', 'ngAnimate', 'mgcrea.ngStrap', 'angularMoment'];
	var routerCtrl = ['uibfv.router', 'uibfv.ctrl'];
	var cons = ['uibfv.constant', 'uibfv.uiconstant'];
	var ser = ['uibfv.sig.service', 'uibfv.service'];
	var dir = ['uibfv.dir', 'uibfv.cust.dir', 'uibfv.uibpopoverandlast6.dir'];
	var custModules = ['uibfv.requirengmodol.dir'];

	var depedencyArr = angu.concat(routerCtrl, cons, ser, dir);

	angular.module('uibfv', depedencyArr);

	angular.module('uibfv.router', ['ui.router']);
	angular.module('uibfv.constant', []);
	angular.module('uibfv.uiconstant', []);
	angular.module('uibfv.service', []);
	angular.module('uibfv.sig.service', []);
	angular.module('uibfv.ctrl', []);
	angular.module('uibfv.dir', ['uibfv.service', 'uibfv.sig.service']);
	angular.module('uibfv.cust.dir', ['uibfv.service', 'uibfv.sig.service']);
	angular.module('uibfv.uibpopoverandlast6.dir', ['uibfv.service', 'uibfv.sig.service']);

	angular.module('uibfv.requirengmodol.dir', ['uibfv.service', 'uibfv.sig.service']);

})();
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
(function () {
	var cosM = angular.module('uibfv.uiconstant');

	cosM.constant('titleAndNotes', {
		p1Title: "page1_ui.bootstrap",
		p1Accordion: "Accordion",
		p1Botton: "Botton",
		p1Carousel: "Carousel",
		p1Collapse: "Collapse",
		p1Datepicker: "Datepicker",
		p1DropDown: "DropDown...",
		p1Modal: "Modal",
		p1PopOver: "PopOver",
		p1Progressbar: "Progressbar_Dynamic",
		p1Rating: "Rating",
		p1Tabs: "Tabs",
		p1Timepicker: "Timepicker",
		p1Typeahead: "Typeahead"
	});

	cosM.constant('p1btnsTitle', {
		p1ButtonSigToggle: "Single_toggle",
		p1BottonCheckbox: "checkbox_Btn",
		p1BottonRadio: "radio_Btn"
	});

})();
(function () {
	var ufcM = angular.module('uibfv.constant');

	ufcM.constant('carouselConstant', {
		imgArr: ['metamorphosis/_img/flag1.png', 'metamorphosis/_img/flag2.png', 'metamorphosis/_img/flag3.png', 'metamorphosis/_img/flag4.png'],
		iprefix: ['More','Extra','Lots of','Surplus'],
		isuffix: ['Cats_0', 'Kittys_1', 'Felines_3', 'Cutes_3']
	});

	ufcM.constant('signsConstant', {
		taiqi: String.fromCharCode(9775),
		eruo: String.fromCharCode(8364),
		dollar: String.fromCharCode(36)
	});


})();
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
(function () {
	var p2lM = angular.module('uibfv.cust.dir');

	p2lM.directive('ngmodelRequire', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p2/ngModel-req1.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			// link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	p2lM.directive('validateOverwriteEmail', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p2/validate-overwrite-email.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	p2lM.directive('validateUsernameInteger', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p2/validate-username-integer.html'
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			// link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	p2lM.directive('validInvalidDirtyPristine', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				$scope.user = "wo cao";
				$scope.email = "wo.cao@gmail.com";
				$scope.emailDefault = "gannima+3@xxoo.com";
				// $scope.EMAIL_REGEX = /^[A-Za-z0-9._%+-']+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/;
				// $scope.EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;
				$scope.EMAIL_REGEX = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
				$scope.tellValid = function () {
					alert('It is valided...');
				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p2/valid-invalid-dirty-pristine.html'
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			// link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	p2lM.directive('simpleSignupForm', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p2/simple-signup-form.html'
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			// link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

})();
(function () {
	var l6M = angular.module('uibfv.uibpopoverandlast6.dir');

	l6M.directive('uibsPopover', [function(){
		return {
			// terminal: true,
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude, signsConstant) {
				var cs = $scope;
				var sc = signsConstant;
				cs.dyPopover = {
					content: "PopOver-Content: Hello WORLD...",
					inputTemplate: "./partials/p1/popover-tmpl.html",
					title: "popOver-> "+sc.taiqi+" title "+sc.dollar
				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p1/uibs-popover.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			// link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	l6M.directive('uibsProgressbar', [function(){
		return {
			// terminal: true,
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				var cs = $scope;
				cs.max = 200;

				cs.random = function() {
				    var value = Math.floor((Math.random() * 100) + 1);
				    var type;

				    if (value < 25) {
				      type = 'success';
				    } else if (value < 50) {
				      type = 'info';
				    } else if (value < 75) {
				      type = 'warning';
				    } else {
				      type = 'danger';
				    }

				    cs.showWarning = (type === 'danger' || type === 'warning');

				    cs.dynamic = value;
				    cs.type = type;
				};
				cs.random();
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p1/uibs-progressbar.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			// link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	l6M.directive('uibsRating', [function(){
		return {
			// terminal: true,
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				var cs = $scope;
				cs.rate = 7;
				cs.max = 10;
				cs.isReadonly = false;

				cs.hoveringOver = function(value) {
					cs.overStar = value;
					cs.percent = 100 * (value / cs.max);
				};

				cs.ratingStates = [
				{stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
				{stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
				{stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
				{stateOn: 'glyphicon-heart'},
				{stateOff: 'glyphicon-off'}];
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p1/uibs-rating.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			// link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	l6M.directive('uibsTabs', [function(){
		return {
			// terminal: true,
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude, $window) {
				$scope.tabs = [
				    { title:'Dynamic Title 1', content:'Dynamic content 1' },
				    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
				  ];

				$scope.alertMe = function() {
				    setTimeout(function() {
				      $window.alert('You\'ve selected the alert tab!');
				    });
				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p1/uibs-tabs.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			// link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	l6M.directive('uibsTimepicker', [function(){
		return {
			// terminal: true,
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				var cs = $scope;
				cs.mytime = new Date();
				cs.hstep = 1;
				cs.mstep = 15;

				cs.options = {
					hstep: [1, 2, 3],
					mstep: [1, 5, 10, 15, 25, 30]
				};

				cs.ismeridian = true;
				cs.toggleMode = function() {
					cs.ismeridian = ! cs.ismeridian;
				};

				cs.update = function() {
					var d = new Date();
					d.setHours( 14 );
					d.setMinutes( 0 );
					cs.mytime = d;
				};

				cs.changed = function () {
					console.log('Time changed to: ' + cs.mytime);
				};

				cs.clear = function() {
					cs.mytime = null;
				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p1/uibs-timepicker.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			// link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	l6M.directive('uibsTypeahead', [function(){
		return {
			// terminal: true,
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				$scope.selected = undefined;
				$scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
				// Any function returning a promise object can be used to load values asynchronously
				$scope.getLocation = function(val) {
				  	return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
				  		params: {
				  			address: val,
				  			sensor: false
				  		}
				  	}).then(function(response){
				  		return response.data.results.map(function(item){
				  			return item.formatted_address;
				  		});
				  	});
				};


				// $scope.statesWithFlags = [{'name':'Alabama','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Alaska','flag':'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},{'name':'Arizona','flag':'9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},{'name':'Arkansas','flag':'9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},{'name':'California','flag':'0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},{'name':'Colorado','flag':'4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},{'name':'Connecticut','flag':'9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},{'name':'Delaware','flag':'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},{'name':'Florida','flag':'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},{'name':'Georgia','flag':'5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'},{'name':'Hawaii','flag':'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},{'name':'Idaho','flag':'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},{'name':'Illinois','flag':'0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},{'name':'Indiana','flag':'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},{'name':'Iowa','flag':'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},{'name':'Kansas','flag':'d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},{'name':'Kentucky','flag':'8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},{'name':'Louisiana','flag':'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},{'name':'Maine','flag':'3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},{'name':'Maryland','flag':'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},{'name':'Massachusetts','flag':'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},{'name':'Michigan','flag':'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},{'name':'Minnesota','flag':'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},{'name':'Mississippi','flag':'4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},{'name':'Missouri','flag':'5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},{'name':'Montana','flag':'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},{'name':'Nebraska','flag':'4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},{'name':'Nevada','flag':'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},{'name':'New Hampshire','flag':'2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},{'name':'New Jersey','flag':'9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},{'name':'New Mexico','flag':'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},{'name':'New York','flag':'1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},{'name':'North Carolina','flag':'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},{'name':'North Dakota','flag':'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},{'name':'Ohio','flag':'4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},{'name':'Oklahoma','flag':'6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},{'name':'Oregon','flag':'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},{'name':'Pennsylvania','flag':'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},{'name':'Rhode Island','flag':'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},{'name':'South Carolina','flag':'6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},{'name':'South Dakota','flag':'1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},{'name':'Tennessee','flag':'9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},{'name':'Texas','flag':'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},{'name':'Utah','flag':'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},{'name':'Vermont','flag':'4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},{'name':'Virginia','flag':'4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},{'name':'Washington','flag':'5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},{'name':'West Virginia','flag':'2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},{'name':'Wisconsin','flag':'2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},{'name':'Wyoming','flag':'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}];


			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/p1/uibs-typeahead.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			// link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

})();
(function () {
	var ctrlM = angular.module('uibfv.ctrl');

	ctrlM.controller('p1Ctrl', ['$scope', '$log', 'titleAndNotes', function($scope, $log, titleAndNotes){
		$log.log("This is p1Ctrl...");
		var cs = $scope;

		cs.tn = titleAndNotes;

	}]);

	ctrlM.controller('p2Ctrl', ['$scope', '$log', 'titleAndNotes', function($scope, $log, titleAndNotes){
		$log.log("This is p2Ctrl...");
		$scope.thisPage = "This is page 2";
		$scope.groups = [
			{title: "Unmodified form ($pristine)", content: "formName.inputFieldName.$pristine (return value: true/false -- true: if the input hasn't been touched, false if it has.)"},
			{title: "Modified form ($dirty)", content: "formName.inputFieldName.$dirty (return value: true/false -- true: if the input has been modified, false if it hasn't.) -- regardless validation."},
			{title: "blurred form ($touched)", content: "formName.inputFieldName.$touched (return value: true/false -- True if item has been blurred, false if it is not.)"},
			{title: "validate form ($valid)", content: "formName.inputFieldName.$valid (return value: true/false -- true: if the input value is valided, false if it is not valided.)"},
			{title: "invalid form ($invalid)", content: "formName.inputFieldName.$invalid (return value: true/false -- true: if the input value is invalid, false if it is valid.)"},
			{title: "Whether submit form ($submitted)", content: "formName.inputFieldName.$submitted (return value: true/false -- True if user has submitted the form even if its invalid.)"},
			{title: "Collected All Validations in form ($error)", content: "formName.inputFieldName.$error (return value: true/false -- This object contains all of the validations on a particular form. If all of them is valid, then return true. Otherwise, return false.)"}];
	}]);
	

	ctrlM.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'items', function($scope, $uibModalInstance, items){
		$scope.items = items;
		console.log('$scope.items --> ', $scope.items);
		$scope.selected = {item: $scope.items[0]};

		$scope.ok = function () {
		    $uibModalInstance.close($scope.selected.item);
		};

		$scope.cancel = function () {
		    $uibModalInstance.dismiss('cancel');
		};
	}]);

	ctrlM.controller('modalCtrl', ['$scope', '$uibModal', '$log', function($scope, $uibModal, $log){

		$scope.items = ['item1', 'item2', 'item3'];
		$scope.animationsEnabled = true;

		$scope.open = function (size) {

			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: './partials/p1/uibs-modal-tmpl.html',
				controller: 'ModalInstanceCtrl',
				size: size,
				resolve: {
					items: function () {
						return $scope.items;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};

		$scope.toggleAnimation = function () {
			$scope.animationsEnabled = !$scope.animationsEnabled;
		};

	}]);

})();
(function () {
	var mdM = angular.module('uibfv.ctrl');

	

})();
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
// service js Document
// $log.log("sigSrevice error line -- 15 --- data : "+data+" config: "+config+" status: "+status+".---");
	/*sM.service('verifyNumStrObjArrUndefinedElem', ['$log', function($log){
		
		this.IsNumberAndGreaterThanZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure > 0;
			return numBool;
		};

		this.IsNumberAndGreaterThanWhileEqualZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure >= 0;
			return numBool;
		};

		this.IsStringAndNotNull = function (str) {
			var strBool = angular.isString(str) && str.length > 0 && str !== null && str !== '';
			return strBool;
		};

		this.IsUndefined = function (testimony) {
			var refBool = angular.isUndefined(testimony);
			return refBool;
		};

		this.IsJqOrDomElem = function (jqdomElem) {
			var argBool = angular.isElement(jqdomElem) && typeof(jqdomElem) !== 'undefined';
			return argBool;
		};

		this.IsObjAndNotEmpty = function (obj) {
			var objBool = angular.isObject(obj) && Object.keys(obj).length > 0 && typeof(obj) !== 'undefined';
			return objBool;
		};

		this.IsArrayAndNotUnfilled = function (arr) {
			var arrBool = angular.isArray(arr) && arr.length > 0 && typeof(arr) !== 'undefined';
			return arrBool;
		}

	}]);*/
(function () {
	var sM = angular.module('uibfv.service');

	// sM

})();
// service js Document
// $log.log("sigSrevice error line -- 14 --- data : "+data+" config: "+config+" status: "+status+".---");
/*sigM.service('inquireInfo', ['$http', '$log', 'appnameDb', function($http, $log, appnameDb){
	var dbPath = appnameDb.dbDot+appnameDb.delimiter+appnameDb.dbPrefix+appnameDb.delimiter+appnameDb.dbName+appnameDb.dbExtension;

	this.obtainDossier = function (func) {
		$http.get(dbPath)
		.then(function (testimony) {
			func(testimony.data);
			$log.log('get data successfully. '+dbPath);
		})
		.catch(function (data, config, status) {
			$log.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
		})
		.finally(function () {
			$log.log('sigSrevice line 19, finally method.');
		});
	};

}]);*/
(function () {
	var ssM = angular.module('uibfv.sig.service');

	// ssM

})();
// jQuery Js Document
$(document).ready(function() {
	
});