const router=require("express").Router();
const user=require("../controllers/user")


router.post('/newUser',user.createUser);



module.exports=router;