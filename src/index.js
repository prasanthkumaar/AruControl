const ipcRenderer = require('electron').ipcRenderer;

// Key event example objects
const keyUp = {
  type: 'KEY_UP',
};

const keyDown = {
  type: 'KEY_DOWN',
};

let wasMarkerPresent = false;
const BUTTON_TIMEOUT = 100;
let buttonTimer = BUTTON_TIMEOUT;
let markerButton;

// code written in here will be executed once when the page loads
function setup() {
  setupAppCanvas();
  markerButton = getMarker(0);
}

let lasttime = Date.now();
// code written in here will be executed every frame
function update() {
  const currentTime = Date.now();
  const delta = currentTime - lasttime;
  lasttime = currentTime;

  buttonTimer -= delta;

  // This is the logic for a single key press using marker 0
  if (markerButton.present) {
    buttonTimer = BUTTON_TIMEOUT;
    if (!wasMarkerPresent) {
      wasMarkerPresent = true;

      // Send a key down event to the main process
      ipcRenderer.send('replicate-input', keyDown);
    }
  }

  if (wasMarkerPresent && !markerButton.present && buttonTimer <= 0) {
    wasMarkerPresent = false;

    // Send a key up event to the main process
    ipcRenderer.send('replicate-input', keyUp);
  }
}

// setupAppCanvas() function will initialize #app-canvas.
// if you intend to use #app-canvas, call this function in setup()
let canvas;
let ctx;
let dpr;
let appWidth;
let appHeight;

function setupAppCanvas() {
  canvas = document.querySelector("#app-canvas");
  dpr = window.devicePixelRatio || 1;

  appWidth = window.innerWidth * dpr;
  appHeight = window.innerHeight * dpr;
  console.log("appWidth =", appWidth, " appHeight =", appHeight);

  canvas.width = appWidth;
  canvas.height = appHeight;
  
  ctx = canvas.getContext("2d");
}

