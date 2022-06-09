const express= require("express");
const { url } = require("inspector");
const app= express();
const path= require("path");
const port=3000;

//const company= require("./routes/company");
app.use(express.static(__dirname+'/company'))
app.use(express.static(__dirname+'/error'))
app.use(express.static(__dirname+'/service'))
app.use(express.static(__dirname+'/policy'))
//app.use("/company",company);
app.use(express.static(__dirname+'/main'));
app.use(express.static(__dirname +'/projects'))


app.get('/',(req,res)=>{
    
        
    
    res.sendFile(path.join(__dirname,'main/inc_main.html'))
     
    
});
app.get('/company',(req,res)=>{
    res.sendFile(path.join(__dirname,'company/inc_company.html'))
});
app.get('/error',(req,res)=>{
    res.sendFile(path.join(__dirname,'company/inc_error.html'))
});
app.get('/service',(req,res)=>{
    res.sendFile(path.join(__dirname,'service/inc_service.html'))
});
app.get('/policy',(req,res)=>{
    res.sendFile(path.join(__dirname,'policy/inc_policy.html'))
});
app.get('/projects',(req,res)=>{
    res.sendFile(path.join(__dirname,'projects/project.html'))
})



app.listen(port,()=>{
    console.log('listening on port '+ port);
    
});
