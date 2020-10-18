/**
 * Used for holding key presses when marker is detected by camera.
 * Key press is released when marker is no longer detected by camera.
 * 
 * action - Main Actions Array
 * markerIdArray - Id of the Marker to track
 */
class SingleHoldMarkerLogic extends MarkerLogic {


    constructor(actions, markerId) {
        super(actions)
        this.marker = getMarker(markerId)
        this.BUTTON_TIMEOUT = 300;
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

        if (this.count % 1 == 0) {
            if (this.marker.present) {
                
                for (let a of this.actions) {
                    a.sendDown();
                }

                //console.log(this.marker+ ' is present'+Date.now());
                this.wasKeyPressed = true;
            } else {
                if (this.wasKeyPressed == true) {

                    for (let a of this.actions) {
                        a.sendUp();
                    }
                    //console.log(this.marker+ ' is NO LONGER present'+Date.now());
                    this.wasKeyPressed = false;
                }
            }
        }
    }


}