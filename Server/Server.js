// const express=require("express")
// const connect=require("./controllers/connect")
// const routes=require("./routes/route")
// const cors=require('cors')
// const app=express() 
// app.use(cors({ 
// 	origin:'*'
// })) 
// app.use(express.json()) 
// app.use(express.urlencoded({extended:true}))
// const run=async()=>connect();
// run()
// app.get('/',(req,res)=>{
// 	res.json({message:"hello"}) 
// })
// app.use('/login',routes)

// app.listen(5000,()=>{console.log(`Server started @ http:/localhost`);})
import express, { response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import connect from "./controllers/connect.js";
import router from "./routes/route.js";

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors({ 
	origin:'*'
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const run=async()=>connect();
run()

app.use('/login',router)

app.get("/aichatbot", async (req, res) => {
  res.status(200).send({
    message: "This is the Route of the Chart bot",
  });
});
app.get("/aqi", async (req, res) => {
  res.status(200).send({
    message: "This is the Route of the openweatherapp aqi",
  });
});
app.get("/login", async (req, res) => {
  res.status(200).send({
    message: "This is the Route of the Auth",
  });
  
});
app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hi Am UP and running this is the home route",
  });
});
app.get("/loca", async (req, res) => {
  res.status(200).send({
    message: "This is the Route of the location",
  });
  
});

app.post("/aichatbot", async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error || "Something went wrong");
  }
});
// Calculate the end date as today's date
const endDate = new Date();

// Calculate the start date as 7 days before today's date
const startDate = new Date(endDate);
startDate.setDate(endDate.getDate() - 7);

// Convert both dates to Unix timestamps (in seconds)
const startTimestamp = Math.floor(startDate.getTime() / 1000);
const endTimestamp = Math.floor(endDate.getTime() / 1000);

const apiKey = process.env.OPENWEATHER_API_KEY;
app.post("/aqi", async (req, res) => {
  console.log(req.body.prompt);
  const apiloc = `http://api.openweathermap.org/geo/1.0/direct?q=${req.body.prompt}&limit=1&appid=${apiKey}`;
  fetch(apiloc)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        console.log("Location not found.");
        return;
      }
      console.log(data);
      const lat = data[0].lat;
      const long = data[0].lon;
      const apiUrl = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${long}&start=${startTimestamp}&end=${endTimestamp}&appid=${apiKey}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === "404") {
            console.log("Location not found.");
            return;
          }
          res.status(200).send({
            bot: data,
          });
        })
        .catch((error) => {
          console.log("Error occurred:", error);
        });
    })
    .catch((error) => {
      console.log("Error occurred:", error);
    });
});
  app.post("/loca", async (req, res) => {
    try {
      const {lat,lon}=req.body;
      const apiUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === "404") {
            console.log("Location not found.");
            return;
          }
          res.status(200).send({
            bot: data,
          });
        })
        .catch((error) => {
          console.log("Error occurred:", error);
        });
    } catch (error) {
      console.error(error);
      res.status(500).send(error || "Something went wrong");
    }
  });

app.listen(5000, () =>
  console.log("AI server started on http://localhost:5000")
);
