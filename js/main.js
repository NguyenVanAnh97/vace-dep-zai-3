(function ($) {
    
    $(document).ready(function () {
      // mobile_menu
      var menu = $("ul#nav-top");
      if (menu.length) {
        menu.slicknav({
          prependTo: ".mobile_menu",
          closedSymbol: "+",
          onPageChange: "-",
        });
      }
    });
  })(jQuery);
  