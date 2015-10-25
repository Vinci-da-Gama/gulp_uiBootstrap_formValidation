(function () {
	var angu = ['ui.bootstrap', 'ngAnimate', 'mgcrea.ngStrap', 'angularMoment'];
	var routerCtrl = ['uibfv.router', 'uibfv.ctrl'];
	var cons = ['uibfv.constant', 'uibfv.uiconstant'];
	var ser = ['uibfv.sig.service', 'uibfv.service'];
	var dir = ['uibfv.dir', 'uibfv.cust.dir', 'uibfv.uibpopoverandlast6.dir'];

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

})();