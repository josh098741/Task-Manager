const mongoose = require('mongoose');

const connectDB = async (url) => {
    try{
        await mongoose.connect(url);
        console.log('Successfully Loaded up the Database')
    }catch(error){
        console.error(`Failed to load up the database`)
    }
}

module.exports = connectDB