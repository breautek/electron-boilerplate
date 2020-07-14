
import {
  app,
  BrowserWindow
} from 'electron';

function createWindow () {
  // Create the browser window.
  let win: BrowserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  win.loadFile('./renderer/index.html');
}

app.on('ready', createWindow);

