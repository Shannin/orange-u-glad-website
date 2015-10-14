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
            $('.navbar').addClass('visible');
        } else {
            $('.navbar').removeClass('visible');
        }
    }

    $(window).scroll(function(){
        adjustPage();        
    });

    $(document).ready(function () {
        adjustPage();
    });

    $('#header-email-form').submit(function (event) {
        event.preventDefault();
        var form = $(this);
        var emailInput = $('input[name="email"]', form);
        var submitBtn = $('button[type="submit"]', form);

        var errorBox = $('.error-box', this);
        errorBox.html('');

        var postData = {};
        $(this).serializeArray().forEach(function (obj) {
            postData[obj.name] = obj.value;
        });

        if (postData.email === "") {
            emailInput.attr('placeholder', 'Please enter an email address');
            emailInput.addClass('error');

            errorBox.html('Please enter an email address');
            return;
        }

        submitBtn.prop('disabled', true);
    
        $.post('/api/addEmailToList', postData, function(data) {
            submitBtn.prop('disabled', false);

            if (!data.success) {
                errorBox.html(data.message);
                return;
            }

            $('.form--email__form', form).toggle();
            $('.form--email__success-message', form).toggle();
        });
    });



    $('#contact-form').submit(function (event) {
        event.preventDefault();
        var form = $(this);

        var errorBox = $('.error-box', this);
        errorBox.removeClass('success');
        errorBox.html('');

        $('.form-group', form).each(function(idx) {
            $(this).removeClass('error');
        });

        var nameInput = $('input[name="name"]', form);
        var emailInput = $('input[name="email"]', form);
        var companyInput = $('input[name="company"]', form);
        var commentInput = $('textarea[name="comment"]', form);
        var submitBtn = $('button[type="submit"]', form);

        var postData = {};
        $(this).serializeArray().forEach(function (obj) {
            postData[obj.name] = obj.value;
        });

        var success = true;
        if (postData.comment === "") {
            commentInput.closest('.form-group').addClass('error');
            errorBox.html('What would you like to say?');
            success = false;
        }

        if (postData.email === "") {
            emailInput.closest('.form-group').addClass('error');
            errorBox.html('Please enter an email address.');
            success = false;
        }

        if (success) {
            submitBtn.prop('disabled', true);
            
            $.post('/api/contact', postData, function(data) {
                submitBtn.prop('disabled', false);

                if (!data.success) {
                    errorBox.html(data.message);
                    return;
                }

                errorBox.addClass('success');
                errorBox.html('Thanks!  We look forward to hearing what you have to say.')

                nameInput.val('');
                emailInput.val('');
                companyInput.val('');
                commentInput.val('');
            });
        }
        
    });

})(jQuery); // End of use strict
