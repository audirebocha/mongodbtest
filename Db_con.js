import mongoose from "mongoose";


async function db_connect(){
    var uri="mongodb+srv://root:123@cluster0.u5atqck.mongodb.net/sharespace?retryWrites=true&w=majority"
    try{
        await mongoose.connect(uri);
        console.log('Connected to Mongo DB at admin_functions');
    }catch(error){
        console.error(error)
    }
}

export default db_connect