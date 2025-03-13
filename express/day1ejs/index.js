const express = require("express");
const app = express();
let port = 3000;


//handling server
//port: it is the port number on which the server will run
//app.listen(): it is used to start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// console.log(app);


//Path Parameters: it is used to handle the request based on the URL
app.get("/:user/:id", (req, res) => {
//req.params : it is used to get the value of the path parameter
// res.send(`User with ID: ${req.params}`); 

  //  deconstructing parameters
   let {user, id} = req.params;
   res.send(`welcome to the page of @${user}.`)
});

// Query Parameters: it is used to handle the request based on the query parameter
app.get("/search", (req, res) => {
  // console.log(req.query);
  // res.send("no result found");

  // deconstructing query parameters
  let {q} = req.query;
  res.send(`search results for query : ${q}`)
});



//handling request
//req: request
//res: response

//app.use(): it is used to create a middleware (functions between request and response)
// app.use( (req, res) => {
//   //console.log(req); //it is used to print the request object in the console
//   console.log("Request received");
//   res.send("Response sent"); //it is used to send the response to the client
// respose can be anything  html code, object, array string anything.
// });




// //Routing: it is used to handle the request based on the URL
// Routing is a process of selecting a path for traffic in a 
// network or between or across multiple networks
// app.get("/", (req, res) => {//for root URL
//   res.send("Hello World");
// });
//for other URL
//app.get("/about", (req, res) => {
//  res.send("About page");
//});
//* is used for all the URL
//app.get("*", (req, res) => {
//  res.send("About page");
//});





//app.post(): it is used to handle the post request
// app.post("/", (req, res) => {
//   res.send("Post request received");
// });

