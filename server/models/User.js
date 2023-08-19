const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		fullName: {type: String, required: true},
		phone: {type: Number, required: true},
		address: {type: String, required: true},
		ownerKey: {type: String, required: true},
		userid: {type: String, required: true, unique: true},
		password: {type: String, required: true},
	},
	{timestamps: true},
);

module.exports = mongoose.model("User", userSchema, "users");
