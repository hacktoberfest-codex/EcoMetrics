import mongoose from  'mongoose'
const Schema = new mongoose.Schema({
	name:{
		type :String ,
		required:[true,"Please add an Username"],
		unique:true
			
	},
	email:{
		type :String ,
		required:[true,"Please add an Email"],
		unique:true
			
	},
	password: {
		type: String,
		required:[true,"Please add a Name"]
	},
	phone: {
		type: Number,
		required:[true,"Please add a Phone-Number"]
	},
});

const database=mongoose.model("User",Schema);
export default database;
			