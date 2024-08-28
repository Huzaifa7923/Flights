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

    const city = await City.create({ name: 'San Francisco' });

// Create a new airport associated with the city
const airport = await city.createAirport({
  name: 'San Francisco International Airport',
  code :'SFIA',
});
})
