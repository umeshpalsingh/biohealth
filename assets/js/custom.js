var swiper = new Swiper(".testimonial", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".homeSlider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 $(document).ready(function () {

    $('.description-tab ul li a').click(function () {
    $('.description-tab ul li a').removeClass('active');
    $(this).addClass('active');
    var tagid = $(this).data('tag');
    $('.description-content').removeClass('active').addClass('hide');
    $('#' + tagid).addClass('active').removeClass('hide');
    });
    
    });
   
  
    
 $(document).ready(function () {

  $('.infromation-tab a').click(function () {
  $('.infromation-tab a').removeClass('active');
  $(this).addClass('active');
  var tagid = $(this).data('tag');
  $('.information-tab-content').removeClass('active').addClass('hide');
  $('#' + tagid).addClass('active').removeClass('hide');
  });
  
  });
 