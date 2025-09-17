const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter The name of the task to be displayed']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.Schema('Task',TaskSchema)