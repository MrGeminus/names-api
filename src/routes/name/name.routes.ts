import express from "express";
import nameControllers from "../../controllers/name.controllers";

const nameRoutes = express.Router();

nameRoutes.get("/name/:id", nameControllers.getNameById)
nameRoutes.get("/names", nameControllers.getAllNames)
nameRoutes.get("/names/:gender", nameControllers.getNamesByGender)
nameRoutes.get("/names/:country", nameControllers.getNamesByCountry)

export default nameRoutes