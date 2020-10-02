const { keyboard, Key, mouse, left, right, up, down, screen } = require("@nut-tree/nut-js");
const ipcRenderer = require('electron').ipcRenderer;

let DigitalAction = {


    scroll: {

        name: 'Scroll',
        value: 30,

        sendScrollUp: async function() {
            // ipcRenderer.send('replicate-input', this.scrollUp);
            await mouse.scrollUp(this.value);

        },

        sendScrollDown: async function() {
            // ipcRenderer.send('replicate-input', this.scrollDown);
            await mouse.scrollDown(this.value);

        },

    },

    undoRedo: {

        
    },

    zoom: {

        sendZoomIn: () => ipcRenderer.send("ZOOM_IN"),
        sendZoomOut: () => ipcRenderer.send("ZOOM_OUT"),

    }


}



