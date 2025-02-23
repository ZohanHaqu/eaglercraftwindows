const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
    // Create the browser window with the icon
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false, // For security reasons, it's recommended to keep this false
        },
        icon: path.join('C:', 'Users', 'zohan', 'Downloads', 'Eaglercraft icon', 'icon.ico') // Set the icon
    });

    // Load the URL
    win.loadURL('https://eaglercraft.com/mc/1.8.8/');

    // Maximize the window
    win.maximize();

    // Disable the default menu
    Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
