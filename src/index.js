const express =require('express');
const { PORT } = require('./config/dotenv-config');
const  apiRoutes= require('./routes')


const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.get('/',(req,res)=>{
//     res.send('home')
// })
app.use('/api',apiRoutes)

 

app.listen(PORT,(req,res)=>{
    
    console.log(`listening on port 3000`)
})
