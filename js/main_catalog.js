'use strict';;
(function() {
    var goodDetailPopup = document.querySelector('.good-detail-popup');
    var goodCloseButton = document.querySelector('.good-detail-close');
    var goods = document.querySelector(".goods");
    var icecreamWeight = document.getElementById('icecream-weight');

    addPopupBehaviuorOnGroup('btn-goods', goods, goodDetailPopup, goodCloseButton, 'slide');
    purchase.updateCartStyle();

    var cart = document.querySelector(".cart-hidden");

    cart.addEventListener('click', function(evt) {
        if (evt.target.classList.contains("cart-good-remove")) {
            evt.target.parentNode.classList.add('remove');
            setTimeout(function() {
                evt.target.parentNode.remove()
                purchase.updateCartStyle();
            }, 300);
            setTimeout(function() { purchase.calculateSumPrice() }, 400);
        }
    });

    var productPreview = purchase.productPreview;

    productPreview.weightNumber.addEventListener('change', function(evt) {
        var orderWeight = productPreview.weightNumber.value;
        var orderPrice = orderWeight * productPreview.price;
        productPreview.sumPrice.textContent = orderPrice;
    });

    productPreview.submit.addEventListener('click', function(evt) {
        evt.preventDefault();
        if (icecreamWeight.validity.valid && icecreamWeight.value !== '0') {
            cart.insertAdjacentElement('afterbegin', purchase.formCartPosition());
            purchase.calculateSumPrice();
            purchase.updateCartStyle();
            openPopup(evt, productPreview.success, productPreview.successClose, 'visible');
            closePopup(evt, goodDetailPopup, goodCloseButton, 'slide');
        }
    });

    goods.addEventListener('click', function(evt) {
        evt.preventDefault();
        var target = evt.target;
        if (target.classList.contains("btn-goods")) {
            var goodsItem = target.parentNode.parentNode;
            var previewName = goodsItem.querySelector('.goods-description');
            var previewImage = goodsItem.querySelector('img');
            var previewPrice = goodsItem.querySelector(".goods-price");
            purchase.formProductPreview(previewName, previewImage, previewPrice);
        };
    });
})()