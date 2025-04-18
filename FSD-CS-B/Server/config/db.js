const mongoose=require("mongoose");
const dotenv=require("dotenv");

dotenv.config();

const URL=process.env.MONGO_URL;

const dbConnect=async()=>{
    try{
        await mongoose.connect(URL);
        console.log("mongodb connected");
    }
    catch(err){
        console.log("Db error",err.message)

    }
}
module.exports=dbConnect;