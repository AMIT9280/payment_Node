const http = require("http");

http.createServer(function(req,res){

    let url = req.url


    if(url=="/Signup"){

        res.write("Signup");
        res.end();
    }else if(url=="/Login"){
        res.write("Login");
        res.end();
    }else{

        res.write("Error: 404");
        res.end();
    }

}).listen(3000);