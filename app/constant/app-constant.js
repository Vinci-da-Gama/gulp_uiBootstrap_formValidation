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

	cosM.constant('SignStorage', {
		taiqi: String.fromCharCode(9775),
		Asterisk: String.fromCharCode(42)
	});

})();