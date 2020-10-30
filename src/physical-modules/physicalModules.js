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
        this.detectionLogic = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
        this.headerImagePng = "../src/img/modules_png/button.png"

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
        this.headerImagePng = "../src/img/modules_png/button.png"

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
        this.headerImagePng = "../src/img/modules_png/toggle.png"


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
        this.headerImagePng = "../src/img/modules_png/knob.png"


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
        this.headerImagePng = "../src/img/modules_png/scroll.png"


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
        this.headerImagePng = "../src/img/modules_png/dial.png"


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
        this.headerImagePng = "../src/img/modules_png/slider.png"


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







