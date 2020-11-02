/**
 * Used for performing a  key press when marker is rotated every x degrees.
 * If marker's rotation remains within that degree of freedom, it does not repeat the action
 * Marker needs to be rotated past the degree of freedom to activate the function again
 * 
 * action - Main Actions Array
 * reverseActopms - Reverse Actions Array
 * markerId - Id of the Marker to track
 * isDominant - True / False value toggles the forward or backward action
 * allowance - How much can the user rotate before the clockwise / anticlockwise action is performed
 * 
 * "new ContinuousRotationMarkerLogic([DigitalAction.aKey], [DigitalAction.sKey], 2, true, 45, 30);"
 * 
 * 
 */
class ToggleRotationMarkerLogic extends MarkerLogic {


    constructor(actions, reverseActions, markerId, isDominant, allowanceInDegrees) {
        super(actions);
        this.reverseActions = reverseActions;
        this.marker = getMarker(markerId);

        this.isDominant = isDominant;

        this.clockwiseAction;
        this.antiClockwiseAction;

        this.allowanceInRadians = Math.PI/180 * allowanceInDegrees

        this.antiClockwiseLimit;
        this.clockwiseLimit;

        this.currentRotation;


        this.clockwiseFunctionPerformed = false
        this.antiClockwiseFunctionPerformed = false



        

    }

    function1() {
        for (let a of this.actions) {
            a.sendDown();
        }
        // for (let a of this.actions) {
        //     a.sendUp();
        // }
    }

    function2() {
        for (let a of this.reverseActions) {
            a.sendDown();
        }
        // for (let a of this.reverseActions) {
        //     a.sendUp();
        // }
    }

    releaseFunction() {
        for (let a of this.actions) {
            a.sendUp();
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
        console.log(initialiseMsg)

        console.log(this.marker);


        this.antiClockwiseLimit = 0 - this.allowanceInRadians
        this.clockwiseLimit = 0 + this.allowanceInRadians

        this.mapClockwiseAntiClockwiseFunctions();
        
        this.marker.timeout = 10;

        console.log(this.allowanceInRadians* 180/Math.PI)
        console.log(this.antiClockwiseLimit * 180/Math.PI);
        console.log(this.clockwiseLimit * 180/Math.PI);


    }

    track() {


        if(this.marker.present == true) {

            this.currentRotation = this.marker.rotation;

        } else {

            this.currentRotation = 0;
        }


        console.log(this.currentRotation * 180/Math.PI);

        
        // If current rotation passes either limits, perform the clockwise / anticlockwise actions respectively
        if (this.currentRotation < this.antiClockwiseLimit) {
            this.antiClockwiseAction();
            this.antiClockwiseFunctionPerformed = true
            //console.log('anticlockwise action');
        } else if (this.currentRotation > this.clockwiseLimit) {
            this.clockwiseFunctionPerformed = true
            this.clockwiseAction();
            //console.log('clockwise action');
        } else if (this.antiClockwiseLimit <this.currentRotation && this.currentRotation  < this.clockwiseLimit) {

            if (this.clockwiseFunctionPerformed == true) {
                this.releaseFunction();
                this.clockwiseFunctionPerformed = false

            } else if (this.antiClockwiseFunctionPerformed == true) {
                this.releaseFunction();
                this.antiClockwiseFunctionPerformed = false


            }



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