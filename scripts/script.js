jQuery(function($) {
    $(document).ready(function () {
        $('header').stickUp({
            parts: {
                0: 'home',
                1: 'sekcja2',
                2: 'sekcja3',
                3: 'sekcja4',
                4: 'sekcja5'
            },
            itemClass: 'nav-item',
            itemHover: 'active'
        });
        $(".logo-big").load(function (){
            $('.center-auto').each(function(){
                var parent_height = $(this).parent().height();
                var top = (parent_height - $(this).height()) / 2;
                console.log(parent_height);
                console.log($(this).height());
                if(top > 0){
                    $(this).css('position', 'relative');
                    $(this).css('top', top);
                }
            });
        });
    });
});