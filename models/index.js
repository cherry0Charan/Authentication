const {Sequelize,DataTypes}=require("sequelize")

require("dotenv").config()

const sequelize= new Sequelize(process.env.DB_DATA,process.env.DB_USER,process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:process.env.DB_dialect
    })

console.log(process.env.DB_USER)

sequelize.authenticate()
.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})


let db={};

db.Sequelieze=Sequelize;
db.sequelize=sequelize;


db.user=require("./user")(sequelize,DataTypes)

db.sequelize
.sync({force:true})
.then((result)=>{

})


module.exports=db