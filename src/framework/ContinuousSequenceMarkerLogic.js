/**
 * Used to perform a repeated action
 */
class ContinuousSequenceMarkerLogic extends MarkerLogic {


    constructor(action, isDominant, markerIdArray, value) {
        super(action);
        this.isDominant = isDominant;
        this.value = value;


        this.clockwiseAction;
        this.antiClockwiseAction;

        this.markerIdArray = markerIdArray;
        this.markerArray = [];
        this.firstMarkerSeen = false;

        this.wasMarkerPresent = false;
        this.markerButton;
      
        this.count = 0;
        this.BUTTON_TIMEOUT = 10;

        this.currentMarker;
        this.oldMarker;

        this.currentIndex;
        this.oldIndex;



    }

    
    initialise() {
        super.initialise();

        for (let m of this.markerIdArray) {
            let markerToPush = getMarker(m)
            this.markerArray.push(markerToPush)
        }

        if (this.action == DigitalAction.scroll) DigitalAction.scroll.value = this.value;

        this.mapClockwiseAntiClockwiseFunctions(this.action.sendUp, this.sendDown);

    }

    track() {

        if(!this.firstMarkerSeen) {

            for(let m of this.markerArray) {
                if (m.present) {
                    this.firstMarkerSeen = true
                    console.log(m + ' is seen')
                    this.oldMarker = m
                    break
                } else {
                    console.log('markers are not seen')
                }
            }

        } else {

            //Check index 
            let index = this.markerArray.indexOf(this.oldMarker)
            console.log('old marker number is '+ index)

            //++
            let clockwiseIndex = index+1;
            let antiClockwiseIndex = index-1;
            let trueArrayLength = this.markerArray.length-1;

            if (clockwiseIndex >  trueArrayLength) clockwiseIndex = 0;
            if (antiClockwiseIndex < 0) antiClockwiseIndex = trueArrayLength;
            let clockwiseMarker = this.markerArray[clockwiseIndex];
            let antiClockwiseMarker = this.markerArray[antiClockwiseIndex];


            if (clockwiseMarker.present) {
                this.clockwiseAction();
                console.log('clockwise action');
                this.oldMarker = clockwiseMarker;

            } else if (antiClockwiseMarker.present) {
                this.antiClockwiseAction();
                console.log('anticlockwise action');

                this.oldMarker = antiClockwiseMarker;
            } //else console.log('adj markers are not present')
            
        }
        
    }

    mapClockwiseAntiClockwiseFunctions(function1, function2) {

        if (this.isDominant) {
            this.clockwiseAction = function1;
            this.antiClockwiseAction = function2;
        }
        else {
            this.clockwiseAction = function2;
            this.antiClockwiseAction = function1;
        }
    };




}
