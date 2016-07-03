describe('Cart Service Unit Tests: Get Cart - Cart Does Not Exist', function () {

    'use strict';

    var sut, dataService;

    beforeEach(function () {

        dataService = new DataService();

        spyOn(dataService, 'readLocalCart').and.returnValue(null);

        spyOn(dataService, 'createCart').and.returnValue(new Cart());

        sut = new CartService(dataService);

    });

    it('Should call data service create cart when get cart is called and a cart does not exist', function () {

        sut.getCart();

        expect(dataService.createCart).toHaveBeenCalled();

    });

    it('Should return an empty cart when get cart is called and a cart does not exist', function () {

        expect(sut.getCart()).toEqual(new Cart());

    });

});