const loudness = require('loudness')

/**
 * Used for performing only controlling volume
 * 
 * action - "Volume"
 * markerIdArray - Contains 2 markers. 1 stationary and 1 moving
 * 
 * "new SliderMarkerLogic("Volume", [1, 2]);"
 * 
 * 
 */
class SliderMarkerLogic extends MarkerLogic {


    constructor(action, markerIdArray) {
        super(action);

        this.markerIdArray = markerIdArray;

        this.marker1Id;
        this.marker2Id;

        this.marker1;
        this.marker2;

        this.markersAreSeen = false
        this.maxPixelDistance;

        this.degreeOfControl = 10


    }


    initialise() {

        let initialiseMsg = "Initialising " + this.constructor.name + " Interface with volume control"
        

        initialiseMsg += " with markers " 
        for (let a of this.markerIdArray) {
            initialiseMsg += a + ", "
        }

        console.log(initialiseMsg)        

        this.marker1Id = this.markerIdArray[0];
        this.marker2Id = this.markerIdArray[1];



        this.marker1 = getMarker(this.marker1Id)
        this.marker2 = getMarker(this.marker2Id)


    }

    async track() {

        if(!this.markersAreSeen) {

            //set max distance

            if (this.marker1.present && this.marker2.present) {
                
                this.markersAreSeen = true
                this.maxPixelDistance = getMarkerPair(this.marker1Id,this.marker2Id).distance

            }
        
        } else {

            //set 

            let currentDistance = getMarkerPair(this.marker1Id,this.marker2Id).distance;
            let volume = (this.maxPixelDistance - currentDistance) / this.maxPixelDistance * 100

            await loudness.setVolume(volume)
            // const vol = await loudness.getVolume()
            // console.log(vol);




            
        }

    }




}