const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Article = require("./db").Article;
const extract = require("article-parser").extract;

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/css/bootstrap.css", express.static("node_modules/bootstrap/dist/css/bootstrap.css"));

// Get all articles
app.get("/articles", (req, res, next) => {
    Article.all((err, articles) => {
        if (err) return next(err);

        res.format({
            html: () => {
                res.render("articles.ejs", { articles });
            },
            json: () => {
                res.send(articles);
            },
        });
    });
});

// Get a specific article
app.get("/articles/:id", (req, res, next) => {
    const id = req.params.id;
    Article.find(id, (err, article) => {
        if (err) return next(err);

        res.format({
            html: () => {
                res.render("article.ejs", { article });
            },
            json: () => {
                res.send(article);
            },
        });
    });
});

// Delete an article
app.delete("/articles/:id", (req, res, next) => {
    const id = req.params.id;
    Article.delete(id, (err) => {
        if (err) return next(err);
        res.send({ message: "Deleted the desired article." });
    });
});

// Add an article corresponding to the url passed in the request body
app.post("/articles", (req, res, next) => {
    const url = req.body.url;

    // Attempting to simplify the article using article-parser module
    extract(url)
        .then((article) => {
            Article.create({ title: article.title, content: article.content }, (err) => {
                if (err) return next(err);
                res.send({ message: "Added the new article." });
            });
        })
        .catch((err) => res.status(500).send("Error downloading article"));
});

app.listen(app.get("port"), () => {
    console.log("App started on port", app.get("port"));
});

module.exports = app;
