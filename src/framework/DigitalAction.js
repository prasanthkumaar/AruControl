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

        sendDown: () => {
            ipcRenderer.send("UNDO")
            console.log('UNDO')
        },
        sendUp: () => {
            ipcRenderer.send("REDO")
            console.log('REDO')
        }
        
    },

    zoom: {

        name: 'Zoom',

        sendDown: () => {
            ipcRenderer.send("ZOOM_IN")
            console.log('ZOOM IN')
        },
        sendUp: () => {
            ipcRenderer.send("ZOOM_OUT")
            console.log('ZOOM OUT')
        }

    },

    aKey: {
        name: "'A' Key",

        sendDown: () => {
            ipcRenderer.send("A_KEY_DOWN")
            console.log('A KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("A_KEY_UP")
            console.log('A KEY UP')
        },

    },

    sKey: {
        name: "'S' Key",

        sendDown: () => {
            ipcRenderer.send("S_KEY_DOWN")
            console.log('S KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("S_KEY_UP")
            console.log('S KEY UP')
        },

    },

    dKey: {
        name: "'D' Key",

        sendDown: () => {
            ipcRenderer.send("D_KEY_DOWN")
            console.log('D KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("D_KEY_UP")
            console.log('D KEY UP')
        },

    },

    fKey: {
        name: "'F' Key",

        sendDown: () => {
            ipcRenderer.send("F_KEY_DOWN")
            console.log('F KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F_KEY_UP")
            console.log('F KEY UP')
        },

    },

    zKey: {
        name: "'Z' Key",

        sendDown: () => {
            ipcRenderer.send("Z_KEY_DOWN")
            console.log('Z KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("Z_KEY_UP")
            console.log('Z KEY UP')
        },

    },

    xKey: {
        name: "'X' Key",

        sendDown: () => {
            ipcRenderer.send("X_KEY_DOWN")
            console.log('X KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("X_KEY_UP")
            console.log('X KEY UP')
        },

    },

    upKey: {
        name: "'Up' Key",

        sendDown: () => {
            ipcRenderer.send("UP_KEY_DOWN")
            console.log('UP KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("UP_KEY_UP")
            console.log('UP KEY UP')
        },

    },

    downKey: {
        name: "'Down' Key",

        sendDown: () => {
            ipcRenderer.send("DOWN_KEY_DOWN")
            console.log('DOWN KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("DOWN_KEY_UP")
            console.log('DOWN KEY UP')
        },

    },

    leftKey: {
        name: "'Left' Key",

        sendDown: () => {
            ipcRenderer.send("LEFT_KEY_DOWN")
            console.log('LEFT KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("LEFT_KEY_UP")
            console.log('LEFT KEY UP')
        },

    },

    
    rightKey: {
        name: "'Right' Key",

        sendDown: () => {
            ipcRenderer.send("RIGHT_KEY_DOWN")
            console.log('RIGHT KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("RIGHT_KEY_UP")
            console.log('RIGHT KEY UP')
        },

    },






}



