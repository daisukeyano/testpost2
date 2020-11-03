$(function(){
  $('.slider').slick({
   centerMode: true,
   centerPadding: '25%',
   dots: true,
    responsive: [{
      breakpoint: 768,
          settings: {
            centerMode: false,
        }
      }
    ]
 });
});

