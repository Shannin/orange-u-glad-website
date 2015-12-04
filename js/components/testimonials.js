(function($) {
    "use strict"; // Start of use strict

    var wrapper = $(".testimonials__testimonial-wrapper");
    var testimonials = $("h3", wrapper);
    var showingIndex = -1;

    function resetTestimonialPositions() {
        var maxHeight = 0;

        testimonials.each(function (idx, t) {
            var height = $(t).height();
            if (height > maxHeight) {
                maxHeight = $(t).height()
            }
        });

        testimonials.each(function (idx, t) {
            var top = (maxHeight - $(t).height()) / 2;
            $(t).css('padding-top', top);
        });

        wrapper.height(maxHeight);
    }

    function cycle() {
        showingIndex++;
        testimonials.eq(showingIndex % testimonials.length)
            .fadeIn(2000)
            .delay(3500)
            .fadeOut(2000, cycle);
    }

    resetTestimonialPositions();
    cycle();

    $(window).on('resize', resetTestimonialPositions);
})(jQuery);