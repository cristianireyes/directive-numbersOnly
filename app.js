angular
    .module('app', [])
    .controller('mainController', mainController)
    .directive("numbersOnly", numbersOnly);

// Main controller
function mainController($scope) {
    $scope.test = "";
  
}

// Directive
function numbersOnly() {	
    return {
      require: 'ngModel',
      link: function (scope, element, attr, ngModelCtrl) {
        function fromUser(text) {
          if (text) {
            var isValid = !!text.match(/^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/);
            var transformedInput = text;
            if (!isValid) {
              transformedInput = text.substring(0, text.length-1);
              ngModelCtrl.$setViewValue(transformedInput);
              ngModelCtrl.$render();
            }
            return transformedInput;
          }
          return undefined;
        }
        ngModelCtrl.$parsers.push(fromUser);
      }
    };
  }