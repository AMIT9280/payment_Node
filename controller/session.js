let users = [];


users.push({
    firstName: "Admin",
    lastName: "Admin",
    email: "Admin@123",
    password: "Admin@123"
},
    {
        firstName: "Customer",
        lastName: "Admin",
        email: "cm@123",
        password: "cm@123"
    })

module.exports.signup = function (req, res) {

    let FirstName = req.body.FirstName
    let LastName = req.body.LastName
    let Email = req.body.Email
    let Password = req.body.Password
    let userId = parseInt(Math.random() * 100000000);

    let IsError = false
    let Errmsg = [];

    if (FirstName == undefined || FirstName.trim().length == 0) {
        IsError = true;
        Errmsg.push({
            "FirstnameErrr": "please Enter FirstName"
        })

    }
    if (LastName == undefined || LastName.trim().length == 0) {

        IsError = true;
        Errmsg.push({
            "LastNameErrr": "please Enter LastName"
        })
    }
    if (Email == undefined || Email.trim().length == 0) {

        IsError = true;
        Errmsg.push({
            "EmailErrr": "please Enter Email"
        })
    }
    if (Password == undefined || Password.trim().length == 0) {

        IsError = true;
        Errmsg.push({
            "PassErrr": "please Enter Password"
        })
    }
    if (IsError == true) {
        res.json({
            "error": Errmsg,
            "Status": -1,
            "msg": "Pls Solv Error"
        })
    } else {

        res.json({
            "msg": "SIGNUP DONE"
        })
        users.push({
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Password: Password,
            userId: userId
        })
    }

}

module.exports.login = function (req, res) {

    let Email = req.body.Email
    let Password = req.body.Password

    IsError = false;

    Errmsg = [];
    if (Email == undefined || Email.trim().length == 0) {
        IsError = true;
        Errmsg.push({
            "Email": "Please Enter Email"
        })
    }
    if (Password == undefined || Password.trim().length == 0) {
        IsError = true;
        Errmsg.push({
            "Password": "Please Enter Password"
        })
    }
    if (IsError == true) {
        res.json({
            "msg": Errmsg,
            "Status": -1
        })
    }  
        let Validation = false;
        let user = undefined
        for (i = 0; i < users.length; i++) {
            if (Email == users[i].email && Password == users[i].password) {
                user = users[i]
                Validation = true
                break;
            }  
        }
 
    if (Validation==true) {
        res.json({
            data:user,
            msg:"Login Success",
            Status:200
        })
    }else{
            res.json({

                    data:req.body,
                    msg:"Invalid Credentials",
                    status:-1
            })
    }
}


module.exports.ForgetPassword = function (req, res) {
    let email = req.body.Email
    let isCorrect = false;
    let otp =  0;

    IsError = false
    Errmsg = [];
    if (email == undefined || email.trim().length == 0) {
        IsError = true
        Errmsg.push({
            "Error": "Email Is Required"
        })
    }
    if (IsError == true) {
        res.json({
            "msg": Errmsg,
            "Status": -1
        })
    }
    for(i=0; i<users.length; i++){
        if(users[i].email == email){
            otp = parseInt(Math.random()* 1000000);
            users[i].otp = otp;
            isCorrect = true;
            break;
        }
    }
    if(isCorrect == true){
        res.json({
            data:otp,
            msg:"OTP Sent",
            status:200
        })
    }else{
        res.json({
            data:req.body,
            msg:"Invalid Email",
            status:-1
        })
    }
    
}

module.exports.ResetPassword = function (req, res) {
    let Email = req.body.Email
    let isCorrect = false
    let NewPass = req.body.NewPass
    let OTP = req.body.otp
    IsError = false
    Ermsg = [];
    if (NewPass == undefined || NewPass.trim().length == 0) {
        IsError = true
        Ermsg.push({
            "Error": "Pls Enter New Password"
        })
    }
    if (OTP == undefined || OTP.trim().length == 0) {
        IsError = true
        Ermsg.push({
            "Error": "Pls Enter OTP."
        })
    }
    if (IsError == true) {
        res.json({
            "msg": Ermsg,
            "Status": -1
        })
    }  
    for(i=0; i<users.length; i++){
        if(users[i].Email == Email && users[i].otp == OTP){
            users[i].otp = -12345;
            isCorrect= true;
            users[i].password = NewPass;
            break;
        }
    }
    if(isCorrect==true){
        res.json({
            data:req.body,
            msg:"Password Successfully modified",
            status:200
        })
    }else{
        res.json({
            data:req.body,
            msg:"Invalid Data",
            status:-1
        })
    }

}
module.exports.getAllUsers = function (req, res) {

    res.json({
        "msg": "Users Ret",
        "data": users,
        "status": 200
    })
}

