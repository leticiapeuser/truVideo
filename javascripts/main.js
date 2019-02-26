 $(document).ready(function() {

     $(".expand").click(function() {
         $(this).hide();
         $(this).parent().find(".collapse").show();
         $(this).parent().find(".comment").removeClass("ellipsis");

     });
     $(".collapse").click(function() {
         $(this).hide();
         $(this).parent().find(".expand").show();
         $(this).parent().find(".comment").addClass("ellipsis");

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

     function checkHeight() {
         var comment = $(".active").find(".comment");
         var commentHeight = comment.height();
         console.log(comment.height());
         if (commentHeight > 16) {
             $('.expand').show();
             $('.comment').addClass("ellipsis");

         }else{
          $('.expand').hide();
          $('.comment').removeClass("ellipsis");
         }
     }
     checkHeight() ;
     owl.on('changed.owl.carousel', function(event) {
         checkHeight() ;
     });



 });