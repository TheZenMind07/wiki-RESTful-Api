//all the required dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//basic setup
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//DBconnections Mongoose and schema implementations

mongoose.connect("mongodb://localhost:27017/wikipediaDB", {
    urlencoded: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

//Get Methods

app.route("/articles")

    .get(function (req, res) {
        Article.find({}, function (err, foundArticles) {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        });
    })

    .post(function (req, res) {
        const article = new Article({
            title: req.body.title,
            content: req.body.content
        });

        article.save();
        res.send("Article saved");
    })

    .delete(function (req, res) {
        Article.deleteMany({}, function (err, res) {
            if (!err) {
                res.send(res);
            } else {
                res.send(err);
            }
        });
    });

//

app.route("/articles")

    .get(function (req, res) {
        Article.find({}, function (err, foundArticles) {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        });
    })

    .post(function (req, res) {
        const article = new Article({
            title: req.body.title,
            content: req.body.content
        });

        article.save();
        res.send("Article saved");
    })

    .delete(function (req, res) {
        Article.deleteMany({}, function (err, res) {
            if (!err) {
                res.send(res);
            } else {
                res.send(err);
            }
        });
    });

//Application on port 3000

const port = 3000;
app.listen(port, function (err) {
    if (!err) {
        console.log("Server has started at 3000");
    }
});
