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

// //wait for PhoneGap to load
// document.addEventListener("deviceready", loaded, false);
 
// // PhoneGap is ready
// function loaded() {
//     startWatch();
// }
 
// // Start watching the acceleration
 
// function startWatch() {
 
//     // Update acceleration every 3 seconds
//     var options = { frequency: 3000 };
 
//     watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
// }
 
// // Stop watching the acceleration
// function stopWatch() {
//     if (watchID) {
//         navigator.accelerometer.clearWatch(watchID);
//         watchID = null;
//     }
// }
 
// // Success
// function onSuccess(acceleration) {
//     var element = document.getElementById('accelerometer');
//     element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
//                         'Acceleration Y: ' + acceleration.y + '<br />' +
//                         'Acceleration Z: ' + acceleration.z + '<br />' +
//                         'Timestamp: '      + acceleration.timestamp + '<br />';
// }
 
//  // Error
// function onError() {
//     alert('onError!');
// }

//wait for PhoneGap to load
document.addEventListener("deviceready", startShaking, false);

function startShaking(){
    var myShakeEvent = new Shake({
        threshold: 15, // optional shake strength threshold
        timeout: 1000 // optional, determines the frequency of event generation
    });

    myShakeEvent.start();

    window.addEventListener('shake', shakeEventDidOccur, false);

    //function to call when shake occurs
    function shakeEventDidOccur () {

        //put your own code here etc.
        alert('shake!');
    }
}