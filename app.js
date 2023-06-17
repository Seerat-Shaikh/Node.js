const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// Express App
const app = express();

//connect to mongodb
const dbURI =
  "mongodb+srv://nodeninja:khanwala00@cluster0.vk5gxdo.mongodb.net/node-js?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// Register view engine
app.set("view engine", "ejs");

//middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// mongoose and mongo sandbox routes

/*app.get('/add-blog', (req, res) => {
    const blog = new Blog({
      title: 'new blog 2',
      snippet: 'about my new blog',
      body: 'more about my new blog'
    })
  
    blog.save()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
});



app.get('/all-blogs', (req, res) => {
    Blog.find()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('648c51b1277973f4ab5afb9c')
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
});
  

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

app.get("/", (req, res) => {
  res.redirect("/blogs");
  /*const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs});*/ //blogs:blogs or blogs both are same

  //res.send('<p>home page</p>')

  // Routing with other files
  /*res.sendFile('./views/index.html', {root: __dirname});*/
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
  //res.send('<p>home page</p>')
  /*res.sendFile('./views/about.html', {root: __dirname});*/
});

// blog routes

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create new Blog" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) //Descending order new to old
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  //console.log(req.body);
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  //console.log(id);

  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
});

// 404 page
app.use((req, res) => {
  //res.status(404).sendFile('./views/404.html', { root: __dirname});
  res.status(404).render("404", { title: "404" });
});
