require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')
const connectDB = require('./db/connect')

app.use(express.json());
app.use(express.static(path.join(__dirname,'..','frontend')))

const PORT = process.env.PORT || 5000
const start = async (req,res) => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT,() => {console.log('Server running on Port 5000')});
    }catch(error){
        console.error('Failed in the start process');
    }
}

start();