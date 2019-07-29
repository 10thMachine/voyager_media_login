// NPM Packages to make the route function
const express 	= require('express');
const router	= express.Router();

// Routes
router.get('/', (req, res) => {
	res.send('Inital route');
})