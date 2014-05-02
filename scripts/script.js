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
    });
});