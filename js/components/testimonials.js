(function($) {
    "use strict"; // Start of use strict

    var testimonials = $("h3", ".testimonials__testimonial-wrapper");
    var idx = -1;
    var transition = 3500;

    function cycle() {
        idx++;
        testimonials.eq(idx % testimonials.length)
            .fadeIn(2000)
            .delay(3500)
            .fadeOut(2000, cycle);
    }
    
    cycle();
})(jQuery);