/**
 * Used for repeated pressing and releasing keys when marker is detected by camera i.e: zoom (Ctrl+/Ctrl-)
 * NOT STABLE: Pairing sendDown() and sendUp() to occur repeatedly causes lag issues
 * USE SingleHoldMarkerLogic instead
 * 
 * markerId refers to the marker id that is detected
 * action refers to the type of digital action
 */
class SingleRepeatMarkerLogic extends MarkerLogic {


    constructor(action, marker) {
        super(action);
        this.marker = getMarker(marker);

        this.count = 0;
        this.wasMarkerPresent = false;
        this.BUTTON_TIMEOUT = 15;


    }



    initialise() {
        super.initialise();

    }

    track() {

        //Insert marker logic
        this.count++;

        if (this.count % 30 == 0) {
            if (this.marker.present) {
                this.action.sendDown();
                this.action.sendUp();
                console.log(this.marker+ ' is present');
            }
        }
        
    }
}