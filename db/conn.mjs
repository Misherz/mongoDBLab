import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config()

//create connection string
let connectionString = process.env.atlasURI || '';

const client = new MongoClient(connectionString);

//Variable to hold connection info
let conn;

try {
     conn = await client.connect();
    console.log(`Mongo DB Connected`)
} catch (err) {
    console.error(err)
}

let db = conn.db('sample_training')

export default db;