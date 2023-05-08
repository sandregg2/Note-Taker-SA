//asking app to listen on port 3306 -in the terminal it should say now listening on port... if it worked correctly 
//https://www.npmjs.com/package/dotenv dotenv is a great way to keep important items like passwords or api keys safe for
const PORT = process.env.PORT || 3306;
// https: //expressjs.com/en/starter/hello-world.html
//make sure you have express installed npm install express --save
const express = require('express');
const app = express();

//https: //www.npmjs.com/package/nodemon
const fs = require('fs');
const path = require('path');

//"we are requiring Express and creating a new instance of Router on it. We are holding that in a variable called routes. Then we are creating a route at the root path of this Router that sends back a simple message. Then we export the Router."
//https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers
//this link talks about understanding and keeping routes organized
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


//urlencoded() function = a built-in middleware function in Express
//https://www.google.com/search?q=app.use(express.urlencoded(%7B&rlz=1C5CHFA_enUS956US956&oq=app.use(express.urlencoded(%7B&aqs=chrome..69i57j0i512l3j0i30l3.1374j0j15&sourceid=chrome&ie=UTF-8
app.use(express.urlencoded({
    extended: true
}));

//static files - specifies the root directory from which to serve static assets https://expressjs.com/en/starter/static-files.html
//adds a middleware - To serve static files such as images, CSS files, and JavaScript file
// https: //www.google.com/search?q=app.use(express.static&rlz=1C5CHFA_enUS956US956&oq=app.use(express.static&aqs=chrome..69i57j0i512l9.1090j0j15&sourceid=chrome&ie=UTF-8
app.use(express.static('public'));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

