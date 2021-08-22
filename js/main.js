'use strict';
(function() {
    var feedbackOpenButton = document.querySelector('.btn-contacts');
    var feedback = document.querySelector('.feedback-popup');
    var feedbackCloseButton = feedback.querySelector('.feedback-close');

    var goodDetailPopup = document.querySelector('.good-detail-popup');
    var goodCloseButton = document.querySelector('.good-detail-close');
    var hits = document.querySelector(".hits");
    var icecreamWeight = document.getElementById('icecream-weight');
    var productPreview = purchase.productPreview;

    addPopupBehaviuor(feedbackOpenButton, feedback, feedbackCloseButton, 'slide');
    addPopupBehaviuorOnGroup('btn-hits', hits, goodDetailPopup, goodCloseButton, 'slide');
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

    hits.addEventListener('click', function(evt) {
        evt.preventDefault();
        var target = evt.target;
        if (target.classList.contains("btn-hits")) {
            var hitsItem = target.parentNode.parentNode;
            var previewName = hitsItem.querySelector('.hits-description');
            var previewImage = hitsItem.querySelector('img');
            var previewPrice = hitsItem.querySelector(".hits-price");
            purchase.formProductPreview(previewName, previewImage, previewPrice);
        };
    });
})();