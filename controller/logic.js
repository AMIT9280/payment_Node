module.exports.prime = function(req,res){
    let num=parseInt(req.body.n1);
    flag=true;
    if(num>0){   
        for(i=2; i<=num-1; i++ ){
        if(num%i==0){
            flag=false;  
        }
    }
        if(flag==0){
            res.json({"Prime":"True"})
        }
        if(flag<=0){

            res.json({"Prime":"null"})
        }
    }
}
module.exports.magicNumber = function(req,res){
    num = parseInt(req.body.n1);
    if(num%2==0){
        
        res.json({"magicNumber":"Even"})

    }else{
        
        res.json({"magicNumber":"Odd"})
    }
}

module.exports.max = function(req,res){
        let num1 = parseInt(req.body.n1)
        let num2 = parseInt(req.body.n2)
        let num3 = parseInt(req.body.n3)

       let maxnum =  Math.max(num1,num2,num3)

        res.json({"Max num is":maxnum})

}
    
   
