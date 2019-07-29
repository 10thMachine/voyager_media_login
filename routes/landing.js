// NPM Packages to make the route function
const express 	= require('express');
const router	= express.Router();

const bodyParser = require('body-parser');

// AWS Cognito Package
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

// AWS Cognito Pool
const poolData = {
	UserPoolId : process.env.AWS_UserPoolId,
	ClientId : process.env.AWS_ClientId
}

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// Routes
router.get('/', (req, res) => {
	res.render('register');
});

router.post('/', (req, res) => {
	// Item to get the email info
	const email = req.body.email;

	// Password for the user
	const password = req.body.password;

	// Email Data for AWS Cognito
	const emailData = {
		Name: 'email',
		Value: email
	};

	// Email attribute for AWS Cognito
	const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);

	userPool.signUp(email, password, [emailAttribute], null, (err, data) => {
		if(err){
			return console.error(err);
		} else {
			console.log('email has been added');
			res.send('register completed');
		}
	});
});

module.exports = router;