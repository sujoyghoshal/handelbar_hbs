const express=require('express');
const app=express();
const port=process.env.port||3000;
const hbs = require('hbs')
//app.use(express.static('./views'));  
app.set('view engine','hbs');    //to set view engine
//to set route in template engine 
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/contact',(req,res)=>{
    res.render('contact');
})

//dynamic data :
let student={
    name:"sujoy",
    age:20,
    email:'sujoyghoshal.s@gmail.com'
}
app.get('/dynamic',(req,res)=>{
    res.render('dynamic',{student:student})
})
app.listen(port,()=>{
    console.log(`Running the port no ${port}`)
})