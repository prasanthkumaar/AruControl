const { keyboard, Key, mouse, left, right, up, down, screen } = require("@nut-tree/nut-js");
const ipcRenderer = require('electron').ipcRenderer;

let DigitalAction = {


    scroll: {

        name: 'Scroll',
        value: 30,

        sendScrollUp: async function() {
            await mouse.scrollUp(this.value);
        },

        sendScrollDown: async function() {
            await mouse.scrollDown(this.value);
        },

    },

    undoRedo: {

        name: 'UndoRedo',

        sendUndo: () => ipcRenderer.send("UNDO"),
        sendRedo: () => ipcRenderer.send("REDO"),
        
    },

    zoom: {

        name: 'Zoom',

        sendZoomIn: () => ipcRenderer.send("ZOOM_IN"),
        sendZoomOut: () => ipcRenderer.send("ZOOM_OUT"),

    }


}



