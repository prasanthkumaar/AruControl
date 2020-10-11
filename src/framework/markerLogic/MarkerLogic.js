class MarkerLogic {

    constructor(actions) {
        this.actions = actions;
    }

    initialise() {
        
        let initialiseMsg = "Initialising " + this.constructor.name + " Interface with "
        for (let a of this.actions) {
            initialiseMsg += a.name
        }
        console.log(initialiseMsg)
    }

    track() {}


}