/**
 * Used for performing a single key press when marker is detected by camera.
 * If marker is continually seen by camera, it does not repeat the action
 * Marker needs to be removed from view for at least 5 frames before it can pressed to activate the function again
 * 
 * action - Main Actions Array
 * markerIdArray - Id of the Marker to track
 * 
 */
class SingleTapMarkerLogic extends MarkerLogic {


    constructor(actions, markerId) {
        super(actions);
        this.marker = getMarker(markerId);
        this.wasMarkerPresent = false;

        this.count = 0;
        this.BUTTON_RESTART = 5;

    }



    initialise() {
        super.initialise();

    }

    track() {

        if (this.marker.present) {

            this.count = 0;
            //console.log('marker present!');

            
            if (!this.wasMarkerPresent) {
                // console.log('sending action!');
                this.wasMarkerPresent = true;

                for (let a of this.actions) {
                    a.sendDown();
                }

                for (let a of this.actions) {
                    a.sendUp();
                }
            }

        } else {

            if (this.wasMarkerPresent) {
                this.count++;
                //console.log(this.count);
            }

        }
      
        if (this.wasMarkerPresent && !this.marker.present && this.count >= this.BUTTON_RESTART) {
          this.wasMarkerPresent = false;
        }
      
        
    }






}