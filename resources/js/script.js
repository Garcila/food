$(document).ready(function () {

  /* sticky navigation */
  $('.js--section-features').waypoint(function (direction) {
    direction === 'down' ? $('nav').addClass('sticky') : $('nav').removeClass('sticky');
  }, {
    offset: '51px;'
  });

  /* scroll on buttons */
  $('.js--scroll-to-plans').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.js--section-plans').offset().top
    }, 1000);
  });

  $('.js--scroll-to-features').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.js--section-features').offset().top
    }, 1000);
  });

  /* navigation scroll */
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  /* click logo to top */
  $('.logo-black').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.logo').offset().top
    }, 1000);
  });

  /* animations on scroll */
  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, { offset: '50%' });

  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animated slideInUp');
  }, { offset: '40%' });

  $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, { offset: '50%' });

  $('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, { offset: '40%' });

  /* mobile nav */
  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if(icon.hasClass('ion-navicon-round')){
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

});
