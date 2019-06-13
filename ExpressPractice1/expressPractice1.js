var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req,res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof woof!"
    };
    var sound = sounds[animal];
    res.send("The " + animal + " says, '" + sound + "'");
});


app.get("/repeat/:text/:count", function(req,res) {
    var text = req.params.text;
    var count = Number(req.params.count);
    var result = ""

    for (i = 0; i < count; i++) {
        result += " " + text;
    }

    res.send(result);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...")
});

app.listen(3000);



