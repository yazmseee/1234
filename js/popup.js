'use strict';
(function() {
    var ESC_CODE = 27;

    function openPopup(evt, popopWindow, closeButton, animation) {
        evt.preventDefault();
        popopWindow.classList.add(animation);
        closeButton.addEventListener('click', function close(evt) {
            closePopup(evt, popopWindow, closeButton, animation);
            closeButton.removeEventListener('click', close);
        });
        document.addEventListener('keydown', function closeOnEsc(evt) {
            closePopupOnEsc(evt, popopWindow, closeButton, animation);
            document.removeEventListener('keydown', closeOnEsc);
        });
    };

    function closePopup(evt, popopWindow, closeButton, animation) {
        evt.preventDefault();
        popopWindow.classList.remove(animation);
    };

    function closePopupOnEsc(evt, popopWindow, closeButton, animation) {
        if (evt.keyCode === ESC_CODE) {
            closePopup(evt, popopWindow, closeButton, animation);
        };
    };

    window.addPopupBehaviuor = function(button, popupWindow, closeButton, animation) {
        button.addEventListener('click', function(evt) {
            openPopup(evt, popupWindow, closeButton, animation);
        });
    };

    window.openPopup = openPopup;
    window.closePopup = closePopup;

    window.addPopupBehaviuorOnGroup = function(condition, groupParent, popupWindow, closeButton, animation) {
        groupParent.addEventListener('click', function(evt) {
            var target = evt.target;
            if (target.classList.contains(condition)) {
                openPopup(evt, popupWindow, closeButton, animation);
            };
        });
    };
})();