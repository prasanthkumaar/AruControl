const loudness = require('loudness')


let detectionIsOn = false;
let arrayOfInterfaces = [];


// code written in here will be executed once when the page loads
function setup() {

  getVolume();

}

async function getVolume() {
  //await loudness.setVolume(45)
  const vol = await loudness.getVolume()
  console.log(vol);
}




function mapInterfaceToActions() {

  //UI portion  
  let contRot = new ContinuousRotationMarkerLogic(shortcuts.zoomIn, shortcuts.zoomOut, 1, true, 45, 30);
  let contSeq = new ContinuousSequenceMarkerLogic([DigitalAction.aKey], [DigitalAction.sKey], true, [1, 2, 3, 4]);
  let singleHold = new SingleHoldMarkerLogic([DigitalAction.aKey], 1);
  let singleRepeat = new SingleRepeatMarkerLogic([DigitalAction.aKey], 1);
  let singleTap = new SingleTapMarkerLogic(shortcuts.zoomIn, 1);

  arrayOfInterfaces = [singleHold];

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

};

window.addEventListener('keydown', addKey, false)

function addKey(key) {
  //console.log(key.keyCode)
  keyCodes.push(key.keyCode);
  updateOutput();
}
function updateOutput() {
  var kC = "var keyCodes = [ ";
  var kN = "var keyNames = [ ";

  var len = keyCodes.length;

  for (var i = 0; i < len; i++) {
    kC += keyCodes[i];
    kN += "'"+keycodeToDigitalAction[keyCodes[i]]+"'";
    if (i !== (len - 1)) {
      kC += ", ";
      kN += ", ";
    }
  }

  kC += " ];";
  kN += " ];";

  //console.log(kC, kN)
}




