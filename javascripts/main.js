 $(document).ready(function() {
     //Expand comment to see all the text
     $(".expand").click(function() {
         $(this).hide();
         $(".collapse").show();
         $(".comment").removeClass("ellipsis");

     });
     //collapse comment to see only one line with ellipsis

     $(".collapse").click(function() {
         $(this).hide();
         $(".expand").show();
         $(".comment").addClass("ellipsis");

     });
     $("#order-button").click(function() {
         $(this).hide();
         $("#back-button").show();
         $("#video").hide();
         $("#quote-approve").show();
     });
     $("#back-button").click(function() {
         $(this).hide();
         $("#order-button").show();
         $("#video").show();
         $("#quote-approve").hide();
         $("#quote-pay").hide();
         $("#quote-payed").hide();
     });
     $("#approve-button").click(function() {
         $("#quote-approve").hide();
         $("#waiting-approve").show();
     });
     $("#waiting-button").click(function() {
         $("#waiting-approve").hide();
         $("#quote-pay").show();
     });
     $("#pay-button").click(function() {
         $("#quote-pay").hide();
         $("#quote-payed").show();
     });

     //starting OWL carousel
     setupVideo(0);
     var owl = $('.owl-carousel');
     owl.owlCarousel({
         nav: true,
         singleItem: true,
         autoHeight: true,
         responsive: true,
         responsiveRefreshRate: 200,
         responsiveBaseWidth: window,
         margin: 5,
         responsive: {
             0: {
                 items: 1
             },
             600: {
                 items: 1
             },
             1000: {
                 items: 1
             }
         }
     })


     //create function to check the height of the comment  of each video and add ellipsis if necessary

     function checkHeight(slideIndex) {
         var comment = $("#comment_" + slideIndex);
         var commentHeight = comment.height();
         console.log(commentHeight);
         if (commentHeight > 19) {
             $('.expand').show();
             $('.collapse').hide();
             comment.addClass("ellipsis");

         } else {
             $('.expand').hide();
             $('.collapse').hide();
             $('.comment').removeClass("ellipsis");
         }
     }

     function setupVideo(slideIndex) {
         // check Height
         checkHeight(slideIndex);
         console.log("refresh");
         $('.owl-carousel').trigger('refresh.owl.carousel');
     }


     owl.on('changed.owl.carousel', function(event) {
         checkHeight(event.item.index);

     });

 });