const { Schema, model } = require("mongoose");
  
  const MedicineSchema = new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50
    },
    uid: {
        type: Number,
        required: true,
    },
    disease: {
        type: String,
    },
    costPerUnit: {
        type: Number,
        required: true,
    },
    allergyWarning: {
        type: String,
    },
    incomingStock: {
        type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const MedicineModel = model("newMed", MedicineSchema)
  
  module.exports = MedicineModel