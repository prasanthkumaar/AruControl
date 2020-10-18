const ipcRenderer = require('electron').ipcRenderer;
const controlPage = '/src/controlPage.html'


function getStarted() {
    ipcRenderer.send('load-page', controlPage);
}

