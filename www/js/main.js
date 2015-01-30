jQuery('body').css('height', window.innerHeight);

jQuery('#huge').on('click tap touch', function(){

    jQuery('audio').each(function() {
        jQuery(this).get(0).pause();
    });

    randomHuge = Math.floor(Math.random() * 10) + 1;
    jQuery('.hugeaudio' + randomHuge).get(0).currentTime = 0;
    // jQuery('.hugeaudio' + randomHuge).get(0).play();
    var soundId = 'huge1';

    var my_media = new Media("/android_asset/www/"+soundId+".mp3",
        function() {
          navigator.notification.alert('Success!', alertDismissed);
        },
        function(err) {
        navigator.notification.alert('Error!', alertDismissed);
    });
    my_media.play();

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