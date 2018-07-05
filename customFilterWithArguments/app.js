(function(){
  'use strict';

  angular.module('MsgApp',[])
  .controller('MsgController',MsgController)
  .filter('loves',LovesFilter)
  .filter('truth',TruthFilter);

  MsgController.inject = ['$scope','$filter', 'lovesFilter'];
  function MsgController($scope,$filter,lovesFilter){
    $scope.name = "gaurav";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = .45;

    $scope.sayMessage = function(){
      var msg = "Gaurav likes to eat healthy snacks at night";
      var output =  $filter('uppercase')(msg);
      return output;
    };
    $scope.sayLovesMessage = function(){
      var msg = "Gaurav likes to eat healthy snacks at night";
      msg = lovesFilter(msg);
      return msg;
    };

    $scope.feedYaakov = function(){
      $scope.stateOfBeing = "fed";
    };
  }

  function LovesFilter(){
    return function(input) {
      input  = input || "";
      input = input.replace("likes", "loves");
      return input;
    };
  };

  function TruthFilter(){
    return function(input, target, change){
      input  = input || "";
      input = input.replace(target, change);
      return input;
    }
  }

})();
