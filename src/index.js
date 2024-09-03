const express =require('express');
const { PORT } = require('./config/dotenv-config');
const  apiRoutes= require('./routes');
const {City,Airport} = require('./models');


const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoutes)

 

app.listen(PORT,async(req,res)=>{
    console.log(`listening on port ${PORT}`)
})
