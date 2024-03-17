let express  = require('express');
let path = require('path');
let app      = express();
let db = require('./modelFunctions');
let database = require('./config/database');
require('dotenv').config();
const cors = require('cors');
const corsOptions ={
    origin:process.env.CORSURLS, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}


// pull information from HTML POST (express4)
let port = process.env.PORT || 8000;

app.use(cors(corsOptions));

app.get('/api/user', async function(req, res) {
	id = process.env.USER_ID
	let user = await db.getUserById(id)
	res.json(await user);
});

app.get('/api/technologies', async function(req, res) {
	let technologies = await db.getAllTechnologies()
	res.json(await technologies);
});

app.get('/api/services', async function(req, res) {
	let services = await db.getAllServices()
	res.json(await services);
});

app.get('/api/projects', async function(req, res) {
	let projects = await db.getAllProjects()
	res.json(await projects);
});

app.get('/api/navlinks', async function(req, res) {
	let navlinks = await db.getAllNavLinks()
	res.json(await navlinks);
});

app.get('/api/experiences', async function(req, res) {
	let experiences = await db.getAllExperiences()
	res.json(await experiences);
});

db.initialize(database.url).then(()=>{
	app.listen(port);
	console.log("App listening on port : " + port);
}).catch((err)=>{
	console.log("A error has been occurred while connecting to database."); 
})

