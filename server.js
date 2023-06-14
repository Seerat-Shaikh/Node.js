const fs = require('fs')
const http = require('http');

const server = http.createServer((req, res) => {
    //console.log('request made');
    //console.log(req.url, req.method);
    console.log(req.url);

    //set header content type

    //-- Writing plain text--
    /*res.setHeader('Content-Type', 'text/plain');
    res.write('hello, everyone');*/

    //-- Writing html text--
    /*res.setHeader('Content-Type', 'text/html');
    res.write('<head><link rel="stylehseet" href="#"></head>')
    res.write('<p>hello, everyone</p>');
    res.write('<p>hello, everyone again</p>');
    res.end();*/
    
    //Routing different paths
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-haz':
             res.statusCode = 301; //responce is mover to new place
             //Redirectiong if u will write about-me on localhost it will redirect to u on about page
             res.setHeader('Location', '/about');
             res.end();
             break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data); 
            res.end(data); 
        }
    });

    //-- Using HTML file--
    /*fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data); //For multiple task use both
            res.end(data); //shortcut if u have one task
        }
    })*/

});

// 3000 is port number 
server.listen(4000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});
