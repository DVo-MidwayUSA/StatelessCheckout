describe('Add To Cart Plugin Unit Tests: Configuration Tests', function () {

    'use strict';

    var sut;

    it('Should define a default api base url', function () {

        sut = new AddToCart();

        expect(sut.settings.apiBaseUrl).not.toBeNull();

    });

    it('Should override api base url if one is provided as an option', function () {

        var url = 'url';

        sut = new AddToCart(null, null, { apiBaseUrl: url });

        expect(sut.settings.apiBaseUrl).toBe(url);

    });

});