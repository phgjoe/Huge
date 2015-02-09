jQuery('body').css('height', window.innerHeight);

jQuery('#huge').on('click tap touch', huge);


//main function that plays random audio
function huge(){
    jQuery('audio').each(function() {
        jQuery(this).get(0).pause();
    });

    randomHuge = Math.floor(Math.random() * 10) + 1;
    jQuery('.hugeaudio' + randomHuge).get(0).currentTime = 0;
    jQuery('.hugeaudio' + randomHuge).get(0).play();

    //Animation can add distances to pre-defined properties
    jQuery('#huge').find('img').animate({
        width: '-=30px',
        height: '-=39px',
        }, 100, 'swing', function() {
        // function code on animation complete
    });

    jQuery('#huge').delay(100).find('img').animate({
        width: '+=30px',
        height: '+=39px',
        }, 1000, 'easeOutElastic', function() {
        // function code on animation complete
    });

    return false;
}

//Accelerometer Stuff
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    startWatch();
}
 
var watchID;

function startWatch() {
    var previousReading = {
    x: null,
    y: null,
    z: null
  };

  var options = { frequency: 250 };  // Update acceleration every quarter second
  watchID = navigator.accelerometer.watchAcceleration(function onSuccess(acceleration) {
    var changes = {};
    var bound = 4;  // this controls the sensitivity for detecting the shake event
    // alert('Acceleration X: ' + acceleration.x + '\n' +
    //           'Acceleration Y: ' + acceleration.y + '\n' +
    //           'Acceleration Z: ' + acceleration.z + '\n' +
    //           'Timestamp: '      + acceleration.timestamp + '\n');
    if (previousReading.x !== null) {
      changes.x = Math.abs(previousReading.x, acceleration.x);
      changes.y = Math.abs(previousReading.y, acceleration.y);
    }
    if (changes.x > bound && changes.y > bound) {
      stopWatch();
      // We are relying on a hidden button with an ID of shake to be present on the Profound UI Rich Display File screen
      huge();
      setTimeout(startWatch, 3000);
    }
    previousReading = {
      x: acceleration.x,
      y: acceleration.y,
      z: acceleration.z
    }
  }, function onError() {
    alert('Some problem has occurred in reading the accelerometer.');
  }, options);
}
 
function stopWatch() {
  if (watchID) {
    navigator.accelerometer.clearWatch(watchID);
    watchID = null;
  }
}
//End Accelerometer Stuff
