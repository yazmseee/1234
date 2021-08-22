'use strict';
(function() {
    var cart = document.querySelector(".cart-hidden");
    var cartTotalPrice = cart.querySelector('.cart-total-price > span');
    var template = document.getElementById("cart-good-template");


    productPreview = function() {
        this.popup = document.querySelector('.good-detail-popup');
        this.name = this.popup.querySelector('.good-detail-popup h3');
        this.image = this.popup.querySelector('.good-detail-popup img');
        this.submit = this.popup.querySelector(".good-detail-btn");
        this.weightNumber = this.popup.querySelector("#icecream-weight");
        this.sumPrice = this.popup.querySelector(".good-popup-price > span");
        this.price = 0;
        this.success = document.querySelector('.success-message');
        this.successClose = this.success.querySelector('.btn-success');
    };
    var productPreview = new productPreview();

    function formCartPosition() {
        var positionTemaplate = document.getElementById("cart-good-template").content.cloneNode(true);
        positionTemaplate.querySelector(".cart-good-quan .good-weight").textContent = productPreview.weightNumber.value;
        positionTemaplate.querySelector(".cart-good-quan .good-price").textContent = productPreview.price + ' руб.';
        positionTemaplate.querySelector(".cart-good-price").textContent = (productPreview.weightNumber.value * productPreview.price) + ' руб';
        positionTemaplate.querySelector("img").src = productPreview.image.src;
        positionTemaplate.querySelector(".cart-good-name").textContent = productPreview.name.textContent;
        return positionTemaplate.children[0];
    };

    function formProductPreview(productName, image, price) {
        productPreview.name.textContent = productName.textContent;
        productPreview.image.src = image.src;
        productPreview.price = parseInt(price.textContent, 10);
        productPreview.sumPrice.textContent = productPreview.weightNumber.value * productPreview.price;
    };

    function calculateSumPrice() {
        var costsElemnts = cart.querySelectorAll(".cart-good-price");
        var costs = 0;
        costsElemnts.forEach(function(item) {
            costs += parseFloat(item.textContent);
        })
        cartTotalPrice.textContent = costs + ' руб.';
    };

    function updateCartStyle() {
        var goodsAmount = cart.querySelectorAll(".cart-goods").length;
        var cartOuter = document.querySelector(".cart");
        var cartText = cartOuter.querySelector(".cart .cart-good-amount");
        if (goodsAmount > 0) {
            cartOuter.classList.add('cart-notempty');
            cartText.textContent = goodsAmount + ' товарa'
        } else {
            cartOuter.classList.remove('cart-notempty');
            cartText.textContent = 'Пусто'
        }
    };

    window.purchase = {
        productPreview: productPreview,
        formCartPosition: formCartPosition,
        formProductPreview: formProductPreview,
        calculateSumPrice: calculateSumPrice,
        updateCartStyle: updateCartStyle
    }
})();