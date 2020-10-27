/**
 * Used to perform a repeated action when an adjacent marker is detected
 * 
 * action - Main Actions Array
 * reverseActopms - Reverse Actions Array
 * isDominant - True / False value toggles the forward or backward action
 * markerIdArray - Id of the Markers to track (min 3)
 * value - If scroll is chosen, how much to scroll by
 * 
 */
class ContinuousSequenceMarkerLogic extends MarkerLogic {


    constructor(action, reverseActions, isDominant, markerIdArray, value) {
        super(action);
        this.reverseActions = reverseActions;
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


    function1() {
        for (let a of this.actions) {
            a.sendDown();
        }
        for (let a of this.actions) {
            a.sendUp();
        }
    }

    function2() {
        for (let a of this.reverseActions) {
            a.sendDown();
        }
        for (let a of this.reverseActions) {
            a.sendUp();
        }
    }


    
    initialise() {
        let initialiseMsg = "Initialising " + this.constructor.name + " Interface with "
        for (let a of this.actions) {
            initialiseMsg += a.name
        }
        initialiseMsg += " and "
        for (let a of this.reverseActions) {
            initialiseMsg += a.name
        }

        initialiseMsg += " with markers " 
        for (let a of this.markerIdArray) {
            initialiseMsg += a + ", "
        }

        console.log(initialiseMsg)



        for (let m of this.markerIdArray) {
            let markerToPush = getMarker(m)
            this.markerArray.push(markerToPush)
        }

        if (this.action == DigitalAction.scroll) DigitalAction.scroll.value = this.value;
        this.mapClockwiseAntiClockwiseFunctions();


    }

    track() {

        if(!this.firstMarkerSeen) {

            for(let m of this.markerArray) {
                if (m.present) {
                    this.firstMarkerSeen = true
                    //console.log(m + ' is seen')
                    this.oldMarker = m
                    break
                } else {
                    //console.log('markers are not seen')
                }
            }

        } else {

            //Check index 
            let index = this.markerArray.indexOf(this.oldMarker)
            //console.log('old marker number is '+ index)

            let clockwiseIndex = index+1;
            let antiClockwiseIndex = index-1;
            let trueArrayLength = this.markerArray.length-1;

            if (clockwiseIndex >  trueArrayLength) clockwiseIndex = 0;
            if (antiClockwiseIndex < 0) antiClockwiseIndex = trueArrayLength;
            let clockwiseMarker = this.markerArray[clockwiseIndex];
            let antiClockwiseMarker = this.markerArray[antiClockwiseIndex];


            if (clockwiseMarker.present) {
                this.clockwiseAction();
                //console.log('clockwise action');
                this.oldMarker = clockwiseMarker;

            } else if (antiClockwiseMarker.present) {
                this.antiClockwiseAction();
                //console.log('anticlockwise action');

                this.oldMarker = antiClockwiseMarker;
            } //else console.log('adj markers are not present')
            
        }
        
    }

    mapClockwiseAntiClockwiseFunctions() {

        if (this.isDominant) {
            this.clockwiseAction = this.function1;
            this.antiClockwiseAction = this.function2;
        }
        else {
            this.clockwiseAction = this.function2;
            this.antiClockwiseAction = this.function1;
        }
    };





}
