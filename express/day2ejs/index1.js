const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res)=>{
    res.render("home.ejs");
})
app.get("/rolldice", (req, res)=>{
    // generally we get data from data set
    let diceval = Math.floor(Math.random()*6)+1;//let say this val is from database
    // for that we need to add key value apir in render
    res.render("rolldice.ejs", {num:diceval});
    // res.render("rolldice.ejs");
})
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})