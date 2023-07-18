const express=require("express")
const cors = require("cors");
const { connection } = require("./config/db");
const { data1Router } = require("./Routes/data1");
const { data2Router } = require("./Routes/data2");
const { searchRouter } = require("./Routes/searchdata");
const app=express()
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
res.send("Welcome")
})
app.use(data1Router);
app.use(data2Router);
app.use(searchRouter)
app.listen(4500,async()=>{
    try{
        await connection;
        console.log("db is connected")
    }catch(err){
        console.log("db have some error")
    }
console.log("Running the server at 4500")
})
