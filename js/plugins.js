/*global $, JQuery , alert*/
$(document).ready(function () {
    "use strict";

   // active nav bar links

    $('.navbar .nav li a').on('click',function(){

    $(this).parent().addClass('active').siblings().removeClass('active');

    });

    // start count up
    $('.number').counterUp({
          delay: 20,
          time: 1500
    });

    // start PopUp
    var myPopUp = $('.signup-popup'),
        myPopUp2 = $('.login-popup');

    // sing up popUp
    $('.signup-link').on('click', function () {
        myPopUp.fadeIn(500);
    });
    myPopUp.on('click', function () {
        $(this).fadeOut(500);
    });

    $('.signup-popup .signup-content').on('click' , function(e){
        e.stopPropagation();
    });

    // login popUp
    $('.login-link').on('click', function () {
        myPopUp2.fadeIn(500);
    });
    myPopUp2.on('click', function () {
        $(this).fadeOut(500);
    });
    $('.login-popup .login-content').on('click' , function(e){
        e.stopPropagation();
    });

    //end PopUps


    // start navbar scrolled changed it style
    $(window).scroll(function(){

        if ($(window).scrollTop () >= 1500) {

            $('.scrollUp').show();
        }
        else{
            $('.scrollUp').hide();
        }

        });

        //scroll up
        var scrolling = $('.scrollUp');

        scrolling.on('click', function () {

            $('html , body').animate({

            scrollTop: 0
                },1000)
            });

    // edit position of navbar item

    if ( ( $(window).width() > 768) & ($(window).width() <= 991))  {

        $('.navbar-nav').removeClass('navbar-right').addClass('navbar-center');
    }
    else {
        // $('.navbar-nav').removeClass('navbar-center').addClass('navbar-right');

    }

    // collapsed code
    $('.left-content h4').on('click', function () {
        var as = $(this);
        // console.log($(this).data('target'));
        var collapseId = $(this).data('target');
         $(collapseId).on('shown.bs.collapse', function(){
            as.find('i').removeClass('fa-plus').addClass('fa-minus');
        }).on('hidden.bs.collapse', function(){
            as.find('i').removeClass("fa-minus").addClass("fa-plus");
        });
        // console.log( $(collapseId).find('i'));

    });




    //
    $('.job-content .right-content .top-right .clasify h6 i.fa-times-circle').on('click' , function (){

      $(this).parent().hide();
    });
        // video

        // video.height(body.height());
        $(window).scroll(function(){

        if ($(window).scrollTop() >= 700){

              $('#myVideo').fadeOut(500);
        }
        else {
          $('#myVideo').fadeIn(500);
        }
      });




/// add active class
$('.signup-popup .signup-content > a, .login-popup .login-content > a').on('click', function (e) {

    $(this).addClass('selected').siblings().removeClass('selected');
});

$("body").niceScroll();

// range slider
$("#example_id").ionRangeSlider({
    type: "double",
    min: 1990,
    max: 2018,
    from: 1995,
    to: 2015
});

});
