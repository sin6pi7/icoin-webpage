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
        var parent_height = $(this).parent().height();
        var top = (parent_height - $(this).outerHeight(true)) / 2;
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
    $(".subsection-anchor, .nav-item, .navbar-brand").on("click", function (e) {
        e.preventDefault();
        $($(this).attr("href")).scrollTo();
    });
}
function setUpNavbarAffix() {
    $(".navbar").affix({
        offset: {
            top: function () {
                return (this.top = ($(window).height() - $(".navbar").height()));
            }
        }
    }).on('affix.bs.affix affix-top.bs.affix', function () {
        $("#navbar-logo").toggle("slow");
    });
}
