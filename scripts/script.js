$(window).load(function () {
    init();
});

$(document).ready(function () {
    init();
});

function init() {
    $('.logo-big').load(function (){
        $('.center-auto').each(function(){
            var parent_height = $(this).parent().height();
            var top = (parent_height - $(this).outerHeight(true)) / 2;
            if(top > 0){
                $(this).css('position', 'relative');
                $(this).css('top', top);
            }
        });
    });

    $('.subsection-anchor').on('click', function (e) {
        e.preventDefault();
        var subsectionIndex = ($(this).parent().index() + 1)/2;
        var subsection = $(this).closest('.main-section').siblings('.subsection')[subsectionIndex-1];
        $(subsection).scrollTo();
    });

    $(".nav-item, .logo-anchor").on('click', function (e) {
        e.preventDefault();
        $($(this).attr('href')).scrollTo();
    });
}