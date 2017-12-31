$(window).load(function init() {
  function setUpAnchors() {
    var href;
    $(".js-anchor-scroll").on("click", function(e) {
      href =
        $(this).attr("href") ||
        $(this)
          .children("a")
          .attr("href");
      e.preventDefault();
      $(href).scrollTo();
      history.pushState({}, href, href);
    });
  }
  function setUpNavbarAffix() {
    var homepageHeight = $("#home").height(),
      windowHeight = $(window).height();
    navbar = $(".navbar");
    topOffset = homepageHeight - navbar.height();
    if (homepageHeight > windowHeight) {
      topOffset = 0;
    }
    navbar
      .affix({
        offset: {
          top: function() {
            return (this.top = topOffset);
          }
        }
      })
      .on("affix.bs.affix affix-top.bs.affix", function() {
        $("#navbar-logo").toggle("slow");
      });
  }
  function setUpSectionsLoader(sections) {
    var loading = [];
    var loaded = [];
    function loadSection(section) {
      var $container = $(section.containerSelector);
      if (
        loading.indexOf(section.path) !== -1 ||
        loaded.indexOf(section.path) !== -1
      ) {
        return;
      }
      loading.push(section.path);
      $.get(section.path)
        .done(function(html) {
          loaded.push(section.path);
          $container.html(html);
          $container.parallax({ imageSrc: section.backgroundPath });
          var $centerAuto = $container.find(".center-auto");
          var parentHeight = $centerAuto.parent().height();
          var top = (parentHeight - $centerAuto.outerHeight(true)) / 2;
          if ($centerAuto.hasClass("mission-container")) {
            top -= $(".icons-and-logo-container").height();
          }
          if (top > 0) {
            $centerAuto.css("position", "relative");
            $centerAuto.css("top", top);
          }
        })
        .always(function() {
          loading.splice(loading.indexOf(section.path), 1);
        });
    }
    sections.forEach(function(section, idx) {
      var $container = $(section.containerSelector);
      $container.appear();
      if ($container.is(":appeared")) {
        loadSection(section);
        if (idx > 0) {
          loadSection(sections[idx - 1]);
        }
        if (idx < sections.length - 1) {
          loadSection(sections[idx + 1]);
        }
        return;
      }
      $container.on("appear", function() {
        loadSection(section);
        if (idx > 0) {
          loadSection(sections[idx - 1]);
        }
        if (idx < sections.length - 1) {
          loadSection(sections[idx + 1]);
        }
      });
    });
  }

  setUpSectionsLoader([
    {
      containerSelector: "#home",
      path: "/sections/home.html",
      backgroundPath: "images/darker-money.jpg"
    },
    {
      containerSelector: "#financial-abc",
      path: "/sections/financial-abc.html",
      backgroundPath: "images/krakow.jpg"
    },
    {
      containerSelector: "#financial-abc-subsection1",
      path: "/sections/financial-abc-subsection1.html",
      backgroundPath: "images/tatry.jpg"
    },
    {
      containerSelector: "#financial-abc-subsection2",
      path: "/sections/financial-abc-subsection2.html",
      backgroundPath: "images/new-york.jpg"
    },
    {
      containerSelector: "#financial-abc-subsection3",
      path: "/sections/financial-abc-subsection3.html",
      backgroundPath: "images/dubai.jpg"
    },
    {
      containerSelector: "#experts",
      path: "/sections/experts.html",
      backgroundPath: "images/coffee-shop.jpg"
    },
    {
      containerSelector: "#experts-subsection1",
      path: "/sections/experts-subsection1.html",
      backgroundPath: "images/restaurant.jpg"
    },
    {
      containerSelector: "#cofounder",
      path: "/sections/cofounder.html",
      backgroundPath: "images/money.jpg"
    },
    {
      containerSelector: "#contact",
      path: "/sections/contact.html",
      backgroundPath: "images/d17.jpg"
    }
  ]);
  setUpAnchors();
  setUpNavbarAffix();
});
