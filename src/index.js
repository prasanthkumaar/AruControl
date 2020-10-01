
let detectionIsOn = false;
let arrayOfInterfaces = [];

// code written in here will be executed once when the page loads
function setup() {

}

function mapInterfaceToActions() {

  //UI portion
  // let dPadInterface = new DPadLogic(DigitalAction.scroll);
  let contSeq1 = new ContinuousSequenceMarkerLogic(DigitalAction.scroll, true, 3, 4, 5, 100)
  let contSeq2 = new ContinuousSequenceMarkerLogic(DigitalAction.zoom, true, 6, 7, 8)

  //arrayOfInterfaces.push(dPadInterface);
  arrayOfInterfaces.push(contSeq1)
  arrayOfInterfaces.push(contSeq2)

  for (let a of arrayOfInterfaces) {
      a.initialise()
  }

}

function startDetection() {
  if (detectionIsOn) {
      detectionIsOn = false
      console.log('Detection is turned off')
  } else {
      detectionIsOn = true
      console.log('Detection is turned on')
  }
}



// code written in here will be executed every frame
function update() {

  if (detectionIsOn) {
    for (let a of arrayOfInterfaces) {
        a.track();
    }

  }

}



