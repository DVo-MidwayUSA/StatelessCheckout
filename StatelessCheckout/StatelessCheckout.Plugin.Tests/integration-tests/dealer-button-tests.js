describe('Add To Cart Plugin Integration Tests: Dealer Button Tests', function () {

    'use strict';

    var $observed;

    beforeEach(function () {

        spyOn($, 'ajax').and.callFake(function (options) {

            options.error();

        });

        $observed = $('<div />').addToCart();

    });

    it('Should render a locate dealer button', function () {

        expect($observed).toContainHtml('<button>Locate Dealer</button>');

    });

});