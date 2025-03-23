import express from 'express';
import dotenv from "dotenv";   // for retriving the information from .env file securely   got it??haaaaaagood
import path from 'path';
// import connectDB from './db/connectdb.js';
import cookieParser from 'cookie-parser';   // generateWebToken anedi rasam kada..... aa cookie ni express ki kavalsina format lo parse chestundi (to string or something else )
import cors from "cors";   // frontend nunchi GET POST requests ni accept cheyyatam kosam idi
// import { v2 as cloudinary } from "cloudinary";
// import userRoutes from './routes/userRoutes.js'
import connectDB from './db/connectDB.js';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();

dotenv.config();  //.env file anedi mana folders lo unte andulo nunchi data teesko ani cheptundi ee line mana files lo .env  ane file undi anuko ... kavalssina information antha andulone untundi .... dani nunchi process.env.variablename ala access cheskondi chalu ani cheptundi  ogey
// ippudu nuvvu ee file ni girthub lo upload chesav anuko ... ne mongo db url and aa jwt cokkie ni vere vallu chustaru ga ala chudakudadu so anduke .env file ni include chesi git hub loki tose mundu aa  .env file ni teesi git loki pushing 
connectDB();  //mongo db connection code rasam ga ade idi
const port = process.env.PORT || 5000;
const __dirname=path.resolve();

// app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true })); // idi naku kuda teledu 
app.use(cookieParser());  //cookies unte vatini first deeniki icchi kavalsina format loki changing ...
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',  // mana frontend nunchi requests
  methods: 'GET,POST,PUT,DELETE',  
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
}));

// // Routes
app.use('/api/users', employeeRoutes);
// app.use('/api/posts/', postRoutes);
// app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	// react app
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(port, () => console.log(`listening on ${port} port hey`));


//got itr?? got got good 
// idi antha express boiler plate code 
// cluster ayina tarvata choose connectrion ani untadi -> drivers -> kinda copy chesi ... .env lo aa url petti ne password neethu 123 pettu tarvata mongo db lo ki vacchi kinda network access lo 