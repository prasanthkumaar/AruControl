
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
  
  let accelerate = new SingleHoldMarkerLogic(DigitalAction.zKey, 20);
  let decelerate = new SingleHoldMarkerLogic(DigitalAction.xKey, 21);
  let turnLeft = new SingleHoldMarkerLogic(DigitalAction.leftKey, 9);
  let turnRight = new SingleHoldMarkerLogic(DigitalAction.rightKey, 14);
  let superPower = new SingleTapMarkerLogic(DigitalAction.aKey, 0);
  let jump = new SingleTapMarkerLogic(DigitalAction.sKey, 0);

  // superPower = new ContinuousRotationMarkerLogic(DigitalAction.aKey, 0, true, 90, 30);



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






var keyCodes = [];

function reset() {
  keyCodes = [];
  $("#in").val("");
  $("#key-codes").html("var keyCodes = [ ];");
  $("#key-names").html("var keyNames = [ ];");
};

window.addEventListener('keydown', addKey, false)

function addKey(key) {
  console.log(key.keyCode)
  keyCodes.push(key.keyCode);
  updateOutput();
}
function updateOutput() {
  var kC = "var keyCodes = [ ";
  var kN = "var keyNames = [ ";

  var len = keyCodes.length;

  for (var i = 0; i < len; i++) {
    kC += keyCodes[i];
    kN += "'"+keyboardMap[keyCodes[i]]+"'";
    if (i !== (len - 1)) {
      kC += ", ";
      kN += ", ";
    }
  }

  kC += " ];";
  kN += " ];";

  console.log(kC, kN)
}




