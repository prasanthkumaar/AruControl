class DPadLogic extends MarkerLogic {


    constructor(action) {
        super(action);

        this.leftTopMarker;
        this.rightTopMarker;
        this.leftBottomMarker;
        this.rightBottomMarker;
        this.centerMarker;

        this.topBoundary;
        this.bottomBoundary;
        this.rightBoundary;
        this.leftBoundary;

        this.boundariesAreSet = false;
        this.cornerMarkersHasMoved = false;

        this.actionToExecute;

        this.previousMarkerCenter;
        this.MOVEMENT_THRESHOLD = 50;

        this.test = 0;

    }

    initialise() {

        super.initialise();

        switch (this.action) {
            // case Action.FIXED_CURSOR_MOVEMENT: this.actionToExecute = this.fixedCursorMovement; 
            //     break;
            // case Action.FREE_CURSOR_MOVEMENT: this.actionToExecute = this.freeCursorMovement;
            //     break;
            // case Action.ARROW_KEYPRESS: this.actionToExecute = this.arrowKeyPress;
            //     break;
            case DigitalAction.scroll: this.actionToExecute = this.scroll; 
                break;


        }

        //Get marker methods
        this.leftTopMarker = getMarker(11);
        this.rightTopMarker = getMarker(12);
        this.leftBottomMarker = getMarker(13);
        this.rightBottomMarker = getMarker(14);
        this.centerMarker = getMarker(10);


    }

    track() {

        //this.boundaryLogic();
        if (this.test == 0) {
            this.test++;
            console.log(this.test);

            this.setBoundaries();
        }

        // Run function to check if marker is 'activated'

        //Get center marker position
        let center = this.centerMarker.center;
        console.log(center);
        this.actionToExecute(center);


    }

    boundaryLogic(){
        //Set boundaries if they have not been set
        if (!this.boundariesAreSet && this.leftTopMarker.present) {
            this.setBoundaries();
            this.previousMarkerCenter = this.leftTopMarker.center;
        }
        else {

            //Check if top left marker has moved by a certain threshold
            const deltaX = this.leftTopMarker.center.x - this.previousMarkerCenter.x;
            const deltaY = this.leftTopMarker.center.y - this.previousMarkerCenter.y;

            if (deltaX.abs > this.MOVEMENT_THRESHOLD || deltaY.abs > this.MOVEMENT_THRESHOLD) {
                this.cornerMarkersHasMoved = true;
            }
            this.previousMarkerCenter = this.leftTopMarker.center;
        }
        
        //If threshold is exceeded, reset boundaries
        if (this.boundariesAreSet && this.cornerMarkersHasMoved && this.leftTopMarker.present) {this.setBoundaries();}

    }

    setBoundaries() {

        //Get corner marker positions and calculate boundary lines
        // const horizontalSpace = ((this.rightTopMarker.x-this.leftTopMarker.x)+(this.rightBottomMarker.x-this.leftBottomMarker.x))/6
        // this.leftBoundary = horizontalSpace/3
        // this.rightBoundary = 2*(horizontalSpace/3)

        // const verticalSpace = ((this.rightTopMarker.y-this.rightBottomMarker.y)+(this.leftTopMarker.y-this.leftBottomMarker.y))/6
        // this.bottomBoundary = verticalSpace/3
        // this.topBoundary = 2*(verticalSpace/3)

        this.rightBoundary = 400;
        this.leftBoundary = 200;
        this.topBoundary = 150;
        this.bottomBoundary = 300;

        console.log('Setting boundaries:'
        + '\nLeft Boundary: '+this.leftBoundary 
        + '\nRight boundary: ' + this.rightBoundary 
        + '\nTop Boundary: '+this.topBoundary 
        + '\nBottom Boundary: '+this.bottomBoundary);





    }

    //ACTIONS---------------------------------------------------------------------------------------------------------------------------------------


    fixedCursorMovement(center) {


        if (center.y < this.topBoundary) {

            if (center.x < this.leftBoundary) {console.log('TOP LEFT')} 
            else if (this.leftBoundary < center.x && center.x < this.rightBoundary) {console.log('TOP MIDDLE')} 
            else if (center.x > this.rightBoundary) {console.log('TOP RIGHT')}

        } else if (this.bottomBoundary > center.y && center.y > this.topBoundary) {

            console.log('yo');
            if (center.x < this.leftBoundary) {console.log('MIDDLE LEFT')} 
            else if (this.leftBoundary < center.x && center.x < this.rightBoundary) {console.log('MIDDLE MIDDLE')} 
            else if (center.x > this.rightBoundary) {console.log('MIDDLE RIGHT')}

        } else if (center.y > this.bottomBoundary) {

            if (center.x < this.leftBoundary) {console.log('BOTTOM LEFT')} 
            else if (this.leftBoundary < center.x && center.x < this.rightBoundary) {
                
                console.log('BOTTOM MIDDLE')
                DigitalAction.scroll.sendScrollDown();

            } 
            else if (center.x > this.rightBoundary) {console.log('BOTTOM RIGHT')}

        } else {console.log('OUT OF BOUNDS')}

    }

    freeCursorMovement(center) {
        
    }

    arrowKeyPress(center) {

        if (center.y < this.topBoundary) {

            if (this.leftBoundary < center.x && center.x < this.rightBoundary) {console.log('TOP MIDDLE')} 

        } else if (this.bottomBoundary > center.y && center.y > this.topBoundary) {

            console.log('yo');
            if (center.x < this.leftBoundary) {console.log('MIDDLE LEFT')} 
            else if (center.x > this.rightBoundary) {console.log('MIDDLE RIGHT')}

        } else if (center.y > this.bottomBoundary) {

            if (this.leftBoundary < center.x && center.x < this.rightBoundary) {console.log('BOTTOM MIDDLE')} 

        } else {console.log('OUT OF BOUNDS')}
        
    }



}

