var CartService = (function () {

    'use strict';

    function CartService(dataService) {

        this.dataService = dataService;

    }

    CartService.prototype.getCart = function () {

        var serverCart,
            localCart = this.dataService.readLocalCart();

        if (localCart)
        {
            return localCart;
        }

        serverCart = this.dataService.readServerCart();

        if (serverCart)
        {
            return serverCart;
        }

        return this.dataService.createCart();

    };

    return CartService;

}());