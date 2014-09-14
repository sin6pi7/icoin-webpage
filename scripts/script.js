$(window).load(function () {
    init();
});
function init() {
    centerSectionsContent();
    setUpAnchors();
    setUpNavbarAffix();
}
function centerSectionsContent() {
    $(".center-auto").each(function(){
        var parentHeight = $(this).parent().height();
        var top = (parentHeight - $(this).outerHeight(true)) / 2;
        if ($(this).hasClass("mission-container")) {
            top -= $(".icons-and-logo-container").height();
        }
        if(top > 0){
            $(this).css("position", "relative");
            $(this).css("top", top);
        }
    });
}
function setUpAnchors() {
    $(".js-anchor-scroll").on("click", function (e) {
        e.preventDefault();
        $($(this).attr("href")).scrollTo();
    });
}
function setUpNavbarAffix() {
    var homepageHeight = $("#home").height(),
        windowHeight = $(window).height()
        navbar = $(".navbar");
        topOffset = homepageHeight - navbar.height();
    if (homepageHeight > windowHeight) {
        topOffset = 0;        
    } 
    navbar.affix({
        offset: {
            top: function () {
                return (this.top = topOffset);
            }
        }
    }).on('affix.bs.affix affix-top.bs.affix', function () {
        $("#navbar-logo").toggle("slow");
    });
}
