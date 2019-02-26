 $(document).ready(function() {

     $(".expand").click(function() {
         $(this).hide();
         $(".collapse").show();
         $(".comment").removeClass("ellipsis");

     });
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
     var owl = $('.owl-carousel');
     owl.owlCarousel({
             nav: true,
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
         // Listen to owl events:

     function checkHeight(slideId) {
         var comment = $("#comment_"+slideId);
         var commentHeight = comment.height();
         if (commentHeight > 16) {
             $('.expand').show();
             $('.collapse').hide();
             comment.addClass("ellipsis");

         }else{
          $('.expand').hide();
          $('.collapse').hide();
          $('.comment').removeClass("ellipsis");
         }
     }
     checkHeight(0) ;
     owl.on('changed.owl.carousel', function(event) {
         checkHeight(event.item.index) ;
     });



 });