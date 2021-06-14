const mongoose=require('mongoose');
// const { Stream } = require('stream');
const userSchema=mongoose.Schema({
 name:{
     type:String,
     require
 },
 age:{
     type:String,
     require
 },
 city:{
    type:String,
    require
},
email:{
    type:String,
    require
},
phone:{
    type:String,
    require
},
})
module.exports=mongoose.model('user',userSchema)