(function(){
  'use strict'

  angular.module('CounterApp',[])
  .controller('CounterController',CounterController);

  CounterController.$inject = ['$scope'];
  function CounterController($scope){
    $scope.onceCounter = 0;
    $scope.counter = 0;

  $scope.showNumberOfWatchers = function(){
    console.log("# of Watchers", $scope.$$watchersCount);
  }

  $scope.countOnce = function(){
    $scope.onceCounter = 1;
  };

  $scope.upCount = function(){
    $scope.counter++;
  };

  $scope.$watch('onceCounter',function(newValue, oldValue){
    console.log("OnceCounter new value: ", newValue);
    console.log("OnceCounter old value: ", oldValue);
  });
$scope.$watch('counter',function(newValue, oldValue){
  console.log("UpCount new value: ", newValue);
  console.log("UpCount old value: ", oldValue);
});
};
})()
