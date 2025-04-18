const User=require("../model/user");

const getAllUsers=async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({message:err.message})
    }

}
const getUser=async(req,res)=>{
    try{
        const email=req.params.email
        const users=await User.find({email});
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({message:err.message})
    }

}
const createUser=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;
        const newUser=new User({name,email,password,role});
        const user=await newUser.save();
       
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({message:err.message})
    }

}
const editUser=async(req,res)=>{
    try{
        const email = req.params.email;
        const {name,password,role}=req.body;
        const updatedUser=User.findOneAndUpdate({email},{name,password,role},{new:true});

       
        res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(500).json({message:err.message})
    }

}
const deleteUser=async(req,res)=>{
    try{
        const email = req.params.email;
      
        const deletedUser=User.findOneAndDelete({email});

       
        res.status(200).json(deletedUser);
    }
    catch(err){
        res.status(500).json({message:err.message})
    }

}

module.exports={getAllUsers,getUser,editUser,createUser,deleteUser};