import * as mongoose from 'mongoose'

const mongoURI = "mongodb+srv://khanbalochmuzammilabbas:khansahib@cluster0.aw7xhsy.mongodb.net/chat-app"

const mongoConnect = async () => {
    await mongoose.connect(mongoURI).then(()=>{
        console.log("MongoDB Connected")
    }).catch((e)=>{
        console.log(e)
    })
}

export default mongoConnect;