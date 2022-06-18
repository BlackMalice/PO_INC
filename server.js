const express= require("express");
const { url } = require("inspector");
const app= express();
const path= require("path");
const port=3000;
var device= require('express-device');
//const company= require("./routes/company");
app.use(express.static(__dirname+'/company'))
app.use(express.static(__dirname+'/error'))
app.use(express.static(__dirname+'/service'))
app.use(express.static(__dirname+'/policy'))
//app.use("/company",company);
app.use(express.static(__dirname+'/main'));
app.use(express.static(__dirname +'/projects'))
app.use(device.capture())


app.get('/',(req,res)=>{
    
        
    if(req.device.type=="desktop"){
    res.sendFile(path.join(__dirname,'main/inc_main.html')); }
    else {
        res.sendFile(path.join(__dirname,'main/inc_mobile_main.html'));
    }
    
 
    
});
app.get('/company',(req,res)=>{
    if(req.device.type=="desktop"){
        res.sendFile(path.join(__dirname,'company/inc_company.html')); }
        else {
            res.sendFile(path.join(__dirname,'company/inc_mobile_company.html'));
        }
});
app.get('/error',(req,res)=>{
    if(req.device.type=="desktop"){
        res.sendFile(path.join(__dirname,'error/inc_error.html')); }
        else {
            res.sendFile(path.join(__dirname,'errorinc_mobile_error.html'));
        }
});
app.get('/service',(req,res)=>{
    if(req.device.type=="desktop"){
        res.sendFile(path.join(__dirname,'service/inc_service.html')); }
        else {
            res.sendFile(path.join(__dirname,'service/inc_mobile_service.html'));
        }
});
app.get('/policy',(req,res)=>{
    if(req.device.type=="desktop"){
        res.sendFile(path.join(__dirname,'policy/inc_policy.html')); }
        else {
            res.sendFile(path.join(__dirname,'policy/inc_mobile_policy.html'));
        }
});
app.get('/projects',(req,res)=>{
    if(req.device.type=="desktop"){
        res.sendFile(path.join(__dirname,'projects/inc_project.html')); }
        else {
            res.sendFile(path.join(__dirname,'projects/inc_mobile_project.html'));
        }
})



app.listen(port,()=>{
    console.log('listening on port '+ port);
    
});
