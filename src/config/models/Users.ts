import mongoose, { Schema, model, models } from 'mongoose';


interface User {
  name:string
  email:string
  username:string
  password:string
  friendRequests?:any[]
  friends?:any[]
  messages?:any[]
  date?:Date
  status?:string
  profile:string
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  friendRequests:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:"User",
  },
  friends:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:"User",
  },
  messages:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:"messages"
  },
  date:{
    type:Date,
    default:new Date()
  },
  status:{
    type:String,
  },
  profile:{
    type:String,
    required:true
  }
});

const User = models.User || model('User', userSchema);

export default User;