const express = require("express");
const app = express();

// //middleware -> response send to client then it will not execute the get request response
// app.get("/", (req, res) => {
//     res.send();
// })

// app.use((req, res) =>{
//     console.log("middleware is called");
//     res.send("middleware finished");
// })
// app.get("/", (req, res) => {
//     res.send();
// })
// this will send same response to all the routes and it will 
// not send the response of the route which is requested by the client


// USING NEXT() -> if the current middleware functio does not end
// the response then it will call the next middleware function

// app.use((req, res, next) =>{
//     console.log("middleware is called");
//     next();
// })
// app.get("/", (req, res) => {
//         res.send("hi, I'm root");
// })
// app.get("/random", (req, res) => {
//     res.send("this is a random page");
// })


// MIDDLEWARE CHAINING
// app.use((req, res, next) =>{
//     console.log("Hi. i'm 1st middleware");
//     next();
// })
// app.use((req, res, next) =>{
//     console.log("Hi. i'm 2nd middleware");
//     next();
// });
// app.get("/", (req, res) => {
//         res.send("hi, I'm root");
// })
// app.get("/random", (req, res) => {
//     res.send("this is a random page");
// })


// UTILITY MIDDLEWARE
// Logger - used to print useful info on the console
// app.use((req, res, next) =>{
//     // console.log(req);
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.url, req.hostname, req.path, req.time);
//     next();
// })
// app.get("/", (req, res) => {
//     res.send("hi, I'm root");
// })
// app.get("/random", (req, res) => {
// res.send("this is a random page");
// })



// app.use - it consist of two parameters - middleware function(callback) and path
// callback function can be a middleware function or series of middleware functions
//or an array of middleware functions or combination of all the above

// FOR SPECIFIC PATH
// app.use("/random", (req, res, next) =>{
//     console.log("I'm only for raandom");
//     next();
// })
// app.get("/", (req, res) => {
//     res.send("hi, I'm root");
// })
// app.get("/random", (req, res) => {
// res.send("this is a random page");
// })



// API TOKEN as QUERY STRING
// app.get("/api", (req, res, next) => {
//     let {token} = req.query;
//     if(token === "give-access") next();
//     else res.send("Access denied");
// })


// Passing multiple middlewares
// const checkToken =  (req, res, next) => {
//     let {token} = req.query;
//     if(token === "give-access") next();
//     else res.send("Access denied");
// }
// app.get("/", (req, res) => {
//     res.send("hi, I'm root");
// })
// app.get("/api", checkToken, (req, res) => {
//     res.send("this is a api page");
// })
// here checkToken is a middleware function and it is passed to /api path
// first it will check the token and if it is correct it will call the next middleware function



// Error Handling
// express has a built in error handling middleware function
// app.get("/wrong", (req,res) =>{
//     abcd = abcd;
// })
// // here express will automatically call the error handling middleware function
// app.get("/", (req, res) => {
//     res.send("hi, I'm root");
// })


// we can also define our own error handling middleware function
const checkToken =  (req, res, next) => {
    let {token} = req.query;
    if(token === "give-access") next();
    else throw new Error("Access denied");
}
// we can generate our own error using throw keyword 
// this error will be caught by the error handling middleware function
// but we can also define our own error handling middleware function

app.get("/", (req, res) => {
    res.send("hi, I'm root");
})
app.get("/api", checkToken, (req, res) => {
    res.send("this is a api page");
})
app.listen(8080, () => {
    console.log("server listening on port 8080")
})
