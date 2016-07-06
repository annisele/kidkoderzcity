/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);

/**
 * How to create a parallax scrolling website
 * Author: Petr Tichy
 * URL: www.ihatetomatoes.net
 * Article URL: http://ihatetomatoes.net/how-to-create-a-parallax-scrolling-website/
 */

( function( $ ) {

	// Setup variables
	$window = $(window);
	$slide2 = $('.homeSlide2');
	$slideExtra = $('.homeSlideExtraShort');
	$slideShort = $('.homeSlideShort');
	$slide = $('.homeSlide');
	$slide60 = $('.homeSlide60');
	$slide75 = $('.homeSlide75');
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');
	$body = $('body');

    //FadeIn all sections
	$body.imagesLoaded( function() {
		setTimeout(function() {

		      // Resize sections
		      adjustWindow();

		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');

		}, 800);
	});



	function adjustWindow(){

		// Init Skrollr
		var s = skrollr.init({
		    render: function(data) {

		        //Debugging - Log the current scroll position.
		        //console.log(data.curTop);
		    }
		});

		// Get window size
	    winH = $window.height();

	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		}

	    // Resize our slides

	    $slide2.height(winH* .05);
	  	$slideExtra.height(winH* .25);	   
	    $slideShort.height(winH*.5);
	    $slide.height(winH);
	    $slide60.height(winH*.6);
	    $slide75.height(winH*.75);
	    $slideTall.height(winH*2);
	    $slideTall2.height(winH*3);

	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));

	}

	function scrollBanner() {

  $(document).scroll(function(){
  	var scrollPos = $(this).scrollTop();
  	var s4_pos =  (scrollPos-2450)/400;
  	var s5_pos =  (scrollPos-2700)/350;
  	$('#banner-text2').css({

  		'opacity' : 1-((scrollPos-1020)/ 300)
  	});
  	$('#banner-text3').css({

  		'opacity' : 1-((scrollPos-1790)/ 300)
  	});
  	$('#banner-text4').css({
  		//1280
  		//2085
  	  'top' : (scrollPos/3)+'px',

  	  	'opacity' : 1-(s4_pos*s4_pos*s4_pos*s4_pos)
  	});
  	$('#banner-text5').css({
  		//1280
  		//2085
  	  'top' : (scrollPos/3)+'px',

  	  	'opacity' : 1-(s5_pos*s5_pos*s5_pos*s5_pos)
  	});
  	$('#banner-text11').css({
  		//1280
  		//2085
  	  'top' : (scrollPos/3)+'px',

  	  	'opacity' : 1-((scrollPos-6350)/ 250)
  	});
  	 // console.log(scrollPos);
  });
}
scrollBanner();

} )( jQuery );
