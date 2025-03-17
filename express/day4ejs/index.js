const express = require("express");
const app = express();
const port = 3000;
//uuid package (universally unique identifier) npm install uuid
const{v4:uuidv4} = require('uuid');

//method override - allows us to send a put or patch or other request with a form
const methodOverride = require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


// implement get request
let posts = [
    {
        id: uuidv4(),
        username:"Atul Bora",
        content : "i love coding"
    },
    {
        id: uuidv4(),
        username:"Mohit Uniyal",
        content : "i love kRawat"
    },
];
app.get("/posts", (req, res)=>{
    res.render('index.ejs', {posts});
});


//implement post request
app.get("/posts/new",(req, res)=>{
    res.render("new.ejs");
});

app.post("/posts", (req, res)=>{
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});


// show route(implement get/posts/:id)
app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id == p.id);
    console.log(post);
    res.render("show.ejs", {post});
})

//update route(implement:patch/posts/:id)
app.patch("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p) => id == p.id);
    post.content = newcontent;
    console.log(post);
    res.redirect("/posts");
})

//edit route(implement get/posts/:id/edit)
app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id == p.id);
    console.log(post);
    res.render("edit.ejs", {post});
})


// implement delete(destroy route)
app.delete("/posts/:id", (req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p) => id != p.id);
    res.redirect("/posts");
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});