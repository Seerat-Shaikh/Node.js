const express = require('express');
const morgan = require('morgan');

// Express App
const app = express();

// Register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(4000);

//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

/*app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
});*/
  
  

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs}); //blogs:blogs or blogs both are same

    //res.send('<p>home page</p>')

    // Routing with other files
    /*res.sendFile('./views/index.html', {root: __dirname});*/
});

app.get('/about', (req, res) => {

    res.render('about', { title: 'About'});
    //res.send('<p>home page</p>')
    /*res.sendFile('./views/about.html', {root: __dirname});*/
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create new Blog'});
})

// 404 page
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname});
    res.status(404).render('404', { title: '404'});
});