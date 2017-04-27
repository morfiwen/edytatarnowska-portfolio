$(function() {
    smoothScroll(1000);
    titleShowing();
    mobileNav();
    closeMenu();
    minimizeMenuOnScroll();
    openAswer();
    portfolioLoad();
    portfolioShow();
    aboutShow();
    workShow();
    contactShow();
});

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );

    if(target.length) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: target.offset().top - 45
      }, duration);
    }
  });
}

function titleShowing() {
  $('.header-title, .header-cta').addClass('is-showing').stop().delay(500).queue(function(){});
}

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle-wrap, .mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle-wrap, .mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

function closeMenu() {
  $('.mobile-nav a').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
  });
}

function minimizeMenuOnScroll() {
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > 10) {
      $("nav, .mobile-nav-toggle-wrap").removeClass("large").addClass("small");
    } else {
      $("nav, .mobile-nav-toggle-wrap").removeClass("small").addClass("large");
    }
  });
}

function openAswer() {
  $('.open-answer').on('click', function () {
    var $this = $(this);
    var offerDivId = $(this).attr('data-open-div');
    var $offerDivId = $("#" + offerDivId);

    if ($this.hasClass('is-open')) {
      $this.removeClass('is-open');
      $offerDivId.removeClass('is-open');
    } else {
      $('.open-answer, .open-answer-div').removeClass('is-open');
      $this.addClass('is-open');
      $offerDivId.addClass('is-open');
    }
  });
}

function portfolioLoad() {
  $('.portfolio-open').on('click', function () {
    var $this = $(this);
    var offerDivId = $(this).attr('data-open-div');
    var $offerDivId = $("#" + offerDivId);

    if ($this.hasClass('is-open')) {
      $this.removeClass('is-open');
      $offerDivId.removeClass('is-open');
    } else {
      $('.portfolio-open, .portfolio-load-div').removeClass('is-open');
      $this.addClass('is-open');
      $offerDivId.addClass('is-open');
    }
  });
}
function portfolioShow() {
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.portfolio-container').offset().top - ($(window).height() /1.3)) {
      $('.portfolio-container .portfolio-wrap').each(function(i){
        setTimeout(function(){
          $('.portfolio-container .portfolio-wrap').eq(i).addClass('is-showing');
        }, 250 * (i+1));
      });
    }
  });
}
function aboutShow() {
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('#about').offset().top - ($(window).height() /1.5)) {
      $('#about .slide-in').each(function(i){
        setTimeout(function(){
          $('#about .slide-in').eq(i).addClass('is-showing');
        }, 250 * (i+1));
      });
    }
  });
}
function workShow() {
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('#work').offset().top - ($(window).height() /1.5)) {
      $('#work .slide-in').each(function(i){
        setTimeout(function(){
          $('#work .slide-in').eq(i).addClass('is-showing');
        }, 250 * (i+1));
      });
    }
  });
}
function contactShow() {
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('#contact').offset().top - ($(window).height() /1.5)) {
      $('#contact .slide-in').each(function(i){
        setTimeout(function(){
          $('#contact .slide-in').eq(i).addClass('is-showing');
        }, 350 * (i+1));
      });
    }
  });
}
