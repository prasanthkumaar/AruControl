class ContinuousSequenceMarkerLogic extends MarkerLogic {


    constructor(action, isDominant, marker1, marker2, marker3, value) {
        super(action);
        this.isDominant = isDominant;
        this.value = value;


        this.clockwiseAction;
        this.antiClockwiseAction;

        this.marker1 = getMarker(marker1);
        this.marker2 = getMarker(marker2);
        this.marker3 = getMarker(marker3);

        this.wasMarkerPresent = false;
        this.markerButton;
      
        this.count = 0;
        this.BUTTON_TIMEOUT = 10;



    }

    initialise() {
        super.initialise();

        switch (this.action) {
            case DigitalAction.scroll: 

                DigitalAction.scroll.value = this.value;

                if (this.isDominant) {
                    this.clockwiseAction = DigitalAction.scroll.sendScrollUp;
                    this.antiClockwiseAction = DigitalAction.scroll.sendScrollDown;
                }
                else {
                    this.clockwiseAction = DigitalAction.scroll.sendScrollDown;
                    this.antiClockwiseAction = DigitalAction.scroll.sendScrollUp;
                }
                
                break;
            case DigitalAction.zoom:

                if (this.isDominant) {
                    this.clockwiseAction = DigitalAction.zoom.sendZoomIn;
                    this.antiClockwiseAction = DigitalAction.zoom.sendZoomOut;
                } else {
                    this.clockwiseAction = DigitalAction.zoom.sendZoomOut;
                    this.antiClockwiseAction = DigitalAction.zoom.sendZoomIn;
                }
                break;
            default:
                break;
        }


    }

    track() {
        
        if (this.marker1.present) {
            
            this.clockwiseAction();

        }

        //Write marker logic
        //console.log(this.marker1.center);

        // if (this.marker1.present) {
        //     if (this.marker1.center.y < 150) {
        //         this.clockwiseAction();
        //     } else if (this.marker1.center.y > 300) {
        //         this.antiClockwiseAction();
        //     }
        // }

//         if (this.marker1.present) {

//             if (!this.wasMarkerPresent) {

//                 // New detection of marker
//                 this.wasMarkerPresent = true;

//                 // Send a key down event to the main process
//                 this.clockwiseAction();
//                 console.log('clockwise action');

//             } else {

//                 //Old detection of marker
//                 this.count = 0;

//             }

//         }



//         // When marker is lost from frame for x frames, 
//         // register that marker is no longer present
//         if (!this.marker1.present && this.wasMarkerPresent) {
            
//             this.count++;
//             console.log(this.count);

//             if (this.count>this.BUTTON_TIMEOUT) {

//             this.count = 0;
//             this.wasMarkerPresent = false;

//             // Send a key up event to the main process
//             this.antiClockwiseAction();
//             console.log('key up');

//             }

//         }



        
    }

    





}
