describe('Add To Cart Plugin Unit Tests: Constructor Tests', function () {

    'use strict';

    var sut, sku, url;

    beforeEach(function () {

        sku = 'sku',

        url = 'url';

        spyOn(AddToCart.prototype, 'init').and.callThrough();

        sut = new AddToCart();

    });

    it('Should call init when add to cart class is instantiated', function () {

        expect(AddToCart.prototype.init).toHaveBeenCalled();

    });

});