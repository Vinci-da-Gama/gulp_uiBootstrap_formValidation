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