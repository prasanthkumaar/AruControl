/**
 * Used for performing a single key press when marker is detected by camera.
 * If marker is continually seen by camera, it does not repeat the action
 * Marker needs to be removed from view for at least 5 frames before it can pressed to activate the function again
 * 
 * markerId refers to marker id that is detected
 * action refers to the type of digital action to perform
 */
class SingleTapMarkerLogic extends MarkerLogic {


    constructor(action, markerId) {
        super(action);
        this.marker = getMarker(markerId);
        this.wasMarkerPresent = false;

        this.count = 0;
        this.BUTTON_RESTART = 5;

    }



    initialise() {
        super.initialise();

    }

    track() {
      
        // if (this.marker.present) {

        //     if (this.count == 0) {

        //         this.action.sendDown();
        //         this.action.sendUp();

        //     }

        //     this.count++;
            
        // }

        // if (this.count == this.BUTTON_RESTART) this.count=0

        if (this.marker.present) {

            this.count = 0;
            //console.log('marker present!');

            
            if (!this.wasMarkerPresent) {
                console.log('sending action!');
                this.wasMarkerPresent = true;
                this.action.sendDown();
                this.action.sendUp();
            }

        } else {

            if (this.wasMarkerPresent) {
                this.count++;
                console.log(this.count);
            }

        }
      
        if (this.wasMarkerPresent && !this.marker.present && this.count >= this.BUTTON_RESTART) {
          this.wasMarkerPresent = false;
        }
      
        
    }






}