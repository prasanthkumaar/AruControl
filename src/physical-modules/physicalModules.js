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

        //For mapping
        this.selectedMarkerId = 1
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


class ContinuousRotationModule extends PhysicalModule {

    constructor() {
        super()

        //For UI
        this.id = 0
        this.type = 'ContinuousRotation'
        this.name = 'Knob'
        this.appShortcuts = null
        this.customInput = ['Clockwise Action: ', 'Acticlockwise Action:']
        this.numberOfMarkers = 1

        //For mapping
        this.selectedMarkerId = 2
        this.selectedClockwiseActions = []
        this.selectedAnticlockwiseActions = []

    }

    createNew(id, appShortcuts) {

        let newContinuousRotationModule = new ContinuousRotationModule();
        newContinuousRotationModule.id = id
        newContinuousRotationModule.appShortcuts = appShortcuts

        return newContinuousRotationModule
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







