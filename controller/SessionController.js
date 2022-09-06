const UserModel = require("../model/user.Model");
module.exports.signup = function(req,res){

    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let password = req.body.password

    let u ={
        "firstName":firstName,
        "lastName":lastName,
        "emil":email,
        "password":password
    }

    let User = UserModel(u)
    User.save(function(err,data){
        if(err){
            res.json({
                data:err,
                msg:"SMW",
                status:-1
            })
        }else{
            res.json({
                data:data,
                msg:"User Added..",
                status:200
            })
        }
    })  
}