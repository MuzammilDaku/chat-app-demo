import * as mongoose from 'mongoose'

let connected = false ;

const mongoConnect = async () => {
    if(connected ) {
        return ;
    }
    try {
        await mongoose.connect(String(process.env.DB_URL)).then(()=>{
            connected = true;
        }).catch((e)=>{
            console.log("Error in connection of DB",e)
        })
    } catch (error) {
        console.log(error)
    }
  
}

export default mongoConnect;