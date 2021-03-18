
jQuery(document).ready(function ($) {
    $('.video_item-0').click(function () {
        $('.active_video').removeClass('active_video')
        $('.video_item_main0').addClass('active_video')
    })
    $('.video_item-1').click(function () {
        $('.active_video').removeClass('active_video')
        $('.video_item_main1').addClass('active_video')
    })
    $('.video_item-2').click(function () {
        $('.active_video').removeClass('active_video')
        $('.video_item_main2').addClass('active_video')
    })
    $('.video_item-3').click(function () {
        $('.active_video').removeClass('active_video')
        $('.video_item_main3').addClass('active_video')
    })


    
// // jQuery
// $('#fullpage').fullpage({
//     lockAnchors:false,
//     navigation:true,
//     keyboardScrolling:true,
//     verticalCentered:true,

//   });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
 })


// jQuery(document).ready(function ($) {
// $(function(){
//   $("section").SnapScroll({
      
//     // Fires events

//   events:true,                   


//   eventChangeActive:"snapscroll_change-active",  


//   eventChangeVisible:"snapscroll_change-visible",  
              

  
//   });
 
// });
// });
