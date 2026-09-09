const express = require("express"); //  express imported
const app=express(); // express Application
const dotenv=require("dotenv")
const path=require('path')
const cors=require('cors')
dotenv.config({
    path: path.join(__dirname,'config','config.env')})
const connectDatabase= require('./config/ConnectDatabase')
const products=require('./routes/product');
const orders=require('./routes/Order');
const orderModel = require("./models/OrderModel");

connectDatabase();
app.use(express.json());
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',orders)


app.listen(process.env.PORT,()=>{
    console.log(`server listening to the port ${process.env.PORT} in ${process.env.NODE_ENV}`)
} 
)
