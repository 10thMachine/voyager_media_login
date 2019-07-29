// NPM Packages to make the app function
const express 	= require('express');
const app		= express();

// AWS Cognito Package
// const AmzonCognitoIdentity	= require('amazon-cognito-identity-js');

//view engine
// const ejs		= require('ejs');
// app.set('view engine', 'ejs');

app.listen(3000, () => {
	console.log('Server is up');
})