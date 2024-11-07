// server creation by http.......................
// let http = require('http');

// require('dotenv').config()
// let port = process.env.PORT || 3000;

// let server = http.createServer((req, res) => {

//     // res.end("<h1>welcome to Backend</h1>")

//.....................routes conditional rendring.................

//     if(req.url=="/")
//         {
//             res.end("<h1> Welcome to my webpage hosted on localhost</h1")
//         }
//         else if (req.url=="/school")
//         {
//             res.end("<h1>School of Engineering & Technology</h1>")
//         }
//         else if(req.url=="/about")
//         {
//             res.end("<h1> this is about page</h1>")
//         }
//         else
//         {
//             res.writeHead("404")
//             res.end("<h1> 404: Page not found</h1>")
//         }
// })





// server.listen(port, () => {
    //     console.log(`Server is running on port ${port}`)
    // })
    




// ..............................................................................
//server creation by express

// const express = require("express");

// const app = express();

// let path = require("path");

// require("dotenv").config();

// let port = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//     res.send('<h1>Welcome to home page</h1>')
// })

// app.get('/about',( req,res) => {
//     res.send('<h1>This is about page</h1>')
// })

// app.get('/school',(req,res) => {
//     res.send('<h1>School of Engineering & Technology</h1>')
// })

// app.listen(port, () => {
//     console.log("server is running on port ", port);
//   });






// .................................................................................

//rendring html file by express useing express.static middleware
// const express = require("express");

// const app = express();

// let path = require("path");

// require("dotenv").config();

// let port = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/school", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "html", "school.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "html", "about.html"));
// });

// app.listen(port, () => {
//   console.log("server is running on port ", port);
// });
