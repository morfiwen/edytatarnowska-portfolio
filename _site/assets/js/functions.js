$(function() {
    smoothScroll(1000);
    titleShowing();
    mobileNav();
    closeMenu();
    minimizeMenuOnScroll();
    openAswer();
    portfolioLoad();
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
