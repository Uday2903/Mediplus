const MedicineSchema = require('../models/medicine.schema.js');

exports.insertMedicine = async(req,res) => {
     try {
        // const {name,uid,disease,costPerUnit,allergyWarning,incomingStock} = req.body;
        const name = req.body.mName;
        const uid = req.body.uid;
        const costPerUnit = req.body.cpu;
        const incomingStock = req.body.stock;
        const allergyWarning = req.body.allergy;
        const disease = req.body.disease;
        const med = new MedicineSchema({name,uid,costPerUnit,incomingStock,allergyWarning,disease});
        await med.save();
        res.status(200).json(med);
     } catch(err){
        console.log(err)
		return res.status(500).json({
			error: "Internal Server Error",
		});
     }
}
exports.findMedicine = async(req,res) => {
    try {
        const search_param = req.body.name;
        const searchMed = (Number.isInteger(search_param)) ? "uid" : "name";
        let med;
        if(searchMed=="uid"){med = await MedicineSchema.find({"uid": search_param});}
        else med = await MedicineSchema.find({"name": search_param})
        res.status(200).json(med);
    } catch(err){
        console.log(err)
		return res.status(500).json({
			error: "Internal Server Error",
		});
    }
}
exports.addStock = async(req,res) => {
    try {
        const medName = req.body.name;
        const addQty = req.body.newStock;
        const med = await MedicineSchema.updateOne(
            {"name": medName},
            { $inc: { incomingStock: addQty} }
        )
        res.status(200).json(med);
    } catch(err){
        console.log(err)
		return res.status(500).json({
			error: "Internal Server Error",
		});
    }
}

exports.alertStock = async(req,res) => {
    try {
        
        const med = await MedicineSchema.find(
            {incomingStock: {$lt: 10}}
        )
        res.status(200).json(med);
    } catch(err){
        console.log(err)
		return res.status(500).json({
			error: "Internal Server Error",
		});
    }
}
exports.orderMedicine = async(req,res) => {
    try {
        const medName = req.body.mName;
        const addQty = req.body.sellStock;
        const med = await MedicineSchema.updateOne(
            {"name": medName},
            { $inc: { incomingStock: -addQty} }
        )
        const sellmed = await MedicineSchema.find({"name": medName});
        res.status(200).json(sellmed);
    } catch(err){
        console.log(err)
		return res.status(500).json({
			error: "Internal Server Error",
		});
    }
}