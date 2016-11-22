var playSound = function(key) {
  var audio = "#" + key + "Audio";
  var sound = $(audio)[0];
  sound.load();
  sound.play();
};

$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    var key1 = $(this).html();
    playSound(key1);
  });

  $(document).keydown(function(event) {
    var key2 = event.key;
    playSound(key2);
  });
});
