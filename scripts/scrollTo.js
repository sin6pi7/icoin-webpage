jQuery(
function($) {

    $(document).ready( function() {

        $.fn.scrollTo = function() {
            $('html, body').animate({
                scrollTop: $(this).offset().top + 'px'
            }, 'slow');
            return this;
        }
    });
});