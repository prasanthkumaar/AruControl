const loudness = require('loudness')


let detectionIsOn = false;
let arrayOfInterfaces = [];


// code written in here will be executed once when the page loads
function setup() {

  //getVolume();

}

async function getVolume() {
  //await loudness.setVolume(45)
  const vol = await loudness.getVolume()
  console.log(vol);
}




function mapInterfaceToActions() {
  //Test
  // let contRot = new ContinuousRotationMarkerLogic(shortcuts.zoomIn, shortcuts.zoomOut, 1, true, 45, 30);
  // let contSeq = new ContinuousSequenceMarkerLogic([DigitalAction.aKey], [DigitalAction.sKey], true, [1, 2, 3, 4]);
  // let singleHold = new SingleHoldMarkerLogic([DigitalAction.aKey], 1);
  // let singleRepeat = new SingleRepeatMarkerLogic([DigitalAction.aKey], 1);
  // let singleTap = new SingleTapMarkerLogic(shortcuts.zoomIn, 1);

  //OSU!
  let dHold = new SingleHoldMarkerLogic([DigitalAction.dKey], 23);
  let fHold = new SingleHoldMarkerLogic([DigitalAction.fKey], 14);
  let jHold = new SingleHoldMarkerLogic([DigitalAction.jKey], 19);
  let kHold = new SingleHoldMarkerLogic([DigitalAction.kKey], 15);

  arrayOfInterfaces = [dHold, fHold, jHold, kHold];

  //AE
  // let pageDown = new SingleTapMarkerLogic([DigitalAction.pageDownKey], 5);
  // let pageUp = new SingleTapMarkerLogic([DigitalAction.pageUpKey], 1);
  // let f9 = new SingleTapMarkerLogic([DigitalAction.f9Key], 23);
  // let undoRedo = new ContinuousSequenceMarkerLogic(shortcuts.undo, shortcuts.redo, true, [18, 16, 17]);
  // let zoom = new ContinuousRotationMarkerLogic(shortcuts.zoomIn, shortcuts.zoomOut, 3, true, 45);
  // let scrub = new ContinuousSequenceMarkerLogic(shortcuts.scrubRight, shortcuts.scrubLeft, true, [11, 7]);
  // arrayOfInterfaces = [pageDown, pageUp, undoRedo, zoom, scrub];


  for (let a of arrayOfInterfaces) {
      a.initialise()
  }

}

function startDetection() {

  console.log(arrayOfInterfaces)

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




