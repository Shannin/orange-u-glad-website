(function($) {
    "use strict"; // Start of use strict

    var labs = {
        'A0201': 'http://www.cwcannalytical.com/cwlims/verify?cwid=CW7214S01&share=1',
    };

    $("#lab-results__form").submit(function (event) {
        event.preventDefault();
        var form = $(this);
        var lotNumber = $('input[name="lot-number"]', form).val().toUpperCase();

        var labResultsLink = labs[lotNumber];
        if (labResultsLink) {
            window.open(labResultsLink, '_blank');
        } else {
            console.log('display error')
        }
    });

})(jQuery);
