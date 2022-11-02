( function ( $ ) {
    $(".w-header .nav .nav-link").each(function (index, elem) {
    $(elem).click(function (e) {
        console.log("abcd")
        $(".w-header .nav .nav-link.show ").removeClass("show");
        $(elem).addClass("show");
  });
  });
  }( jQuery ) );
  //menu-mobile
$(document).ready(function () {
    $('#toggleOpen').on('click', function () {
        $('.w-header .head .menu-phone .menu .menu-list').addClass('show');
        $(this).addClass('d-none');
        $('#toggleClose').removeClass('d-none');
  
    })
    $('#toggleClose').on('click', function () {
        $(this).addClass('d-none');
        $('#toggleOpen').removeClass('d-none');
        $('.w-header .head .menu-phone .menu .menu-list').removeClass('show');
    })
  });
//w-product-details
( function ( $ ) {
    $(".w-product-details .nav-link").each(function (index, elem) {
    $(elem).click(function (e) {
        console.log("abcd")
        $(".w-product-details .nav-link.active ").removeClass("active");
        $(elem).addClass("active");
  });
  });
  }( jQuery ) );
//w-slick-slide
$('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: true, // Adds the dots on the bottom
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,//k hiện button
          }
        },
      ]
  });
  //footer
  $('.item-social-one').click(function(){
    $('.item-social-one').toggleClass('active')
    $('.dropdown-one').slideToggle('slow');
  })
  $('.item-social-two').click(function(){
    $('.item-social-two').toggleClass('active')
    $('.dropdown-two').slideToggle('slow');
  })
  $('.item-social-three').click(function(){
    $('.item-social-three').toggleClass('active')
    $('.dropdown-three').slideToggle('slow');
  })
  $('.item-social-four').click(function(){
    $('.item-social-four').toggleClass('active')
    $('.dropdown-four').slideToggle('slow');
  })