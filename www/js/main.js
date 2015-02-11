jQuery(document).ready(function() {

  jQuery('body').css('height', window.innerHeight);

  jQuery('#huge').on('click tap touch', huge);  

});

//main function that plays random audio
function huge(){
    jQuery('audio').each(function() {
        jQuery(this).get(0).pause();
    });

    var randomHuge = Math.floor(Math.random() * 10) + 1;
    jQuery('.hugeaudio' + randomHuge).get(0).currentTime = 0;
    // alert('here');
    jQuery('.hugeaudio' + randomHuge).get(0).play();

    //Animation can add distances to pre-defined properties
    jQuery('#huge').find('img').animate({
        width: '-=30px',
        height: '-=39px'
        }, 100, 'swing', function() {
        // function code on animation complete
    });

    jQuery('#huge').delay(100).find('img').animate({
        width: '+=30px',
        height: '+=39px'
        }, 1000, 'easeOutElastic', function() {
        // function code on animation complete
    });

    return false;
}