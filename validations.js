const Joi=require("joi")


const userValidation={
    createOrUpdateUserValidation:{
        body:Joi.object({
            username:Joi.string().min(8).max(16),
            password:Joi.string().alphanum().min(8).max(16),
            mail:Joi.string().min(8).max(16)  
        })
    }
}

module.exports=userValidation