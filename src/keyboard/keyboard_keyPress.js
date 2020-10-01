
function KeyboardKeyPress() {
    
  let wasMarkerPresent = false;
  let markerButton;

  let count = 0;
  const BUTTON_TIMEOUT = 10;

  const keyUp = {
      type: 'KEY_UP',
    };
    
  const keyDown = {
      type: 'KEY_DOWN',
  };


  this.initialise = (markerNumber) => {

    markerButton = getMarker(markerNumber);
    console.log("Marker is initialised for key press 'a'");

  }


  this.detect = () => {

    if (markerButton.present) {
      ipcRenderer.send('replicate-input', keyDown);
    }

    // if (markerButton.present) {

    //   if (!wasMarkerPresent) {

    //     // New detection of marker
    //     wasMarkerPresent = true;

    //     // Send a key down event to the main process
    //     ipcRenderer.send('replicate-input', keyDown);
    //     console.log('key down');

    //   } else {

    //     //Old detection of marker
    //     count = 0;

    //   }

    // }



    // // When marker is lost from frame for x frames, 
    // // register that marker is no longer present
    // if (!markerButton.present && wasMarkerPresent) {
      
    //   count++;
    //   console.log(count);

    //   if (count>BUTTON_TIMEOUT) {

    //     count = 0;
    //     wasMarkerPresent = false;

    //     // Send a key up event to the main process
    //     ipcRenderer.send('replicate-input', keyUp);
    //     console.log('key up');

    //   }

    // }

  }
    
  
}
