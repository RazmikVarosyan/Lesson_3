// var express = require("express");
// var app = express();
// app.get("/",function(req,res){
//     res.send("Hello world");
// });
// app.listen(3000, function(){
//     console.log("Examle is running on port 3000");
// });

// var express = require("express");
// var app = express();
// var Square = require("./module");
// var mySquareObject = new Square(5);
// function main(){
//     console.log(mySquareObject.getArea());
// }
// main();

// app.get("/", function (req, res) {
//     res.send("Square");
// });


// app.get("/:sname/:name", function (req, res) {
//     var s = req.params.sname;
//     var n = req.params.name;
//     res.send("<h1>Hello " + n + s + "</h1>");
// });

// app.get("/google/", function(req,res){
//     res.redirect("https://www.google.com/");
// });

// app.get("/google/:search",function(req,res){
//     var s = req.params.search;
//     res.redirect("https://www.google.com/search?q="+s);
// })

// var fs = require("fs");
// function main() {
//     fs.writeFile("hello.txt", "Hello world\n", function (err) {
//         console.log("fs.writeFile ended");
//     });
//     console.log("fs.writeFile");
// }
// main();
// var fs = require('fs');

// function main() {
//    fs.writeFileSync("hello.txt", "Hello world\n");
//    console.log("fs.writeFile");
// }
// main();
// var fs = require("fs");
// var dummyText = "Apple yep";

// function main() {
//     fs.writeFileSync("dummytext.txt", dummyText);
//     var text = fs.readFileSync("dummytext.txt").toString();
//     console.log(dummyText == text);
//     console.log(text);
//     fs.writeFileSync("undummytext.txt",
//     text.replace("Apple", "Mcrosoft")
// );
// }
// main();
// app.listen(3000, function () {
//     console.log("Example is running on port 3000");
// });

var fs = require('fs');

var obj =
{
    "first_name": "Vardan",
    "last_name": "Hovsepyan",
    "age": 13,
    "tumo_student": true
}

var myJSON = JSON.stringify(obj);

fs.writeFileSync("obj.json", myJSON);