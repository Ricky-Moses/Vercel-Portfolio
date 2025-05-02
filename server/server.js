import express from 'express'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

// Environment
dotenv.config()

// Instance express
const app = express()

// Mongodb Setup
const client = new MongoClient(process.env.MONGO_URL_PORTFOLIO)

// Route
app.get('/', async (req, res) => {
    try{
        await client.connect()
        const db = client.db('person')
        const collection = db.collection('user')
        const data = await collection.find().toArray()
        res.json(data)
    }
    catch(err){
        console.log(`Server Error ${err.message}`);
        res.status(500).json({message: 'Server Error'})
    }
})

// Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running - ${PORT}`);
})