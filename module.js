
// ==== For exporting single file ====
//Using require for importing ./people filename in same directory
/*const xyz = require('./people');
console.log(xyz); //It will result an empty object {} bcz xyz is not = to people as it will access only inside the file

console.log(people);*/ //It is giving error

// ==== For exporting Multiples files ====
const { people, ages} = require('./people');
console.log(people,ages);

// Operating system extracting file as it is already present in node
const os = require('os');

//Platform will tell windows version & dir will locate file path
console.log(os.platform(), os.homedir());