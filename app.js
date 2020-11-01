const { app, BrowserWindow, ipcMain } = require('electron');
 


//The ipcMain module is an Event Emitter. When used in the main process, 
//it handles asynchronous and synchronous messages sent from a renderer process (web page). 
//Messages sent from a renderer will be emitted to this module.

const path = require('path');
const url = require('url');

const startPage = '/src/startPage.html'
const cameraPage = '/src/cameraPage.html'

let index = '/src/controlPage.html'



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1050, // Set these to whatever is convenient
    height: 701,
    minWidth: 1050,
    minHeight: 701,




    // Needed to include communication between render and main processes
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.setMenu(null);

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, index),
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

ipcMain.on('load-page', (event, arg) => {
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, arg),
    protocol: 'file:',
    slashes: true,
  }));
});

ipcMain.on("ALERT", async (event,arg) => {
  console.log("TESTEST")
  alert(arg)
}) 


// Example code for sending messages here from the main process
const { keyboard, Key, mouse, left, right, up, down, screen } = require("@nut-tree/nut-js");

// In keyboard.class.js, I have set the keyboard delay to 0 Ms
// Attach listener in the main process with the given ID
keyboard.config.autoDelayMs = 1;

ipcMain.on("SPACE_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Space)}) 
ipcMain.on("SPACE_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Space)}) 

ipcMain.on("ESCAPE_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Escape)}) 
ipcMain.on("ESCAPE_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Escape)}) 

ipcMain.on("TAB_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Tab)}) 
ipcMain.on("TAB_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Tab)}) 

ipcMain.on("LEFTALT_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.LeftAlt)}) 
ipcMain.on("LEFTALT_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.LeftAlt)}) 

ipcMain.on("LEFTCONTROL_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.LeftControl)}) 
ipcMain.on("LEFTCONTROL_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.LeftControl)}) 

ipcMain.on("RIGHTALT_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.RightAlt)}) 
ipcMain.on("RIGHTALT_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.RightAlt)}) 

ipcMain.on("RIGHTCONTROL_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.RightControl)}) 
ipcMain.on("RIGHTCONTROL_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.RightControl)}) 

ipcMain.on("LEFTSHIFT_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.LeftShift)}) 
ipcMain.on("LEFTSHIFT_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.LeftShift)}) 

ipcMain.on("LEFTSUPER_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.LeftSuper)}) 
ipcMain.on("LEFTSUPER_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.LeftSuper)}) 

ipcMain.on("RIGHTSHIFT_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.LeftShift)}) 
ipcMain.on("RIGHTSHIFT_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.LeftShift)}) 

ipcMain.on("RIGHTSUPER_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.LeftSuper)}) 
ipcMain.on("RIGHTSUPER_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.LeftSuper)}) 

ipcMain.on("F1_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.F1)}) 
ipcMain.on("F1_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.F1)}) 

ipcMain.on("F2_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.F2)}) 
ipcMain.on("F2_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.F2)}) 

ipcMain.on("F3_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.F3)})
ipcMain.on("F3_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.F3)}) 

ipcMain.on("F4_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.F4)})
ipcMain.on("F4_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.F4)}) 

ipcMain.on("F5_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.F5)})
ipcMain.on("F5_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.F5)}) 

ipcMain.on("F6_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.F6)})
ipcMain.on("F6_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.F6)}) 

ipcMain.on("F7_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.F7)})
ipcMain.on("F7_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.F7)}) 

ipcMain.on("F8_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.F8)})
ipcMain.on("F8_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.F8)}) 

ipcMain.on("F9_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.F9)})
ipcMain.on("F9_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.F9)}) 

ipcMain.on("F10_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.F10)})
ipcMain.on("F10_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.F10)}) 

ipcMain.on("F11_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.F11)})
ipcMain.on("F11_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.F11)}) 

ipcMain.on("F12_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.F12)})
ipcMain.on("F12_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.F12)}) 

ipcMain.on("NUM0_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Num0)})
ipcMain.on("NUM0_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Num0)}) 

ipcMain.on("NUM1_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Num1)})
ipcMain.on("NUM1_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Num1)}) 

ipcMain.on("NUM2_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Num2)})
ipcMain.on("NUM2_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Num2)}) 

ipcMain.on("NUM3_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Num3)})
ipcMain.on("NUM3_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Num3)}) 

ipcMain.on("NUM4_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Num4)})
ipcMain.on("NUM4_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Num4)}) 

ipcMain.on("NUM5_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Num5)})
ipcMain.on("NUM5_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Num5)}) 

ipcMain.on("NUM6_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Num6)})
ipcMain.on("NUM6_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Num6)}) 

ipcMain.on("NUM7_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Num7)})
ipcMain.on("NUM7_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Num7)}) 

ipcMain.on("NUM8_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Num8)})
ipcMain.on("NUM8_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Num8)}) 

ipcMain.on("NUM9_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Num9)})
ipcMain.on("NUM9_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Num9)}) 


ipcMain.on("A_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.A)})
ipcMain.on("A_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.A)}) 

ipcMain.on("B_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.B)})
ipcMain.on("B_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.B)}) 

ipcMain.on("C_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.C)})
ipcMain.on("C_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.C)}) 

ipcMain.on("D_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.D)})
ipcMain.on("D_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.D)}) 

ipcMain.on("E_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.E)})
ipcMain.on("E_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.E)}) 

ipcMain.on("F_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.F)})
ipcMain.on("F_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.F)}) 

ipcMain.on("G_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.G)})
ipcMain.on("G_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.G)}) 

ipcMain.on("H_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.H)})
ipcMain.on("H_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.H)}) 

ipcMain.on("I_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.I)})
ipcMain.on("I_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.I)}) 

ipcMain.on("J_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.J)})
ipcMain.on("J_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.J)}) 

ipcMain.on("K_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.K)})
ipcMain.on("K_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.K)}) 

ipcMain.on("L_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.L)})
ipcMain.on("L_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.L)}) 

ipcMain.on("M_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.M)})
ipcMain.on("M_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.M)}) 

ipcMain.on("N_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.N)})
ipcMain.on("N_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.N)}) 

ipcMain.on("O_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.O)})
ipcMain.on("O_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.O)}) 

ipcMain.on("P_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.P)})
ipcMain.on("P_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.P)}) 

ipcMain.on("Q_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Q)})
ipcMain.on("Q_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Q)}) 

ipcMain.on("R_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.R)})
ipcMain.on("R_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.R)}) 

ipcMain.on("S_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.S)})
ipcMain.on("S_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.S)}) 

ipcMain.on("T_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.T)})
ipcMain.on("T_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.T)}) 

ipcMain.on("U_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.U)})
ipcMain.on("U_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.U)}) 

ipcMain.on("V_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.V)})
ipcMain.on("V_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.V)}) 

ipcMain.on("W_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.W)})
ipcMain.on("W_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.W)}) 

ipcMain.on("X_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.X)})
ipcMain.on("X_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.X)}) 

ipcMain.on("Y_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Y)})
ipcMain.on("Y_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Y)}) 

ipcMain.on("Z_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Z)})
ipcMain.on("Z_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Z)}) 


ipcMain.on("GRAVE_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Grave)})
ipcMain.on("GRAVE_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Grave)}) 

ipcMain.on("MINUS_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Minus)})
ipcMain.on("MINUS_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Minus)}) 

ipcMain.on("EQUAL_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Equal)})
ipcMain.on("EQUAL_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Equal)}) 

ipcMain.on("BACKSPACE_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Backspace)})
ipcMain.on("BACKSPACE_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Backspace)}) 

ipcMain.on("LEFTBRACKET_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.LeftBracket)})
ipcMain.on("LEFTBRACKET_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.LeftBracket)}) 

ipcMain.on("RIGHTBRACKET_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.RightBracket)})
ipcMain.on("RIGHTBRACKET_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.RightBracket)}) 

ipcMain.on("BACKSLASH_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Backslash)})
ipcMain.on("BACKSLASH_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Backslash)}) 

ipcMain.on("SEMICOLON_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Semicolon)})
ipcMain.on("SEMICOLON_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Semicolon)}) 

ipcMain.on("QUOTE_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Quote)})
ipcMain.on("QUOTE_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Quote)}) 

ipcMain.on("RETURN_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Return)})
ipcMain.on("RETURN_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Return)}) 

ipcMain.on("COMMA_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Comma)})
ipcMain.on("COMMA_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Comma)}) 

ipcMain.on("PERIOD_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Period)})
ipcMain.on("PERIOD_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Period)}) 

ipcMain.on("SLASH_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Slash)})
ipcMain.on("SLASH_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Slash)}) 

ipcMain.on("LEFT_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Left)})
ipcMain.on("LEFT_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Left)}) 

ipcMain.on("UP_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Up)})
ipcMain.on("UP_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Up)}) 

ipcMain.on("RIGHT_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Right)})
ipcMain.on("RIGHT_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Right)}) 

ipcMain.on("DOWN_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Down)})
ipcMain.on("DOWN_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Down)}) 

ipcMain.on("PRINT_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Print)})
ipcMain.on("PRINT_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Print)}) 

ipcMain.on("PAUSE_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Pause)})
ipcMain.on("PAUSE_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Pause)}) 

ipcMain.on("INSERT_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Insert)})
ipcMain.on("INSERT_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Insert)}) 

ipcMain.on("DELETE_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Delete)})
ipcMain.on("DELETE_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Delete)}) 

ipcMain.on("HOME_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Home)})
ipcMain.on("HOME_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Home)}) 

ipcMain.on("END_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.End)})
ipcMain.on("END_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.End)}) 

ipcMain.on("PAGEUP_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.PageUp)})
ipcMain.on("PAGEUP_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.PageUp)}) 

ipcMain.on("PAGEDOWN_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.PageDown)})
ipcMain.on("PAGEDOWN_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.PageDown)}) 

ipcMain.on("ADD_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Add)})
ipcMain.on("ADD_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Add)}) 

ipcMain.on("SUBTRACT_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Subtract)})
ipcMain.on("SUBTRACT_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Subtract)}) 

ipcMain.on("MULTIPLY_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Multiply)})
ipcMain.on("MULTIPLY_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Multiply)}) 

ipcMain.on("DIVIDE_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Divide)})
ipcMain.on("DIVIDE_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Divide)}) 

ipcMain.on("DECIMAL_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Decimal)})
ipcMain.on("DECIMAL_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Decimal)}) 

ipcMain.on("ENTER_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.Enter)})
ipcMain.on("ENTER_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.Enter)}) 

ipcMain.on("NUMPAD0_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.NumPad0)})
ipcMain.on("NUMPAD0_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.NumPad0)}) 

ipcMain.on("NUMPAD1_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.NumPad1)})
ipcMain.on("NUMPAD1_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.NumPad1)}) 

ipcMain.on("NUMPAD2_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.NumPad2)})
ipcMain.on("NUMPAD2_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.NumPad2)}) 

ipcMain.on("NUMPAD3_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.NumPad3)})
ipcMain.on("NUMPAD3_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.NumPad3)}) 

ipcMain.on("NUMPAD4_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.NumPad4)})
ipcMain.on("NUMPAD4_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.NumPad4)}) 

ipcMain.on("NUMPAD5_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.NumPad5)})
ipcMain.on("NUMPAD5_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.NumPad5)}) 

ipcMain.on("NUMPAD6_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.NumPad6)})
ipcMain.on("NUMPAD6_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.NumPad6)}) 

ipcMain.on("NUMPAD7_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.NumPad7)})
ipcMain.on("NUMPAD7_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.NumPad7)}) 

ipcMain.on("NUMPAD8_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.NumPad8)})
ipcMain.on("NUMPAD8_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.NumPad8)}) 

ipcMain.on("NUMPAD9_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.NumPad9)})
ipcMain.on("NUMPAD9_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.NumPad9)}) 


ipcMain.on("CAPSLOCK_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.CapsLock)})
ipcMain.on("CAPSLOCK_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.CapsLock)}) 

ipcMain.on("SCROLLLOCK_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.ScrollLock)})
ipcMain.on("SCROLLLOCK_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.ScrollLock)}) 

ipcMain.on("NUMLOCK_KEY_DOWN", async (event,arg) => {keyboard.pressKey(Key.NumLock)})
ipcMain.on("NUMLOCK_KEY_UP", async (event,arg) => {keyboard.releaseKey(Key.NumLock)}) 
