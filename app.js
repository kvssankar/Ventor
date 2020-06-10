var express = require("express");
var bodyParser = require("body-parser");
var nodemailer=require("nodemailer");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {
    res.render("landing_page.ejs",{
        "logo":"/assets/VinnovateIT-shape.png"
    });
});

app.get("/it", function (req, res) {
    res.render("it_timeline.ejs");
});

app.get("/cse", function (req, res) {
    res.render("cse_timeline.ejs");
});

app.get("/ece", function (req, res) {
    res.render("ece_timeline.ejs");
});

app.get("/eee", function (req, res) {
    res.render("eee_timeline.ejs");
});

app.get("/civil", function (req, res) {
    res.render("civil_timeline.ejs");
//   let transporter = nodemailer.createTransport({
//     service: "gmail", 
//     auth: {
//       user: "miniorganisation@gmail.com",
//       pass: "sankarvishnu23",
//     },
//   });
//   let info = await transporter.sendMail({
//     from: `Subjects-List <minioraganisation@gmail.com>`,
//     to: "kvs.sankar001@gmail.com",
//     subject: `${req.title}`,
//     text: "Suggestion for subjects",
//     html: `<h1>${req.title}</h1><br>${req.matter}<p></>`,
//   });

//   console.log("Message sent: %s", info.messageId);
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

app.get("/mech", function (req, res) {
    res.render("mech_timeline.ejs");
});

app.get('*', function (req, res) {
    res.render("not_found.ejs", {
        "notFound": "/assets/pageNotFound.png"
    })
});

app.listen(process.env.PORT || 8000, function () {
    console.log("SERVER 8000 HAS STARTED");
});