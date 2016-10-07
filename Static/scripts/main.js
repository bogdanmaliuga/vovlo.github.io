$(document).ready(function() {

    var h = $(window).height();
    var w = $(window).width();
    if (w < 961) {
        $('#nav-drop-items-id').removeClass('nav-drop-items');
        $('#nav-drop-items-id').addClass('nav-list-items');
        $('#nav-drop-item-service').removeClass('nav-drop-item');
        $('#nav-drop-item-service').addClass('nav-drop-list-item');
        $('#nav-drop-item-uslugi').removeClass('nav-drop-item');
        $('#nav-drop-item-uslugi').addClass('nav-drop-list-item');
        $('#nav-drop-item-about').removeClass('nav-drop-item');
        $('#nav-drop-item-about').addClass('nav-drop-list-item');
        $('.nav-drop-container').css('overflow-y','auto');
    }
    else if(w>960){
      $('#nav-drop-items-id').addClass('nav-drop-items');
      $('#nav-drop-items-id').removeClass('nav-list-items');
      $('#nav-drop-item-service').addClass('nav-drop-item');
      $('#nav-drop-item-service').removeClass('nav-drop-list-item');
      $('#nav-drop-item-uslugi').addClass('nav-drop-item');
      $('#nav-drop-item-uslugi').removeClass('nav-drop-list-item');
      $('#nav-drop-item-about').addClass('nav-drop-item');
      $('#nav-drop-item-about').removeClass('nav-drop-list-item');
    }
    $( window ).resize(function(){
        var w1 = $(window).width();
      console.log(w1);
      if (w1 < 961) {
          $('#nav-drop-items-id').removeClass('nav-drop-items');
          $('#nav-drop-items-id').addClass('nav-list-items');
          $('#nav-drop-item-service').removeClass('nav-drop-item');
          $('#nav-drop-item-service').addClass('nav-drop-list-item');
          $('#nav-drop-item-uslugi').removeClass('nav-drop-item');
          $('#nav-drop-item-uslugi').addClass('nav-drop-list-item');
          $('#nav-drop-item-about').removeClass('nav-drop-item');
          $('#nav-drop-item-about').addClass('nav-drop-list-item');
          $('.nav-drop-container').css('overflow-y','auto');
      }
      else if(w1>960){
        $('#nav-drop-items-id').addClass('nav-drop-items');
        $('#nav-drop-items-id').removeClass('nav-list-items');
        $('#nav-drop-item-service').addClass('nav-drop-item');
        $('#nav-drop-item-service').removeClass('nav-drop-list-item');
        $('#nav-drop-item-uslugi').addClass('nav-drop-item');
        $('#nav-drop-item-uslugi').removeClass('nav-drop-list-item');
        $('#nav-drop-item-about').addClass('nav-drop-item');
        $('#nav-drop-item-about').removeClass('nav-drop-list-item');
      }
    });

});
