var CartService = (function () {

    'use strict';

    function CartService(dataService) {

        this.dataService = dataService;

    }

    CartService.prototype.getCart = function () {

        this.dataService.createCart();

    };

    return CartService;

}());