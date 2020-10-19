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
        this.shortcutList = [shortcuts.HoldA]
        this.customInput = ['Keypress: ']

        //For mapping
        this.selectedMarkerId = 1
        this.selectedActions = [this.shortcutList[0]]

    }

    createNew(id) {

        let newButtonHoldModule = new ButtonHoldModule();
        newButtonHoldModule.id = id


        return newButtonHoldModule
    }

    map() {

        singleHold = new SingleHoldMarkerLogic([DigitalAction.fKey], 12);
        return singleHold

    }

}







