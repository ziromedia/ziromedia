$(".menu_bars").click(function(){
    $(".menu_items").slideToggle();
});
$(document).mouseup(function(e){
    var container = $(".main_menu");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(".menu_items").slideUp();
    }
});
$(".page-scroll").click(function(){
	$(this).find("span").addClass("anim");
	$(this).parent().siblings().find("span").removeClass("anim");
});
var scrollLink = $('.page-scroll');
// Active link switching
$(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
        var sectionOffset = $(this.hash).offset().top - 73;
        if (sectionOffset <= scrollbarLocation) {
            $(this).find("span").addClass("anim");
			$(this).parent().siblings().find("span").removeClass("anim");
        }
    });
});
$(document).ready(function(){      
    const $slider = $(".slider");
    $slider.
    on('init', () => {
      mouseWheel($slider);
    }).
    slick({
      dots: true,
      vertical: true,
      infinite: false });
    function mouseWheel($slider) {
      $(window).on('wheel', { $slider: $slider }, mouseWheelHandler);
    }
    function mouseWheelHandler(event) {
      event.preventDefault();
      const $slider = event.data.$slider;
      const delta = event.originalEvent.deltaY;
      if (delta > 0) {
        $slider.slick('slickPrev');
      } else
      {
        $slider.slick('slickNext');
      }
    }
});


