/**
 * Used for performing a  key press when marker is rotated every x degrees.
 * If marker's rotation remains within that degree of freedom, it does not repeat the action
 * Marker needs to be rotated past the degree of freedom to activate the function again
 * 
 * markerId refers to marker id that is detected
 * action refers to the type of digital action to perform
 */
class ContinuousRotationMarkerLogic extends MarkerLogic {


    constructor(action, markerId, isDominant, freedomInDegrees, value) {
        super(action);
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



    initialise() {
        super.initialise();

        if (this.action == DigitalAction.scroll) DigitalAction.scroll.value = this.value;
        this.mapClockwiseAntiClockwiseFunctions(this.action.sendUp, this.action.sendDown);
        
        this.marker.timeout = 500;

        for (let i = 0; i <= this.noOfSections; i++) {
            let sectionLimit = (-Math.PI)+(i*this.freedomInRadians);
            this.sectionBoundArr.push(sectionLimit);
            console.log(sectionLimit / (Math.PI/180));
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
            console.log('anticlockwise action');
            this.getLimits();
        } else if (this.marker.rotation < this.clockwiseLimit) {
            this.clockwiseAction();
            console.log('clockwise action');
            this.getLimits();
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

    getLimits() {

        let rotationOfMarker = this.marker.rotation;
        console.log("marker rotation is "+ (rotationOfMarker/(Math.PI/180)));

        for (let i = 0; i < this.sectionBoundArr.length-1; i++) { //sectionBoundArr length is always no.of section + 1
            
            let bottomLimit = this.sectionBoundArr[i]
            let topLimit = this.sectionBoundArr[i+1]
            console.log("checking between "+ bottomLimit/(Math.PI/180)  + " and " + topLimit/(Math.PI/180));
            
            if (bottomLimit<rotationOfMarker && rotationOfMarker<topLimit) {

                this.clockwiseLimit = bottomLimit;
                this.antiClockwiseLimit = topLimit;
                this.currSection = i+1;
                console.log("section: "+this.currSection+" clockwise limit: "+ this.clockwiseLimit/(Math.PI/180)  + " and anti-clockwise limit:" + this.antiClockwiseLimit/(Math.PI/180));


                break
            }
          
        }

    }





}