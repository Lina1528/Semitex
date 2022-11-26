/*BURGER-Menu*/
$(function(){
    $('.header-burger').click(function(event){
        $('.header-burger, nav, .header-logo').toggleClass('active');
        $('body').toggleClass('lock')
    })
});


$(function() {
  $('.nav-link').click(function(event) {
      $('.header-burger, .nav').toggleClass('active');
      $('body').toggleClass('lock')
  });
});

/*Появление меню при скролле страницы*/
$(function(){
    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){
        if ( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
});

/*Наши произволители slider*/
// $(function(){
    $('.sl').slick({
        infinite: true,
        speed: 300,
        // centerMode: true,
        // variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: "<img src='assets/img/manufacturers/prev-arrow.svg' class='prev-arrow' alt='1'>",
        nextArrow: "<img src='assets/img/manufacturers/next-arrow.svg' class='next-arrow' alt='2'>",
        responsive: [
             {
              breakpoint: 1800,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 1110,
              settings: {
                dots: true,
                arrows: false,
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 910,
              settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
              }
            },
          ]
});
// });