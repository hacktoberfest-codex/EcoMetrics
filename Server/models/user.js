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
	// phone: {
	// 	type: Number,
	// 	required:[true,"Please add a Phone-Number"]
	// },
});
// const WQISchema = new mongoose.Schema({
// 	"B.O.D. (mg/l)":{
// 		type :[int32,double,string] ,
// 		required:[true,"Please add an Username"],
// 		unique:true
			
// 	},
// 	"CONDUCTIVITY (�mhos/cm)":{
// 		type :[int32,double,string] ,
// 		required:[true,"Please add an Email"],
// 		unique:true
			
// 	},
// 	"D.O. (mg/l)": {
// 		type: [double,int32],
// 		required:[true,"Please add a Name"]
// 	},
// 	"FECAL COLIFORM (MPN/100ml)": {
// 		type: [int32,string,double],
// 		required:[true,"Please add a Phone-Number"]
// 	},
	
// 	"LOCATIONS":{
// 		type :String ,
// 		required:[true,"Please add an Email"],
// 		unique:true
			
// 	},
// 	"NITRATENAN N+ NITRITENANN (mg/l)": {
// 		type: [double,string,int32],
// 		required:[true,"Please add a Name"]
// 	},
// 	"PH": {
// 		type: [double,int32],
// 		required:[true,"Please add a Phone-Number"]
// 	}
// 	,
// 	"STATE": {
// 		type: String,
// 		required:[true,"Please add a Phone-Number"]
// 	},
	
// 	"STATION CODE":{
// 		type :[String,int32] ,
// 		required:[true,"Please add an Email"],
// 		unique:true
			
// 	},
// 	"Temp": {
// 		type: [int32,double],
// 		required:[true,"Please add a Name"]
// 	},
// 	"TOTAL COLIFORM (MPN/100ml)Mean": {
// 		type: [int32,string],
// 		required:[true,"Please add a Phone-Number"]
// 	}
// 	,
// 	"year": {
// 		type: int32,
// 		required:[true,"Please add a Phone-Number"]
// 	}
// });

const User=mongoose.model("User",Schema);
// const WQI=mongoose.model("WQI",WQISchema);

const database={User}
export default database;
			