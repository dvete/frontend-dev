(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListToBuyController', ShoppingListToBuyController)
.controller('ShoppingListAlreadyBoughtController', ShoppingListAlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ShoppingListToBuyController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListToBuyController(ShoppingListCheckOffService) {
    var toBuy = this; 
    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
    toBuy.buyItem = function (itemIndex) {
        try {
            ShoppingListCheckOffService.buyItem(itemIndex);
        } catch (error) {
            toBuy.message = error.message;
        }
    };

}

ShoppingListAlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListAlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;

    //List of shopping items to buy
    var toBuyItems = [{
        name: "cookies",
        quantity: 10
      }, {
        name: "candies",
        quantity: 5
      }, {
        name: "chips",
        quantity: 8
      }, {
        name: "jellybeans",
        quantity: 20
      }, {
        name: "cakes",
        quantity: 12
      }
    ];

    //List of shopping items already bought
    var boughtItems = [];

    service.getItemsToBuy = function () {
        return toBuyItems;
    }

    service.buyItem = function (index) {
        if (toBuyItems.length > 0 ) {
            var item = toBuyItems.splice(index, 1);
            boughtItems.push(item);
        } 
        if (toBuyItems.length == 0 )
        {
            throw new Error('Everything is bought!');
        }
    }

    service.getBoughtItems = function () {
        return boughtItems;
    }
}

}) ();