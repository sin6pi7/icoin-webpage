jQuery(function($) {
    $(document).ready(function () {
        $('header').stickUp({
            parts: {
                0: 'home',
                1: 'our-activity',
                2: 'study-groups',
                3: 'interesting-people',
                4: 'contact'
            },
            itemClass: 'nav-item',
            itemHover: 'active'
        });
        $(".logo-big").load(function (){
            $('.center-auto').each(function(){
                var parent_height = $(this).parent().height();
                var top = (parent_height - $(this).outerHeight(true)) / 2;
                if(top > 0){
                    $(this).css('position', 'relative');
                    $(this).css('top', top);
                }
            });
        });
    });
});