import  express  from "express";
import ab from "../controllers/controls.js";
// const {ab.postData, ab.authData}=require('../controllers/controls')
	const router=express.Router()
	router.post('/',ab.postData);
	router.post('/auth',ab.authData) 
	router.post('/fetchData',ab.fetchWQI)

	export default router ;