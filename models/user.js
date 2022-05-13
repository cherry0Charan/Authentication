module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('user',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        mail:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        timestamps:false,
        freezeTableName:true
    })

    return User
}