function loginController(req, res) {
	console.log(req.body);
	res.json({msg: "login Page"});
}

module.exports = loginController;
