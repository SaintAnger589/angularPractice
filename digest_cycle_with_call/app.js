(function(){
  'use strict'

  angular.module('CounterApp',[])
  .controller('CounterController',CounterController);

  CounterController.$inject = ['$scope', '$timeout'];
  function CounterController($scope, $timeout){
    $scope.counter = 0;
  $scope.upCount = function(){
    $timeout(function(){
      $scope.counter++;
      console.log("Counter Incremented");
    },2000);
  // function CounterController($scope){
  //   $scope.counter = 0;
  // $scope.upCount = function(){
  //   setTimeout(function(){
  //     $scope.$apply(function(){
  //       $scope.counter++;
  //       console.log("Counter Incremented");
  //     });
  //   },2000);
  // function CounterController($scope){
  //   $scope.counter = 0;
  // $scope.upCount = function(){
  //   setTimeout(function(){
  //     $scope.counter++;
  //     console.log("Counter Incremented");
  //     $scope.$digest();
  //   },2000);

  };


};
})();
