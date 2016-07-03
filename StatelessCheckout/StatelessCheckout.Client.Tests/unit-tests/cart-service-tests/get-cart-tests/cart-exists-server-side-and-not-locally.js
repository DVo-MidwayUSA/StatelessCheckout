describe('Cart Service Unit Tests: Get Cart - Cart Exists Server-Side', function () {

    'use strict';

    var sut, cart, dataService;

    beforeEach(function () {

        dataService = new DataService();

        cart = new Cart();

        spyOn(dataService, 'readLocalCart').and.returnValue(null);

        spyOn(dataService, 'readServerCart').and.returnValue(cart);

        sut = new CartService(dataService);

    });

    it('Should call data service read local cart when get cart is called and a cart exists server-side and not locally', function () {

        sut.getCart();

        expect(dataService.readLocalCart).toHaveBeenCalled();

    });

    it('Should call data service read server cart when get cart is called and a cart exists server-side and not locally', function () {

        sut.getCart();

        expect(dataService.readServerCart).toHaveBeenCalled();

    });

    it('Should return cart returned by read server cart when get cart is called and a cart exists server-side and not locally', function () {

        expect(sut.getCart()).toBe(cart);

    });

});