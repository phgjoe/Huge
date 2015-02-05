jQuery('body').css('height', window.innerHeight);

jQuery('#huge').on('click tap touch', function(){

    jQuery('audio').each(function() {
        jQuery(this).get(0).pause();
    });

    randomHuge = Math.floor(Math.random() * 10) + 1;
    jQuery('.hugeaudio' + randomHuge).get(0).currentTime = 0;
    jQuery('.hugeaudio' + randomHuge).get(0).play();

    //Animation can add distances to pre-defined properties
    jQuery(this).find('img').animate({
        width: '-=30px',
        height: '-=39px',
        }, 100, 'swing', function() {
        // function code on animation complete
    });

    jQuery(this).delay(100).find('img').animate({
        width: '+=30px',
        height: '+=39px',
        }, 1000, 'easeOutElastic', function() {
        // function code on animation complete
    });

    return false;
});


var onShake = function () {
  // Code fired when a shake is detected
  alert('shake');
};
// Start watching for shake gestures and call "onShake"
shake.startWatch(onShake);
// Stop watching for shake gestures
shake.stopWatch();