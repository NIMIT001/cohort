const express = require("express")

const app = express();

app.get("/health-checkup",function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kindeyid = req.query.kindeyid;

    if(username != "harkirat" && password !="pass"){
        res.status(400).json({"msg": "Somethings up with your inputs"})
        return
    }
    if(kindeyid !=1&&kindeyid!=2){
        res.status(400).json({"msg": "Somethings up with your inputs"})
        return
    }


    res.json({
        msg: "Your kidney is fine!"
    })
});
app.listen(3001);
