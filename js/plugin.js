$(document).ready(function(){
    
    $('.carousel').carousel({

      interval: 4000
      
    });
    $('.testim').carousel({

      interval: 3000
      
    });
    //Show Color Option Div When click On The Gear
    $('.gear-check').click(function()
    {
      $('.color-option').fadeToggle();
    });
    // Change Theme Color On Click
    var colorLi = $('.color-option ul li');

    colorLi
      .eq(0).css("background-color","#E41B17").end()
      .eq(1).css("background-color","#61ff6a").end()
      .eq(2).css("background-color","#59abff").end()
      .eq(3).css("background-color","#ff39e8").end()
      .eq(4).css("background-color","#ffa83a").end()
      .eq(5).css("background-color","#ecf02e");

    colorLi.click(function(){
      $("link[href*='theme']").attr("href",$(this).attr('data-value'));
      // console.log($(this).attr('data-value'));
    });

    // Chaching The Scroll Top Element
    var scrollButton = $("#scroll-top");
    $(window).scroll(function()
    {
      $(this).scrollTop() >= 700? scrollButton.show() : scrollButton.hide();
      
      // if ($(this).scrollTop() >= 600)
      // {
      //   scrollButton.show();
      // }
      // else
      // {
      //   scrollButton.hide();
      // }
      
      });
      // Click On Button To Scroll Top
        scrollButton.click(function()
        {
          $("html,body").animate({scrollTop : 0}, 500);
    });


});


    // Loading Screen
    $(window).on("load", function()
    {
      // Shoe The Scroll
      

      // Loading Elements

      $(".loading-overlay .spinner").fadeOut(500,

        function(){

          $(this).parent().fadeOut(500,

            function(){
              $("body").css("overflow","auto");

              $(this).remove();

            });
        });
    });
    // $(window).on("load", function()
    // {
    //   // Loading Elements

    //   $(".loading-overlay, .loading-overlay .spinner").fadeOut(2000); 
    // });
    