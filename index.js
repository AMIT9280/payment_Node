const express = require("express")
const session = require("./controller/session")
const calc = require("./controller/calc")
const logic  = require("./controller/logic")
const sessionController = require("./controller/SessionController")
const ProductController = require("./controller/productController")
const { default: mongoose } = require("mongoose")
const app = express()


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//database
mongoose.connect('mongodb://localhost:27017/royaldb',function(err){

    if(err){
        console.log("Db Not Connected");
    }else{
        console.log("Db Connected");

    }

})

//rest Api without DataBase

app.post("/Login",session.login);
app.post("/Signup",session.signup);
app.post("/ForgetPassword",session.ForgetPassword);
app.post("/resetPassword",session.ResetPassword);
app.get("/getAllusers",session.getAllUsers);


//rest Api with Database
app.post("/Registration",sessionController.signup);
app.post("/Product",ProductController.AddProduct);
app.get("/Product",ProductController.getAllproducts);
app.put("/Product",ProductController.UpdateProduct);
app.delete("/Product",ProductController.DeleteProduct);




//logic
app.post("/add",calc.add)
app.post("/sub",calc.sub)
app.post("/sqr",calc.sqr)
app.post("/prime",logic.prime)
app.post("/magicNumber",logic.magicNumber)
app.post("/max",logic.max)


//server
app.listen(3000,function(){
    console.log("server Started");
})