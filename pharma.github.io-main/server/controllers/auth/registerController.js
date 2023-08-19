const {User} = require("../../models");

async function registerController(req, res) {
	console.log(req.body);
	// const { fullName, phone, address, ownerKey, userid, password } = req.body;
	const userData = req.body;
	try {
		const user = await new User(userData);
		const res = await user.save();
	} catch (err) {
		console.log(err);
	}
}

module.exports = registerController;
