import * as mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    from:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    message:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        default:new Date()
    }
})

export const MessageModel = mongoose.model("messages",messageSchema)