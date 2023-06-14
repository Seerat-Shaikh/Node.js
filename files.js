const fs = require('fs') //filesystem

//--- Reading files

// They asynchronousit takes some time to execute & then call back
/*fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    //It will give Buffer which is actually data like nos
    console.log(data);
    //It will show string data like Hello
    console.log(data.toString());
});*/

//--- Writing files

// It will rewrite your current file text
/*fs.writeFile('./docs/blog1.txt', 'hellow, world', () => {
    console.log('file was written')
});

//If ur mnetioned file path will not present it will first create new file & then update it
fs.writeFile('./docs/blog2.txt', 'hello, Seerat', () => {
    console.log('file was written')
});*/

//--- Directories
/*if(!fs.existsSync('./assets')) {
    //Making folder
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {

     //Removing folder
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted')
    })
}*/

// --- Deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}
