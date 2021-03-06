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


const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
       let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }


$(function() {
  $(function() {
      var $header = $('#top-head');
      $('#nav-toggle').click(function(){
          $header.toggleClass('open');
      });
      $('.header__list__item').click(function(){
        $header.toggleClass('open');
    });
  });
});