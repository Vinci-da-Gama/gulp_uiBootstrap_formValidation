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
		$scope.fullTimel = new Date(1382086394000);
		$scope.date = $scope.fullTimel.getDate();
		$scope.month = $scope.fullTimel.getMonth();
		$scope.year = $scope.fullTimel.getFullYear();
		$scope.fullDate = $scope.date+"/"+$scope.month+"/"+$scope.year;
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