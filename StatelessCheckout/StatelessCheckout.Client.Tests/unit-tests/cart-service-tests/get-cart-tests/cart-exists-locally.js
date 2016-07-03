describe('Cart Service Unit Tests: Get Cart - Cart Exists Locally', function () {

    'use strict';

    var sut, cart, dataService;

    beforeEach(function () {

        cart = new Cart();

        dataService = new DataService();

        spyOn(dataService, 'readLocalCart').and.returnValue(cart);

        spyOn(dataService, 'createCart');

        sut = new CartService(dataService);

    });

    it('Should call data service read local cart when get cart is called and a cart exists locally', function () {

        sut.getCart();

        expect(dataService.readLocalCart).toHaveBeenCalled();

    });

    it('Should return cart returned by data service read local cart when get cart is called and a cart exists locally', function () {

        expect(sut.getCart()).toBe(cart);

    });

    it('Should not call data service create cart when get cart is called and a cart exists locally', function () {

        sut.getCart();

        expect(dataService.createCart).not.toHaveBeenCalled();

    });

});