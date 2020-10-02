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

        this.markerArray = [this.marker1, this.marker2, this.marker3];
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

        console.log(this.firstMarkerSeen);
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
        }
        
    }

    





}
