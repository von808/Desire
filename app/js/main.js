$(function () {

  $('.header__btn').on('click', function () {
    $('.rightside').removeClass('rightside-close')
  });
  $('.rightside__btn-close').on('click', function () {
    $('.rightside').addClass('rightside-close')
  });

  // $('.header__btn').on('click', function () {
  //   $('body').addClass('display-none')
  // });
  // $('.rightside__btn-close').on('click', function () {
  //   $('body').removeClass('display-none')
  // });

  if ($(window).width() < 650) {
    $('.works-path__item-2').appendTo($('.works-path__items-box'));
  }

  // $('.intro__slider').slick({
  //   dots: true,
  //   arrows: false,
  //   fade: true,
  //   autoplay: true
  // });
  $('.contact-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 10,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });
  $('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/slider-arrow-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/slider-arrow-right.svg" alt="arrow right"></button>',
  });

  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
  });

})