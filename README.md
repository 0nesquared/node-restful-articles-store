# node js - sqlite RESTful API with a .ejs frontend

An app that allows the users to store articles or any other web content in a sqlite database, to be read later. API routes -

-   GET /articles : Fetch the list of all articles (in json or html format)
-   GET /articles/:id - Fetch a specific article
-   POST /articles - Save an article in the database by passing the url in the request body
-   DELETE /articles/:id - Delete a specific article

Packages used -

-   **article-parser** - to parse the web contents in a readable format
-   **body-parser** - to parse the request body
-   **bootstrap** - basic bootstrap styling
-   **express** - to handle routes
-   **sqlite3** - for lightweight and efficient data storage
-   **ejs** - view engine for this app

## Instructions to run the website:

[LIVE DEMO VIDEO here](https://drive.google.com/drive/folders/1cOw7BgZeP-zaq88nj0v4eDHW7Y_Iufjl?usp=sharing)

Prerequisites: _nodejs (with npm)_

-   Download the source code from github into a local folder
-   Navigate to the folder from command line and run **npm install**
-   Run **npm start** from the terminal to get the app running
-   Type **http://localhost:3000/articles** in the browser to get started
-   Follow along with the DEMO video for more details on how to add and manipulate articles
