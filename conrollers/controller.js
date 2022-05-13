const db=require("..//models")

const User=db.user

const addUser=async (req,res)=>{
    const getuser=await User.findOne({where:{username:req.body.username}}) 

    if (getuser===null){
        const user=await User.create({username:req.body.username,password:req.body.password,mail:req.body.mail})
        res.status(200).send(user)
    }else{
        res.send("user already existed")
    }

    
}


module.exports={addUser}