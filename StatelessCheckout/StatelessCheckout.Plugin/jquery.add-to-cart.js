var AddToCart = (function () {

    'use strict';

    function AddToCart(element, sku, options) {

        this.$element = $(element);

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
            type: 'post',
            success: (data) => this.renderAddToCartButton(this, data),
            error: (data) => this.renderDealerButton(this, data)
        });

    };

    AddToCart.prototype.renderAddToCartButton = function (self, data) {

        self.$element.html('<button>Add to Cart</button><input type="number" value="1" />');

    };

    AddToCart.prototype.renderDealerButton = function (self, data) {

        self.$element.html('<button>Locate Dealer</button>');

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
