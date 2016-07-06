describe('Add To Cart Plugin Integration Tests: Add To Cart Button Tests', function () {

    'use strict';

    var $observed, data;

    beforeEach(function () {

        data = {
            saleItemId: 'saleItemId',
            token: 'token'
        };

        spyOn($, 'ajax').and.callFake(function (options) {

            options.success();

        });

        $observed = $('<div />').addToCart();

    });

    it('Should render an add to cart button', function () {

        expect($observed).toContainHtml('<button>Add to Cart</button>');

    });

    it('Should render an input for quantity', function () {

        expect($observed).toContainHtml('<input type="number" value="1" />');

    });

});