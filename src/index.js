
let detectionIsOn = false;
let arrayOfInterfaces = [];

// code written in here will be executed once when the page loads
function setup() {

}

function mapInterfaceToActions() {

  //UI portion
  // let dPadInterface = new DPadLogic(DigitalAction.scroll);
  //let contSeq1 = new ContinuousSequenceMarkerLogic(DigitalAction.scroll, true, 3, 4, 5, 100)
  // let contSeq2 = new ContinuousSequenceMarkerLogic(DigitalAction.zoom, true, [11, 15, 3, 7])
  
  //let accelerate = new SingleHoldMarkerLogic(DigitalAction.zKey, 20);
  //let decelerate = new SingleHoldMarkerLogic(DigitalAction.xKey, 21);
  //let turnLeft = new SingleHoldMarkerLogic(DigitalAction.leftKey, 22);
  // let turnRight = new SingleHoldMarkerLogic(DigitalAction.rightKey, 23);
  let superPower = new SingleRepeatMarkerLogic(DigitalAction.aKey, 24);
  // let jump = new SingleTapMarkerLogic(DigitalAction.sKey, 25);


  //For mario kart
  // arrayOfInterfaces = [accelerate, decelerate, turnLeft, turnRight, superPower, jump];
  arrayOfInterfaces = [superPower];

  //arrayOfInterfaces.push(dPadInterface);
  //arrayOfInterfaces.push(contSeq1)
  // arrayOfInterfaces.push(contSeq2)

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



