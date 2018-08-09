$(document).ready(function() {

    var $scrollStatus = $('.scroll-status');
        
            $('.nav').navScroll({
              mobileDropdown: true,
              mobileBreakpoint: 768,
              scrollSpy: true,
              onScrollStart: function() {
                $scrollStatus.show();
                $scrollStatus.text('Started scrolling');
              },
              onScrollEnd: function() {
                $scrollStatus.text('Scrolling ended');
                setTimeout(function() {
                  $scrollStatus.fadeOut(200);
                }, 1000);
              }
            });
        
            $('.click-me').navScroll({
              navHeight: 0
            });
        
            $('.nav').on('click', '.nav-mobile', function (e) {
              e.preventDefault();
              $('.nav ul').slideToggle('fast');
            });


            jQuery("#gallery").unitegallery();
    
});