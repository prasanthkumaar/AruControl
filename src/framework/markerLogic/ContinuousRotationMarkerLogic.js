/**
 * Used for performing a  key press when marker is rotated every x degrees.
 * If marker's rotation remains within that degree of freedom, it does not repeat the action
 * Marker needs to be rotated past the degree of freedom to activate the function again
 * 
 * action - Main Actions Array
 * reverseActopms - Reverse Actions Array
 * markerId - Id of the Marker to track
 * isDominant - True / False value toggles the forward or backward action
 * freedomInDegrees - How much can the user rotate before the next action is performed
 * value - If scroll is chosen, how much to scroll by
 * 
 * "new ContinuousRotationMarkerLogic([DigitalAction.aKey, DigitalAction.sKey], 2, true, 45, 30);"
 * 
 * 
 */
class ContinuousRotationMarkerLogic extends MarkerLogic {


    constructor(actions, reverseActions, markerId, isDominant, freedomInDegrees, value) {
        super(actions);
        this.reverseActions = reverseActions;
        this.markerId = markerId
        this.marker = getMarker(markerId);

        this.value = value;

        this.isDominant = isDominant;
        this.freedomInRadians = Math.PI/180 * freedomInDegrees;
        this.noOfSections = 2*Math.PI / this.freedomInRadians;
        this.sectionBoundArr = []

        this.currSection;
        this.clockwiseLimit;
        this.antiClockwiseLimit;

        this.clockwiseAction;
        this.antiClockwiseAction;

        

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

        initialiseMsg += "with marker " + this.markerId

        console.log(initialiseMsg)




        if (this.actions[0] == DigitalAction.scroll) DigitalAction.scroll.value = this.value;
        this.mapClockwiseAntiClockwiseFunctions();
        
        this.marker.timeout = 500;

        for (let i = 0; i <= this.noOfSections; i++) {
            let sectionLimit = (-Math.PI)+(i*this.freedomInRadians);
            this.sectionBoundArr.push(sectionLimit);
            //console.log(sectionLimit / (Math.PI/180));
        }

    }

    track() {

        //if markerIsSeen and if currSection is undefined, get clockwise and anticlockwise limits
        if (this.marker.present) {
            if (this.currSection == null) this.getLimits();
        } else this.currSection = null;

        // If current rotation passes either limits, perform the clockwise / anticlockwise actions respectively
        if (this.marker.rotation > this.antiClockwiseLimit) {
            this.antiClockwiseAction();
            //console.log('anticlockwise action');
            this.getLimits();
        } else if (this.marker.rotation < this.clockwiseLimit) {
            this.clockwiseAction();
            //console.log('clockwise action');
            this.getLimits();
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

    getLimits() {

        let rotationOfMarker = this.marker.rotation;
        //console.log("marker rotation is "+ (rotationOfMarker/(Math.PI/180)));

        for (let i = 0; i < this.sectionBoundArr.length-1; i++) { //sectionBoundArr length is always no.of section + 1
            
            let bottomLimit = this.sectionBoundArr[i]
            let topLimit = this.sectionBoundArr[i+1]
            //console.log("checking between "+ bottomLimit/(Math.PI/180)  + " and " + topLimit/(Math.PI/180));
            
            if (bottomLimit<rotationOfMarker && rotationOfMarker<topLimit) {

                this.clockwiseLimit = bottomLimit;
                this.antiClockwiseLimit = topLimit;
                this.currSection = i+1;
                //console.log("section: "+this.currSection+" clockwise limit: "+ this.clockwiseLimit/(Math.PI/180)  + " and anti-clockwise limit:" + this.antiClockwiseLimit/(Math.PI/180));


                break
            }
          
        }

    }





}