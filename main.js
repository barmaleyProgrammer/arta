const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'), // можна вимкнути
      contextIsolation: true
    }
  });

  win.loadFile(path.join(__dirname, 'dist/index.html'));

  // ВАЖЛИВО: слухач помилок завантаження
  // win.webContents.on('did-fail-load', (e, errorCode, errorDesc, validatedURL) => {
  //   console.log('FAILED TO LOAD:', errorCode, errorDesc, validatedURL);
  // });

  // win.webContents.openDevTools(); // для дебагу
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});