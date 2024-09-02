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
    // const city=await City.findByPk(8);
    // console.log(city)
    // const airp1 =await city.createAirport({name:'Lucknow1',code:'Lk1'});
    // const airp2 =await city.createAirport({name:'Lucknow2',code:'Lk2'});

    // const airp1=await Airport.findByPk(5);

    // await City.destroy({
    //   where:{
    //     id:8
    //   }
    // })
})
