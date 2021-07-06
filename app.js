( function(){
"use strict";

angular.module('ModuleApp',[])
.controller('ControllerApp', ControllerApp);

ControllerApp.$inject = ['$scope'];
function ControllerApp($scope){
    $scope.message = "";
    $scope.stringText = "";

    $scope.runAnalysis = function () {
        
        if( $scope.stringText.length == 0 ){
            $scope.message = "Empty string! Please enter a valid string.";
        }
        else{
            analyzeString($scope.stringText);
        }
    };

    function analyzeString(string){
        var arrayString = string.split(',');
        var totalElements = arrayString.length;

        if( totalElements < 4 ){
            $scope.message = "Enjoy!";
        }
        else{
            $scope.message = "Too much!";
        }

    }

}

})();