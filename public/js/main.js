/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    function adjustPage() {
        if ($(window).scrollTop() > 150){
            $('#mainNav').addClass('visible');
        } else {
            $('#mainNav').removeClass('visible');
        }
    }

    $(window).scroll(function(){
        adjustPage();        
    });

    $(document).ready(function () {
        adjustPage();
    });

    $("#header-email-form").submit(function (event) {
        event.preventDefault();

        var postData = {};
        $(this).serializeArray().forEach(function (obj) {
            postData[obj.name] = obj.value;
        });

        if (postData['email'] === "") {
            var emailInput = $('input[name="email"]', this);

            emailInput.attr('placeholder', 'Please enter an email address');
            emailInput.addClass('error');
            return;
        }
    
        $.post( "http://localhost:8080/api/addEmailToList", postData, function(data) {
            if (data.error) {
                return;
            }
        });

    });

})(jQuery); // End of use strict
