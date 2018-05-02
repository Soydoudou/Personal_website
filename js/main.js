(function($) {
  "use strict";
  $(window).on("load", function() { 
    $("#status").fadeOut(); 
    $("#preloader").delay(450).fadeOut("slow"); 

    $('.grid').masonry({
      itemSelector: '.grid-item'
      
    });    
  });


  $(document).ready(function(){  

    //active menu
    $(document).on("scroll", onScroll);
 
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
 
      $('a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');
 
      var target = this.hash;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });

    
    //scroll js
    smoothScroll.init({
      selector: '[data-scroll]', 
      selectorHeader: '[data-scroll-header]', 
      speed: 500, 
      easing: 'easeInOutCubic', 
      updateURL: true, 
      offset: 0, 
      callback: function ( toggle, anchor ) {} 
    });

    //menu
    var bodyEl = document.body,
    content = document.querySelector( '.content-wrap' ),
    openbtn = document.getElementById( 'open-button' ),
    closebtn = document.getElementById( 'close-button' ),
    isOpen = false;

    function inits() {
      initEvents();
    }

    function initEvents() {
      openbtn.addEventListener( 'click', toggleMenu );
      if( closebtn ) {
        closebtn.addEventListener( 'click', toggleMenu );
      }

      
      content.addEventListener( 'click', function(ev) {
        var target = ev.target;
        if( isOpen && target !== openbtn ) {
          toggleMenu();
        }
      } );
    }

    function toggleMenu() {
      if( isOpen ) {
        classie.remove( bodyEl, 'show-menu' );
      }
      else {
        classie.add( bodyEl, 'show-menu' );
      }
      isOpen = !isOpen;
    }

    inits();


    //typed js
    $(".typed").typed({
        strings: ["My Name is Dou", "I'm a Web Designer", "Love Simplicity"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });
      $(".typed1").typed({
        strings: ["Rippl is a Robot", "It Improves Teamwork", "It is Useful"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });
    $(".typed5").typed({
        strings: ["Telie is a Robot", "A Telepresence Design", "It's Fun and Useful"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });
      $(".typed2").typed({
        strings: ["It is a Web Extension", "It Helps Users See", "It Is Simple"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });
    $(".typed3").typed({
        strings: ["It is a PC game", "Ersatz is a little thief", "It Is Fun"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });
    $(".typed4").typed({
        strings: ["I Love Observing", "I Love Thinking", "I Love Drawing"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });
    $(".typed6").typed({
        strings: ["It is an iPad App", "It Provides Finance Services", "It is Informative"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });
    $(".typed7").typed({
        strings: ["It is an iPhone App", "It Helps You Transfer Tickets", "It is Simple"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });
        $(".typed8").typed({
        strings: ["It is an iPhone App", "It Helps You Relax", "It is Simple"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });

    //owl carousel
    $('.owl-carousel').owlCarousel({
      autoPlay: 3000, 
 
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,1],
      itemsMobile : [479,1],

      // CSS Styles
      baseClass : "owl-carousel",
      theme : "owl-theme"
    });

    $('.owl-carousel2').owlCarousel({
      autoPlay: 3000, 
 
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,1],
      itemsMobile : [479,1],
      autoPlay : false,

      // CSS Styles
      baseClass : "owl-carousel",
      theme : "owl-theme"
    });

    //contact
    $('input').blur(function() {

      
      if ($(this).val())
        $(this).addClass('used');
      else
        $(this).removeClass('used');
    });

    //pop up porfolio
    $('.portfolio-image li a').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
      // other options
    });
    
    //Skill
    jQuery('.skillbar').each(function() {
      jQuery(this).appear(function() {
        jQuery(this).find('.count-bar').animate({
          width:jQuery(this).attr('data-percent')
        },3000);
        var percent = jQuery(this).attr('data-percent');
        jQuery(this).find('.count').html('<span>' + percent + '</span>');
      });
    }); 

  
  });
  
    
  //header
  function inits() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector(".for-sticky");
        if (distanceY > shrinkOn) {
            classie.add(header,"opacity-nav");
        } else {
            if (classie.has(header,"opacity-nav")) {
                classie.remove(header,"opacity-nav");
            }
          }
      });
    }

  window.onload = inits();

  //nav-active
  function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.menu-list a').each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr("href"));
      if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('.menu-list a').removeClass("active");
        currentLink.addClass("active");
      }
      else{
        currentLink.removeClass("active");
      }
    });
  }

})(jQuery);