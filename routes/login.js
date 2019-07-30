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

router.get('/', (req, res) => {
	res.render('login');
});

router.post('/', (req, res) => {
	const loginDetails = {
		Username: req.body.email,
		Password: req.body.password
	}

	const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(loginDetails)

	const userDetails = {
		Username: req.body.email,
		Pool: userPool
	}

	const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userDetails)

	cognitoUser.authenticateUser(authenticationDetails, {
		onSuccess: data => {
			console.log(data)
			res.send('Login successful')
		},
		onFailure: err => {
			console.error(err)
			res.send('Login in failure')
		}
	});
});

module.exports = router;