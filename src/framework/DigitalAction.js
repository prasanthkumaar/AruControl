const { keyboard, Key, mouse, left, right, up, down, screen } = require("@nut-tree/nut-js");
const ipcRenderer = require('electron').ipcRenderer;

const DigitalAction = {


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

        name: 'Zoom',

        keyDown: {
            type: 'KEY_DOWN'
        },

        keyUp: {
            type: 'KEY_UP'
        },


        sendZoomIn: function() {
            console.log('ZOOM IN');
            ipcRenderer.send('replicate-input', {type: 'KEY_DOWN'});

        },

        sendZomOut: function() {
            console.log('ZOOM OUT');
            ipcRenderer.send('replicate-input', {type: 'KEY_UP'});
        },



        //
        
        sendZoomIn: async function() {
            await keyboard.pressKey(Key.A);
            await screen.on;

        },

        sendZomOut: async function() {
            await keyboard.releaseKey(Key.A);
        }


    }


}