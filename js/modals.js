(function($) {
    "use strict"; // Start of use strict

    $('.modal__button-hide').click(function (event) {
        $(this).closest('.modal-custom').removeClass('visible');
    });

    // Modal specific actions
    $('#age-verify-modal-enter-button').click(function (event) {
        localStorage.setItem('isEighteen', true);
    });

})(jQuery);
