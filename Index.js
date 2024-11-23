const express = require("express")
const app = new express()
app.use(express.json());
const Array =[
    {name:"Miya",age:15,id:"3455",dept:"bcom"},
     {name:"Maya",age:17,id:"3455",dept:"bsc cs"}
];
app.get('/view',(req,res)=>{
    res.send(Array)
})
app.listen(8089,()=>{
    console.log("port is running")
})
app.delete("/remove",(req,res)=>{
    Array.pop();
    res.send("deleted successfullly")
});
app.post('/add',(req,res)=>{
    console.log(req.body)
    Array.push(req.body)
    res.send("data added")
})