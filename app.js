const { app, BrowserWindow, ipcMain } = require('electron');
 


//The ipcMain module is an Event Emitter. When used in the main process, 
//it handles asynchronous and synchronous messages sent from a renderer process (web page). 
//Messages sent from a renderer will be emitted to this module.

const path = require('path');
const url = require('url');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200, // Set these to whatever is convenient
    height: 600,

    // Needed to include communication between render and main processes
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.setMenu(null);
  // mainWindow.webContents.openDevTools(); // Uncomment to open the DevTools automatically

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/src/index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  app.quit();
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// Example code for sending messages here from the main process
const { keyboard, Key, mouse, left, right, up, down, screen } = require("@nut-tree/nut-js");
// Attach listener in the main process with the given ID



 



ipcMain.on("LEFT_CONTROL_KEY_DOWN", async (event,arg) => {
  keyboard.pressKey(Key.LeftControl)
})
ipcMain.on("LEFT_CONTROL_KEY_UP", async (event,arg) => {
  keyboard.releaseKey(Key.LeftControl)
})

ipcMain.on("LEFT_SHIFT_KEY_DOWN", async (event,arg) => {
  keyboard.pressKey(Key.LeftShift)
})
ipcMain.on("LEFT_SHIFT_KEY_UP", async (event,arg) => {
  keyboard.releaseKey(Key.LeftShift)
})

ipcMain.on("EQUAL_KEY_DOWN", async (event,arg) => {
  keyboard.pressKey(Key.Equal)
})
ipcMain.on("EQUAL_KEY_UP", async (event,arg) => {
  keyboard.releaseKey(Key.Equal)
})

ipcMain.on("MINUS_KEY_DOWN", async (event,arg) => {
  keyboard.pressKey(Key.Minus)
})
ipcMain.on("MINUS_KEY_UP", async (event,arg) => {
  keyboard.releaseKey(Key.Minus)
})


ipcMain.on("A_KEY_DOWN", async (event,arg) => {
  keyboard.pressKey(Key.A)
})
ipcMain.on("A_KEY_UP", async (event,arg) => {
  keyboard.releaseKey(Key.A)
})
ipcMain.on("S_KEY_DOWN", async (event,arg) => {
  keyboard.pressKey(Key.S)
})
ipcMain.on("S_KEY_UP", async (event,arg) => {
  keyboard.releaseKey(Key.S)
})
ipcMain.on("Z_KEY_DOWN", async (event,arg) => {
  keyboard.pressKey(Key.Z)
})
ipcMain.on("Z_KEY_UP", async (event,arg) => {
  keyboard.releaseKey(Key.Z)
})
ipcMain.on("X_KEY_DOWN", async (event,arg) => {
  keyboard.pressKey(Key.X)
})
ipcMain.on("X_KEY_UP", async (event,arg) => {
  keyboard.releaseKey(Key.X)
})


ipcMain.on("UP_KEY_DOWN", async (event,arg) => {
  keyboard.pressKey(Key.Up)
})
ipcMain.on("UP_KEY_UP", async (event,arg) => {
  keyboard.releaseKey(Key.Up)
})
ipcMain.on("DOWN_KEY_DOWN", async (event,arg) => {
  keyboard.pressKey(Key.Down)
})
ipcMain.on("DOWN_KEY_UP", async (event,arg) => {
  keyboard.releaseKey(Key.Down)
})
ipcMain.on("LEFT_KEY_DOWN", async (event,arg) => {
  keyboard.pressKey(Key.Left)
})
ipcMain.on("LEFT_KEY_UP", async (event,arg) => {
  keyboard.releaseKey(Key.Left)
})
ipcMain.on("RIGHT_KEY_DOWN", async (event,arg) => {
  keyboard.pressKey(Key.Right)
})
ipcMain.on("RIGHT_KEY_UP", async (event,arg) => {
  keyboard.releaseKey(Key.Right)
})



