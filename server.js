const express = require("express");
const fs = require('fs');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));

app.listen(3000, function () {
    console.log("server started at 3000")
});

app.get("/", function (req, res) {
    res.sendFile("/public/index.html");
});


app.post("/save", function (req, res) {
    const msg = {
        "message": req.body.message
    }

    const messageJSON = JSON.stringify(msg);
    console.log('msg' + messageJSON);
    fs.writeFile(__dirname + "/public/data/message.json", messageJSON, function (err) {
        if (err) {
            console.log("JSON file writing error");
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});