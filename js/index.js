$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
  
$( '.menu li a' ).on("click", function(){
  $('#toggle').click();
});

window.addEventListener('scroll', function(e) {
  if( $(window).scrollTop() <= 50) {
      $('.wow').removeClass('animated');
      $('.wow').removeAttr('style');
      new WOW().init();
  }
});

$(document).ready(function(){
  $( "a.scrollLink" ).click(function( event ) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
  });
});


 /* $(window).on("load",function()
     {
       $(window).scroll(function()
       {
         var windowBottom= $(this).scrollTop() + $(this).innerHeight();
         $(".new").each(function() {
           var objectBottom= $(this).offset.top + $(this).outerHeight();

           if(objectBottom < windowBottom)
           {
             //if($(this).css("opacity")==0)
             $(this).fadeTo(250,1);
           }
           else{
           //{if($(this).css("opacity")==1)
           //{
             $(this).fadeTo(250,0)
           //}
           }
         });
       }).scroll();
     });*/

    
     /*$(window).scroll(function() {
      if ($(this).scrollTop() > 250 && $(this).scrollTop() < 1250) {
        $(".new").fade(500);
      } else {
        $(".new").fadeOut(500);
      }
    });*/