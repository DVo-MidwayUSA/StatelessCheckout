describe('Add To Cart Plugin Unit Tests: Init Tests', function () {

    'use strict';

    var sut, sku, url;

    beforeEach(function () {

        sku = 'sku',

        url = 'url';

        sut = new AddToCart(null, sku, { apiBaseUrl: url });

    });

    it('Should use SKU to check if product is available for purchase', function () {

        spyOn($, 'ajax');

        sut.init();

        expect($.ajax).toHaveBeenCalledWith({
            data: { sku: sku },
            url: url,
            success: sut.renderAddToCartButton,
            error: sut.renderDealerButton
        });

    });

    it('Should call render add to cart button if product is available for purchase', function () {

        spyOn($, 'ajax').and.callFake(function (options) {

            options.success();

        });

        spyOn(AddToCart.prototype, 'renderAddToCartButton');

        sut.init();

        expect(AddToCart.prototype.renderAddToCartButton).toHaveBeenCalled();

    });

    it('Should call render dealer button if product is not available for purchase', function () {

        spyOn($, 'ajax').and.callFake(function (options) {

            options.error();

        });

        spyOn(AddToCart.prototype, 'renderDealerButton');

        sut.init();

        expect(AddToCart.prototype.renderDealerButton).toHaveBeenCalled();

    });

});