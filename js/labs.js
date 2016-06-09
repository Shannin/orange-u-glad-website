(function($) {
    "use strict"; // Start of use strict

    var labs = {
        'A0201': 'http://www.cwcannalytical.com/cwlims/verify?cwid=CW7214S01&share=1',
        'OUGO214': 'http://www.cwcannalytical.com/cwlims/verify?cwid=CW9190S01&share=1',
    };

    $("#lab-results__form").submit(function (event) {
        event.preventDefault();
        var form = $(this);
        var lotNumber = $('input[name="lot-number"]', form).val().toUpperCase();

        var labResultsLink = labs[lotNumber];
        if (labResultsLink) {
            window.open(labResultsLink, '_blank');
        } else {
            var errorBox = $(".error-box", form);

            if (lotNumber.length > 0) {
                errorBox.html("Results for lot number '" + lotNumber + "' could not be found.");
            } else {
                errorBox.html("Please enter a lot number.")
            }

        }
    });

})(jQuery);
