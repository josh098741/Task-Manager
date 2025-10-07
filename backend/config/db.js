const mongoose = require('mongoose')

const connectdb = async (url) => {
    try{
        await mongoose.connect(url)
        console.log("Database connected successfully")
    }catch(error){
        console.log("There was an error in loading the  database")
    }
}

module.exports = connectdb