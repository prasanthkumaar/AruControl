const { keyboard, Key, mouse, left, right, up, down, screen } = require("@nut-tree/nut-js");
const ipcRenderer = require('electron').ipcRenderer;

let DigitalAction = {


    scroll: {

        name: 'Scroll',
        value: 30,

        sendDown: async function() {
            await mouse.scrollDown(this.value);
        },

        sendUp: async function() {
            await mouse.scrollUp(this.value);
        },

    },

    undoRedo: {

        name: 'UndoRedo',

        sendDown: () => ipcRenderer.send("UNDO"),
        sendUp: () => ipcRenderer.send("REDO")
        
    },

    zoom: {

        name: 'Zoom',

        sendDown: () => ipcRenderer.send("ZOOM_IN"),
        sendUp: () => ipcRenderer.send("ZOOM_OUT")

    },

    aKey: {
        name: "'A' Key",

        sendDown: () => ipcRenderer.send("A_KEY_DOWN"),
        sendUp: () => ipcRenderer.send("A_KEY_UP"),

    },

    sKey: {
        name: "'S' Key",

        sendDown: () => ipcRenderer.send("S_KEY_DOWN"),
        sendUp: () => ipcRenderer.send("S_KEY_UP"),

    },

    zKey: {
        name: "'Z' Key",

        sendDown: () => ipcRenderer.send("Z_KEY_DOWN"),
        sendUp: () => ipcRenderer.send("Z_KEY_UP"),

    },

    xKey: {
        name: "'X' Key",

        sendDown: () => ipcRenderer.send("X_KEY_DOWN"),
        sendUp: () => ipcRenderer.send("X_KEY_UP"),

    },

    upKey: {
        name: "'Up' Key",

        sendDown: () => ipcRenderer.send("UP_KEY_DOWN"),
        sendUp: () => ipcRenderer.send("UP_KEY_UP"),

    },

    downKey: {
        name: "'Down' Key",

        sendDown: () => ipcRenderer.send("DOWN_KEY_DOWN"),
        sendUp: () => ipcRenderer.send("DOWN_KEY_UP"),

    },

    leftKey: {
        name: "'Left' Key",

        sendDown: () => ipcRenderer.send("LEFT_KEY_DOWN"),
        sendUp: () => ipcRenderer.send("LEFT_KEY_UP"),

    },

    
    rightKey: {
        name: "'Right' Key",

        sendDown: () => ipcRenderer.send("RIGHT_KEY_DOWN"),
        sendUp: () => ipcRenderer.send("RIGHT_KEY_UP"),

    },






}



