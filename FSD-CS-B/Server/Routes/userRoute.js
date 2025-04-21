const express = require("express");
const {
  getAllUsers,getUser,createUser,editUser,deleteUser
} = require("../controller/userController");

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/user/:email", getUser);
router.post("/adduser", createUser);
router.put("/edit/:email", editUser);
router.delete("/delete/:email", deleteUser);

 

module.exports = router;
