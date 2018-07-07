(function (){
  'use strict';

  var shoppingList1 = [
    "Milk", "Water", "Cookies", "Chocolate", "Peanut Butter", "Cookie French"
  ];
  var shoppingList2 = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Chocolate",
      quantity: "3"
    },
    {
      name: "Peanuts",
      quantity: "23"
    },
    {
      name: "French Cookie",
      quantity: "267"
    }
  ];

  angular.module('ShoppintListApp',[])
  .controller('ShoppingListController',ShoppingController);

  ShoppingController.$inject = ['$scope'];
  function ShoppingController($scope) {
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;

    $scope.addtoList = function(){
      var newItem = {
        name : $scope.newItemName,
        quantity : $scope.itemQuantity
      };
      $scope.shoppingList2.push(newItem);
    }
  }
})()
