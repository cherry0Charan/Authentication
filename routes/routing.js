const router=require("express").Router()

const userValidation=require("../validations")

const {validate}=require("express-validation");

const {addUser}=require("../conrollers/controller")

router.post("/addUser",validate(userValidation.createOrUpdateUserValidation),addUser)

module.exports=router