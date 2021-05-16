$('.flowing-scroll').on('click', function() {
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if (dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({
          scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 90 // скорость прокрутки
      );
    }
    return false;
  });

  $(document).ready(function(){
        $('#hed').show(900)
      });
  $(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop()>120){
        $('#top').fadeIn(1300)
      }else{
        $('#top').fadeOut(700)
      }
    });
  });
  $(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop()>270){
        $('#top1').slideDown(2000)
      }
      else{
        $('#top1').slideUp(1000)
      }
    });
  });