const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//Here on is event listener
/*readStream.on('data', chunk => {
  // console.log('---- NEW CHUNK ----');
  // console.log(chunk);
  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk);
});*/

// piping
// same as above shortcut
readStream.pipe(writeStream);