// Global Object

//console.log(global);

//It will run once after 3ms
global.setTimeout(() => {
    console.log('in the timeout')
    clearInterval(int); //It will execute until 3ms
}, 3000);

//It will run constantly after 1ms 
const int = setInterval(() => {
    console.log('in the interval')
}, 1000);

/*console.log(__dirname); //It shows foldername
console.log(__filename); */ //It shows foldername & file name

