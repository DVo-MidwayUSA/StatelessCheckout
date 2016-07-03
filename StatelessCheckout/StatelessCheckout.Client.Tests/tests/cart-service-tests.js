describe('Cart Service Tests', function () {

    'use strict';

    var sut, dataService;

    beforeEach(function () {

        dataService = new DataService();

        spyOn(dataService, 'createCart');

        sut = new CartService(dataService);

    });

    it('Should call create cart when get cart is called and a cart does not exist', function () {

        sut.getCart();

        expect(dataService.createCart).toHaveBeenCalled();

    });



});