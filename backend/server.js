require('dotenv').config()
const express = require('express')
const cors = require('cors')

const connectdb = require('./config/db')
const notesRouter = require('./routes/noteRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/notes',notesRouter)

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

const start = async () => {
    try{
        await connectdb(MONGO_URI)
        app.listen(PORT, () => {
            console.log("Server started successfully")
        })
    }catch(error){
        console.error("There was an error in running the server")
    }
}

start()