var AddToCart = (function () {

    'use strict';

    function AddToCart(element, sku, options) {

        this.sku = sku;

        this.settings = $.extend({

            apiBaseUrl: `/api/cart/${sku}`

        }, options);

        this.init();
    }

    AddToCart.prototype.init = function () {

        $.ajax({
            url: this.settings.apiBaseUrl,
            data: { sku: this.sku },
            success: this.renderAddToCartButton,
            error: this.renderDealerButton
        });

    };

    AddToCart.prototype.renderAddToCartButton = function () {

    };

    AddToCart.prototype.renderDealerButton = function () {

    };

    return AddToCart;

}());

(function ($) {

    'use strict';
    
    $.fn.addToCart = function (sku, options) {
        return this.each(function () {
            $.data(this, 'addToCart', new AddToCart(this, sku, options));
        });
    };

}(jQuery));
