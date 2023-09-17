import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()
const connect=async ()=>{
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("MongoDb connected !!");
	} catch (error) {
				console.log("MongoDb Unable to Connect ");
	}
}

export default connect;
