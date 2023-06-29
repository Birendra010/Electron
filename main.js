const {app,BrowserWindow} = require('electron');

// setTimeout(()=>{
// console.log(app.isReady())
// },1000)

function createWin(){
const win = new BrowserWindow({
width:400,
height:400,
// alwaysOnTop:true,
frame:false,
webPreferences:{
    nodeIntegration:true
}

})
win.loadFile("index.html")

// win.webContents.openDevTools();

}

//// diffrent way to process main
// app.whenReady().then(createWin)

// app.whenReady().then(()=>{
//     createWin()
// })
app.on('ready',()=>{
    createWin()
    // console.log(app.isReady())
})
// app.on('browser-window-focus',()=>{
//     console.log("you are on app")
// })
// app.on('browser-window-blur',()=>{
//     console.log("unfocus")
// })


///********state manegment of  window {size and position }*/
const windowStateKeeper = require('electron-window-state');
let win1

function createWindow(){
let mainWindowstate = windowStateKeeper({
    defaultHeight:800,
    defaultWidth:600
})
     win1 = new BrowserWindow({
    width:mainWindowstate,
    height:mainWindowstate

     })

}

