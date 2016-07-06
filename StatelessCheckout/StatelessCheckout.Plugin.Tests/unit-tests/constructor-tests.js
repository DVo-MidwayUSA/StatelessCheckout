describe('Add To Cart Plugin Unit Tests: Constructor Tests', function () {

    'use strict';

    it('Should call init when add to cart class is instantiated', function () {

        spyOn(AddToCart.prototype, 'init').and.callThrough();

        var sut = new AddToCart();

        expect(AddToCart.prototype.init).toHaveBeenCalled();

    });

});