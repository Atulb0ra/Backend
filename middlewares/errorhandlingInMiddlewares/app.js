const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.get("/err", (req,res) =>{
//     abcd = abcd;
// })

// app.use((err, req, res, next) => {
//     // console.log(err);
//     console.log("-----ERROR-----");
//     // next();
//     next(err); //to trigger the express default error handler
// })
// app.use((err, req, res, next) => {
//     console.log("-----ERROR2-----");
//     next(err); 
// })

// app.use((req,res) => {
//     res.send(404).send("page not found");
// })




// CUCTOM ERROR
// const checkToken =  (req, res, next) => {
//     let {token} = req.query;
//     if(token === "give-access") next();
//     else throw new ExpressError(401, "Access denied");
// }
// app.get("/api", checkToken, (req, res) => {
//     res.send("this is a api page");
// })
// app.get("/", (req, res) => {
//     res.send("hi, I'm root");
// })
// app.get("/err", (req,res) =>{
//     abcd = abcd;
// })

// app.use((err, req, res, next) => {
    //console.log("-----ERROR-----");
    // // next(err); 
    // res.send(err);
// })


//  passing status code and message
// const checkToken =  (req, res, next) => {
//     let {token} = req.query;
//     if(token === "give-access") next();
//     else throw new ExpressError(401, "Access denied");
// }
// app.get("/api", checkToken, (req, res) => {
//     res.send("this is a api page");
// })
// app.get("/", (req, res) => {
//     res.send("hi, I'm root");
// })
// app.get("/err", (req,res) =>{
//     abcd = abcd;
// })

// app.use((err, req, res, next) => {
//     // let{status ,message} = err;
//     // res.status(status).send(message);
//     let{status=500 ,message = "error occured"} = err;
//     res.status(status).send(message);
// })


// HANDLING ASYNC ERRORS
// New -showRoute
// NOTE : this will not get any resylt this is just to define async error handling
// app.get("/chats/:id", async(res,res,next) => {
//     let {id} = req.params;
//     let chat = await Chat.findById(id);
//     if(!chat) return next(res.status(404).send("chat not found"));
//     // Here in async errors next () is compulsory to pass the error to the next middleware
//     res.render("edit.ejs", {chat});
// })
// Handling async error using try-catch block
// app.get("/chats/:id", async (req, res, next) => {
//         try {
//             let {id} = req.params;
//             let chat = await Chat.findById(id);
//             if(!chat) return next(res.status(404).send("chat not found"));
//             res.render("edit.ejs", {chat});
//         } catch (err) {
//             next(err);
//         }
// })
// we can use try-catch block everywhere wherever we are using async/await



// using wrapAsync
// const wrapAsync = (fn) => {
//     return (req, res, next) => {
//         fn(req, res, next).catch(next);
//     }
// };
// app.get("/chats/:id", wrapAsync(async (req, res, next) =>{
//     let {id} = req.params;
//     let chat = await Chat.findById(id);
//     if(!chat) return next(res.status(404).send("chat not found"));
//     res.render("edit.ejs", {chat});
// }));
// using this we dont have the need to write try catch block
// everywhere in our code whereever we are using async/await we can use this wrapAsync function




// Mongoose error
const handleCastError = (err) => {
    res.status(400).send("Invalid id");
    return err;
}
// Mongoose error handling
app.use((err,req,res,next) => {
    console.log(err.name);
    if(err.name === "CastError"){
        err= handleCastError(err);
    }
    next(err);
});



app.listen(8080, () => {
    console.log("server listening on port 8080")
})
