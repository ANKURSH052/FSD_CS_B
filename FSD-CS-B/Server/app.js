const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const Port=process.env.PORT||3000;

const dbConnect=require("./config/db");
const userRoute=require("./Routes/userRoute");
app.use(express.json());


dbConnect();
app.use("/", userRoute);
app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`)
});

