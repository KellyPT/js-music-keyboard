$(document).ready( function() {
  //testing for one key stroke
  $('.instrument').on('click', 'button', function(event) {
    var text = $(this).html();
    var audio = "#" + text + "Audio";
    var v = $(audio)[0];
    v.play();

    // var audioId = text + "Audio";
    // var audio = document.getElementbyId(audioId);
    // audio.load();
    // audio.play();

    // var v = $('#bAudio')[0];
    // console.log(v); // retrieve the first audio file
    // console.log(this);
    // v.play(); // play the file
  });

  $(document).keydown(function(event) {
    // console.log(event);
    var key = event.key;
    // console.log(text);
    // if (event.key == text) {
    // var audioId = key + "Audio";
    // // console.log(audioId);
    // var audio = document.getElementbyId(audioId);
    // audio.load();
    // audio.play();
    // }
    // var audio = "#" + key + "Audio";
    // var v = $(audio)[0];
    // v.play();

    var audioId = key + "Audio";
    var audio2 = document.getElementById(audioId);
    audio2.load();
    audio2.play();
  });
});
