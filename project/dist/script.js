$( document ).ready(function() {
    $(".nav-link").click(function(){
      if($(this).hasClass("nav-selected")){
        $(this).removeClass("nav-selected");
      }
      else{
        $("ul > li > a.nav-link").removeClass("nav-selected");
        $(this).addClass("nav-selected");
      }
    });
});