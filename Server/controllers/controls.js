import database from '../models/user.js'
import * as bcrypt from 'bcrypt'
import  WQIDATA  from '../csvjson.js'
const {User,WQI}=database
const postData=async (req,res)=>{
	const { name, email, password } = req.body;
	const data={
		name:name,
		email:email,
		password:password

}
try {
	let salt=await bcrypt.genSalt()
	let hashpassword=await bcrypt.hash(data.password,salt)
	data.password=hashpassword
	const user=new User(data);
	await user.save() 
	res.json({message:"success",user:user});

} catch (error) {
	// res.send("Not added Successfully !")
	console.log(error);
	res.json({message:"failure"});
}

}

const authData=async(req,res)=>{
	const{name,password}=req.body
	try {
		
		
		const user =await User.findOne({name:name});
		console.log(user);
		let auth=await bcrypt.compare(password,user.password)
		if(user){

			if(!auth){
				 res.json({message:"Wrong Credentials !"});
				 
				}
				else	
				res.json({message:"authorized"});
				navigate('/About')
					
		}
			

} 
catch (error) {
	console.log(error);
	res.status(500).send("something went wrong!")
}

}

const fetchWQI=async(req,res)=>{
	const{STATE}=req.body
	const data=WQIDATA.filter(data=>data.STATE==STATE)
	// const data=await WQI.findOne({STATE:STATE})
	res.json(data)
}
const ab={postData,authData,fetchWQI}
export default ab;