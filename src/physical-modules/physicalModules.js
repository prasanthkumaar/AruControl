class PhysicalModule {
    constructor() {
    }

    createNew() {}

    map() {}
}

class ButtonHoldModule extends PhysicalModule {

    constructor() {
        super()

        //For UI
        this.id = 0
        this.type = 'ButtonHold'
        this.name = 'Button (Hold)'
        this.appShortcuts = null
        this.customInput = ['Keypress: ']
        this.numberOfMarkers = 1
        this.detectionLogic = "../src/img/detectionlogic/LongHold.gif"
        this.headerImagePng = "../src/img/modules_png/button.png"
        this.detectionLogicText = "Button activates action once when marker is present"

        //For mapping
        this.selectedMarkerId = 10
        this.selectedActions = []

    }

    createNew(id, appShortcuts) {

        let newButtonHoldModule = new ButtonHoldModule();
        newButtonHoldModule.id = id
        newButtonHoldModule.appShortcuts = appShortcuts


        return newButtonHoldModule
    }

    map() {

        return new SingleHoldMarkerLogic(this.selectedActions, this.selectedMarkerId);
        

    }

}

class ButtonTapModule extends PhysicalModule {

    constructor() {
        super()

        //For UI
        this.id = 0
        this.type = 'ButtonTap'
        this.name = 'Button (Tap)'
        this.appShortcuts = null
        this.customInput = ['Keypress: ']
        this.numberOfMarkers = 1
        this.detectionLogic = "../src/img/detectionlogic/appear.gif"
        this.headerImagePng = "../src/img/modules_png/button.png"
        this.detectionLogicText = "Button continually activates action when marker is present"

        
        //For mapping
        this.selectedMarkerId = 5
        this.selectedActions = []

    }

    createNew(id, appShortcuts) {

        let newButtonTapModule = new ButtonTapModule();
        newButtonTapModule.id = id
        newButtonTapModule.appShortcuts = appShortcuts


        return newButtonTapModule
    }

    map() {

        return new SingleTapMarkerLogic(this.selectedActions, this.selectedMarkerId);

    }

}

class SwitchModule extends PhysicalModule {

    constructor() {
        super()

        //For UI
        this.id = 0
        this.type = 'Switch'
        this.name = 'Switch'
        this.appShortcuts = null
        this.customInput = ['Left Action: ', 'Right Action:']
        this.numberOfMarkers = 2
        this.detectionLogic = "../src/img/detectionlogic/toggle.gif"
        this.headerImagePng = "../src/img/modules_png/toggle.png"
        this.detectionLogicText = "Switch activates either action depending on marker shown"


        //For mapping
        this.selectedMarkerId = [1,2]
        this.selectedClockwiseActions = []
        this.selectedAnticlockwiseActions = []

    }

    createNew(id, appShortcuts) {

        let newSwitchModule = new SwitchModule();
        newSwitchModule.id = id
        newSwitchModule.appShortcuts = appShortcuts


        return newSwitchModule
    }

    map() {

        return [new SingleTapMarkerLogic(this.selectedClockwiseActions, this.selectedMarkerId[1]), new SingleTapMarkerLogic(this.selectedAnticlockwiseActions, this.selectedMarkerId[0])];

    }

}


class ToggleRotationModule extends PhysicalModule {

    constructor() {
        super()

        //For UI
        this.id = 0
        this.type = 'ToggleRotation'
        this.name = 'Knob'
        this.appShortcuts = null
        this.customInput = ['Clockwise Action: ', 'Acticlockwise Action:']
        this.numberOfMarkers = 1
        this.detectionLogic = "../src/img/detectionlogic/rotate.gif"
        this.headerImagePng = "../src/img/modules_png/knob.png"
        this.detectionLogicText = "Knob activates either action when marker rotation passes the threshold"


        //For mapping
        this.selectedMarkerId = 2
        this.selectedClockwiseActions = []
        this.selectedAnticlockwiseActions = []

    }

    createNew(id, appShortcuts) {

        let newToggleRotationModule = new ToggleRotationModule();
        newToggleRotationModule.id = id
        newToggleRotationModule.appShortcuts = appShortcuts

        return newToggleRotationModule
    }

    map() {

        return new ToggleRotationMarkerLogic(this.selectedClockwiseActions, this.selectedAnticlockwiseActions, this.selectedMarkerId, true, 25);

    }

}


class ContinuousSequenceScrollModule extends PhysicalModule {

    constructor() {
        super()

        //For UI
        this.id = 0
        this.type = 'ContinuousSequenceScroll'
        this.name = 'Scroll'
        this.appShortcuts = null
        this.customInput = ['Clockwise Action: ', 'Acticlockwise Action:']
        this.numberOfMarkers = 3
        this.detectionLogic = "../src/img/detectionlogic/continue.gif"
        this.headerImagePng = "../src/img/modules_png/scroll.png"
        this.detectionLogicText = "Scroll activates action once, every time a marker is shown"


        //For mapping
        this.selectedMarkerId = [1, 2, 3]
        this.selectedClockwiseActions = []
        this.selectedAnticlockwiseActions = []

    }

    createNew(id, appShortcuts) {

        let newContinuousSequenceScrollModule = new ContinuousSequenceScrollModule();
        newContinuousSequenceScrollModule.id = id
        newContinuousSequenceScrollModule.appShortcuts = appShortcuts


        return newContinuousSequenceScrollModule
    }

    map() {

        return new ContinuousSequenceMarkerLogic(this.selectedClockwiseActions, this.selectedAnticlockwiseActions, true, this.selectedMarkerId);
        
    }

}


class ContinuousSequenceDialModule extends PhysicalModule {

    constructor() {
        super()

        //For UI
        this.id = 0
        this.type = 'ContinuousSequenceDial'
        this.name = 'Dial'
        this.appShortcuts = null
        this.customInput = ['Clockwise Action: ', 'Acticlockwise Action:']
        this.numberOfMarkers = 3
        this.detectionLogic = "../src/img/detectionlogic/continue.gif"
        this.headerImagePng = "../src/img/modules_png/dial.png"
        this.detectionLogicText = "Dial activates action once, every time a marker is shown"



        //For mapping
        this.selectedMarkerId = [1, 2, 3]
        this.selectedClockwiseActions = []
        this.selectedAnticlockwiseActions = []

    }

    createNew(id, appShortcuts) {

        let newContinuousSequenceDialModule = new ContinuousSequenceDialModule();
        newContinuousSequenceDialModule.id = id
        newContinuousSequenceDialModule.appShortcuts = appShortcuts


        return newContinuousSequenceDialModule
    }

    map() {

        return new ContinuousSequenceMarkerLogic(this.selectedClockwiseActions, this.selectedAnticlockwiseActions, true, this.selectedMarkerId);
        
    }

}

class SliderModule extends PhysicalModule {

    constructor() {
        super()

        //For UI
        this.id = 0
        this.type = 'Slider'
        this.name = 'Slider'
        this.appShortcuts = null
        this.customInput = []
        this.numberOfMarkers = 2
        this.detectionLogic = "../src/img/detectionlogic/displace.gif"
        this.headerImagePng = "../src/img/modules_png/slider.png"
        this.detectionLogicText = "In the Slider, distance between the markers are mapped to the volume of the system"



        //For mapping
        this.selectedMarkerId = [1, 2]
    }

    createNew(id, appShortcuts) {

        let newSliderModule = new SliderModule();
        newSliderModule.id = id
        newSliderModule.appShortcuts = appShortcuts


        return newSliderModule
    }

    map() {

        return new SliderMarkerLogic("Volume", [1, 2]);
        
    }

}







