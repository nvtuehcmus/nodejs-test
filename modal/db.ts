import {MongoClient} from "mongodb";
import dotenv from "dotenv";
dotenv.config();
export default new MongoClient(process.env.CONNECTION ??"",{maxPoolSize:10});


