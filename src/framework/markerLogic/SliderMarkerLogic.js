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
        this.marker1;
        this.marker2;

        this.markersAreSeen = false
        this.maxPixelDistance;

        this.degreeOfControl = 10


    }


    initialise() {

        super.initialise()
        this.marker1 = getMarker(1)
        this.marker2 = getMarker(2)






    }

    track() {

        if(!this.markersAreSeen) {

            if (this.marker1.present && this.marker2.present) {
                
                this.markersAreSeen = true
                this.maxPixelDistance = getMarkerPair(1,2).distance

                console.log('wohoo')
                console.log('maxPixelDistance'+ this.maxPixelDistance)

            }
        
        } else {

            let currentDistance = getMarkerPair(1,2).distance;

            console.log("current dist:" +currentDistance)

            let volume = (this.maxPixelDistance - currentDistance) / this.maxPixelDistance * 100

            console.log("volume: "+volume)

            // await loudness.setVolume(45)
            // const vol = await loudness.getVolume()
            // console.log(vol);




            
        }

    }




}