
/*new WOW().init(); 

$(function () {
      $.srSmoothscroll({
        step: 55,
        speed: 1000,
        ease: 'swing',
        target: $('body'),
        container: $(window)
      })
})*/

$( function() {
    $( "#datepicker" ).datepicker();
} );




$(document).ready(function(){
    // map click zoom
    $('#map_wrapper').click(function () {
        $('#map_canvas ').css("pointer-events", "auto");
    });
});

$(document).ready(function(){
	

    $(".main-menu ul li.parent")
        .mouseover(function() {
          $(this ).addClass('add-active-hover');
        }).mouseout(function() {
          $(this).removeClass('add-active-hover');
    });

    $(".main-menu ul").each(function() {
      pos = $(this).offset();
      if(pos.left > $('.container').width() - $(this).width()) {
        $(this).addClass("overpass");
      }
    });
	

	$(".swipe-menu ul li a").click(function(){
		$(".navbar-toggle").removeClass("active");
	});



	$(".main-menu ul li").click(function(){
		if($(this).hasClass('active'))
		{
			$(this).removeClass('active');
			//$(".menu-nav li").show();
		}
		else
		{
			$(".main-menu ul li").removeClass('active');
			$(this).addClass('active');
			//$(".menu-nav li").hide();
		}
	});

    // tetstimonial slider
        $('#testimonial-slider').slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          slidesToScroll: 1,
          nextArrow: '<i class="slick-prev"></i>',
          prevArrow: '<i class="slick-next"></i>',
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 1000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
    /*End*/

    /*----------Multi slider start----------*/
        $('.multi-slider').slick({
          slidesToShow: 4,
          slidesToScroll: 3,
          slidesToScroll: 1,
          nextArrow: '<i class="slick-prev"></i>',
          prevArrow: '<i class="slick-next"></i>',
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
    /*Multi slider end*/
    /*---------- bottom slider start----------*/
        $('.bottom-slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: '<i class="slick-prev"></i>',
          prevArrow: '<i class="slick-next"></i>',
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
    /*bottom slider end*/
    
});


// click to back top start...............................
 $(document).on("scroll",function () {
      
      if ($(this).scrollTop() > 100) 
      {
        $('#back-top').fadeIn();
      } 
      else 
      {
        $('#back-top').fadeOut();
      }
    });
    $('#back-top a').click(function () {
      $('body,html').stop(false, false).animate({
        scrollTop: 0
      }, 800);
      return false;
    });
// click to back top end...............................

	$('#back-top a').click(function () {
		$('body,html').stop(false, false).animate({
			scrollTop: 0
		}, 800);
		return false;
	});

/*----------------complete back to top---------------------*/

$(document).ready(function(){

	/*--------------------swipe-menu------------------*/
        $('.swipe-control').click(function(){
            if($('body').hasClass('ind'))
            {
            	$(this).removeClass('active');
                $('body').removeClass('ind');
                $('.swipe').stop(true).animate({'right':'-237'},500,'easeOutCirc');
                $('.swipe').removeClass('open');
            }
            else
            {
            	$(this).addClass('active');
                if($('.icon-search').hasClass('active'))
                {
                    $('.search-form form').stop(true).slideToggle();
                    $('.icon-search').toggleClass('active');
                }   
                if($('.main-wishlist-cart').hasClass('active'))
                {
                    $('.main-wishlist-cart').removeClass('active');
                    $('.cart-dropdown').stop(true).slideUp();
                }   
                $('body').addClass('ind');
                $('.swipe').addClass('open');
                $('.swipe').stop(true).animate({'right':'0'},500,'easeOutCirc');
            }   
        });
        $('.swipe-menu ul').find('li.parent').append('<strong></strong>');

        $(".swipe-menu ul li a i").click(function(event) {
            if (event.srcElement = event.currentTarget) {
                if($(this).hasClass('active'))
                {
                    $(this).removeClass('active');
                    $(this).parent(".page-scroll").next("ul").stop(true).slideUp();
                    $(this).children('strong').removeClass('opened');
                }
                else
                {
                    $(this).siblings(0).removeClass('active');
                    $(".swipe-menu ul li ul").stop(true).slideUp();
                    $(this).siblings(0).find('strong').removeClass('opened');
                    
                    $(this).addClass('active');
                    $(this).parent(".page-scroll").next("ul").stop(true).slideDown();
                    $(this).children('strong').addClass('opened');
                }
                event.stopPropagation();
            }
            
            
        });
    /*--------------------------------*/

	 $('.swipe-menu ul li a.page-scroll').click(function(){
            if($('body').hasClass('ind'))
            {
                $('body').removeClass('ind');
                $('.swipe').stop(true).animate({'right':'-237'},400);
            }
            
        });
   /*-------------------complete swipe-menu------------------*/

});

/*--------------------swipe menu------------------*/
	$('.swipe').height($(window).height());




$(document).ready(function() {


// placeholder js in IE browser start.............
if(navigator.userAgent.indexOf("MSIE") > 0 ){
	$(function() {
	var input = document.createElement("input");
	if(('placeholder' in input)==false) {
	$('[placeholder]').focus(function() {
	var i = $(this);
	if(i.val() == i.attr('placeholder')) {
	i.val('').removeClass('placeholder');
	if(i.hasClass('password')) {
	i.removeClass('password');
	this.type='password';
	}
	}
	}).blur(function() {
	var i = $(this);
	if(i.val() == '' || i.val() == i.attr('placeholder')) {
	if(this.type=='password') {
	i.addClass('password');
	this.type='text';
	}
	i.addClass('placeholder').val(i.attr('placeholder'));
	}
	}).blur().parents('form').submit(function() {
	$(this).find('[placeholder]').each(function() {
	var i = $(this);
	if(i.val() == i.attr('placeholder'))
	i.val('');
	})
	});
	}
	});
	}
// placeholder js in IE browser end.............

});




