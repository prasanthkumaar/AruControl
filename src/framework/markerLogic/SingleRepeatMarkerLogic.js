/**
 * Used for repeated pressing and releasing keys when marker is detected by camera i.e: zoom (Ctrl+/Ctrl-)
 * NOT STABLE: Pairing sendDown() and sendUp() to occur repeatedly causes lag issues
 * USE SingleHoldMarkerLogic instead
 * 
 * markerId refers to the marker id that is detected
 * action refers to the type of digital action
 */
class SingleRepeatMarkerLogic extends MarkerLogic {


    constructor(actions, markerId) {
        super(actions);
        this.marker = getMarker(markerId);

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

        if (this.count % 15 == 0) {
            if (this.marker.present) {

                for (let a of this.actions) {
                    a.sendDown();
                } 

                for (let a of this.actions) {
                    a.sendUp();
                } 
                
                //console.log(this.marker+ ' is present');
            }
        }
        
    }
}