var labs = {
    'A0201': [],
};

(function($) {
    "use strict"; // Start of use strict

    $("#lab-results__form").submit(function (event) {
        console.log("called")

        event.preventDefault();
        var form = $(this);
        var lotNumber = $('input[name="lot-number"]', form);

        console.log(lotNumber);

    });

})(jQuery);
