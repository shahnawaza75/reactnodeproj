const express =require ('express');
const app = express();
const mysql =require('mysql');
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",   
    password:"password",
    database:"employeesystem",
});

app.post("/create",(req,res)=>{
    const name=req.body.name;
    const age =req.body.age;
    const country=req.body.country;
    const position=req.body.position;
    const wages=req.body.wages;

    db.query(
        " INSERT INTO employee(name,age,country,position,wages) Values (?,?,?,?,?)",[name,age,country,position,wages],
    (err,reslut)=>{
        if (err){
            console.log(err);
        } else {
            res.send("data inserted");
        }
    });

});

  
 


app.listen(3001,()=>{
    console.log("ur server is running port2");
})