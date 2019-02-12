 $(document).ready(function() {
  $(".expand").click(function() {
        $(this).hide();
        $(this).parent().find(".collapse").show();
        $(this).parent().find(".comment").addClass("show");
        
     });
  $(".collapse").click(function() {
        $(this).hide();
        $(this).parent().find(".expand").show();
        $(this).parent().find(".comment").removeClass("show");
        
     });

 });