const User = require('../models/user');
const jwt = require('jsonwebtoken');


const createUser = async (req, res) => {
  let myUser = new User(req.body);
  console.log(myUser);
  try {
    await myUser.save();
    console.log(req.body.email)
    res.status(200).json({ newUser: myUser });
  }
  catch (error) {
    res.send("cannot save new user: ", error.message);
  }
};


const getAllUser = async (req, res) => {
  console.log("#######getAllUser#############");
  try {
      const user = await User.find()
      console.log(user);
     
      res.status(200).json("user:",user)
  }
  catch (err) {
      res.status(500).json({ error: err.message })
  }
}



module.exports = { createUser,getAllUser }







// const func = () => {
//   let token = jwt.sign({ name: "", password: "" }, process.env.ACSESS_TOKEN_SECRET)
//   console.log("token:", process.env.ACSESS_TOKEN_SECRET);
//   let decoded=jwt.verify(token,'secret')
//   console.log("decoded:", decoded);

// }
















