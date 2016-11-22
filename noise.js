$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    var key1 = $(this).html();
    var audio1 = "#" + key1 + "Audio";
    var v1 = $(audio1)[0];
    v1.load();
    v1.play();
  });

  $(document).keydown(function(event) {
    var key2 = event.key;
    var audio2 = "#" + key2 + "Audio";
    var v2 = $(audio2)[0];
    v2.load();
    v2.play();
  });
});
