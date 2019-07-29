// NPM Packages to make the app function
const express 		= require('express');
const app			= express();
const bodyParser 	= require('body-parser');

// Load environment variables
const dotenv 	= require('dotenv');
dotenv.config();

const PORT 		= process.env.PORT;

// AWS Cognito Package
// const AmzonCognitoIdentity	= require('amazon-cognito-identity-js');
global.fetch 	= require('node-fetch');

// view engine
const ejs		= require('ejs');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Routes for Login
app.use('/', require('./routes/landing.js'));

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
})