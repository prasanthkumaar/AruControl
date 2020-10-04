/**
 * Used for repeated pressing and releasing keys when marker is detected by camera i.e: zoom (Ctrl+/Ctrl-)
 * 
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

        if (this.count % 20 == 0) {
            if (this.marker.present) {
                this.action.sendDown();
                this.action.sendUp();
                console.log(this.marker+ ' is present');
            }
        }


        // if (this.marker.present) {

        //     this.count = 0;
            
        //     if (!this.wasMarkerPresent) {
        //         this.wasMarkerPresent = true;
        //         console.log('pressing and releasing key');
        //         this.action.sendDown();
        //         this.action.sendUp();
        //     }

        // } else {
            
        //     if (this.wasMarkerPresent) this.count++;
        // }
      
        // if (this.wasMarkerPresent && !this.marker.present && this.count >= this.BUTTON_TIMEOUT) {
        //   this.wasMarkerPresent = false;
        // }
        
    }






}