const medicineRouter = require("express").Router();
const {insertMedicine,findMedicine,addStock, alertStock, orderMedicine} = require('../controllers/medicine.controller.js');

medicineRouter.post("/",insertMedicine);
medicineRouter.post("/find",findMedicine);
medicineRouter.put("/",addStock);
medicineRouter.get("/stock-alert",alertStock);
medicineRouter.post("/bill",orderMedicine);
// medicineRouter.post("/",stockAlert)

module.exports = medicineRouter;