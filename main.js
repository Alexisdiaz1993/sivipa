const { app, BrowserWindow } = require("electron");

console.log("🚀 Electron ha iniciado correctamente!");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: true, 
    },
  });

  // Cargar la URL donde corre Vite
  mainWindow.loadURL("http://localhost:5173");

  // Opcional: abrir las DevTools
  // mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
