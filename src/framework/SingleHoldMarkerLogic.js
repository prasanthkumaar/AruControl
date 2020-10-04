/**
 * Used for holding key presses when marker is detected by camera.
 * Key press is released when marker is no longer detected by camera.
 * 
 * markerId refers to marker id that is detected
 * action refers to the type of digital action to perform
 */
class SingleHoldMarkerLogic extends MarkerLogic {


    constructor(action, markerId) {
        super(action)
        this.marker = getMarker(markerId)
        this.BUTTON_TIMEOUT = 500;
        this.count = 0;

        this.wasKeyPressed = false;


    }



    initialise() {
        super.initialise();
        this.marker.timeout = this.BUTTON_TIMEOUT;

    }

    track() {

        this.count++;

        //Marker logic runs every 15 frames to prevent clogging the system

        if (this.count % 15 == 0) {
            if (this.marker.present) {
                this.action.sendDown();
                // console.log(this.marker+ ' is present');
                this.wasKeyPressed = true;
            } else {
                if (this.wasKeyPressed == true) {
                    this.action.sendUp();
                    // console.log(this.marker+ ' is NO LONGER present');
                    this.wasKeyPressed = false;
                }
            }
        }
    }


}