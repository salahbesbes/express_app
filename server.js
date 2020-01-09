const express = require("express");
const app = express(); // obj qui contien toute les méthode que contient express
const hbs = require("hbs");
app.set("view engine", hbs);

app.use(
  (open = (req, res, next) => {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    var time_now = Date.parse("08 janvier 2020 " + time.toString());
    var morning = Date.parse("08 janvier 2020 + 12:00");
    var afternoon = Date.parse("08 janvier 2020 17:00");

    if (time_now < morning || time_now > afternoon) {
      res.render("./hbs/error.hbs");
    } else {
      next();
    }
  })
);



app.get("/home", (req, res) => {
  res.render("./hbs/home.hbs");
});

app.get("/ourservices", (req, res) => {
  res.render("./hbs/ourservices.hbs");
});

app.get("/contact", (req, res) => {
  res.render("./hbs/contact.hbs");
});

/* app.use( date = ( req, res, next ) => {
let test = new Date()
console.log(test)
next()
})*/

// const middelware_Date = ( req, res, next ) => {
//     let test = new Date()
// console.log(test)
// next()
// }
// const callback_test = ( req, res ) => {  // req est un obj qui content des méthodes

//   let path = __dirname+'/index.html'
//   res.sendFile(path)
// }
// const callback_coord = ( req , res ) => {
//   let path = __dirname+'/coordonné.html'
//   res.sendFile(path)
// }

// app.use(express.static ( __dirname + '/public'))

// app.get('/users/:name',middelware_Date,callback_test) // name est une variable
// app.get ('/coord',callback_coord)



app.listen(3000, err => {
  if (err) console.log("server is not running ");
  else console.log("server is runniing on port 3000");
});
