const Note = require('../models/Note')

const createNote = async (req,res) => {
    try{
        const note = await Note.create(req.body)
        res.status(201).json({success: true, data: note})
    }catch(error){
        res.status(500).json({success: false, message: "There was an error in creating note"})
    }
}

const getNotes = async (req,res) => {
    try{
        const notes = await Note.find()
        if(notes.length === 0){
           return res.status(404).json({success: false, message: "There were no notes in database"})
        }
        res.status(200).json({success: true, data: notes})
    }catch(error){
        res.status(500).json({success: false, message: "There was an error in retrieving notes"})
    }
}

const getNote = async (req,res) => {
    try{
        const note = await Note.findById(req.params.id)
        if(!note){
            return res.status(404).json({success: false, message: "The note was not found"})
        }
        res.status(200).json({success: true, data: note})
    }catch(error){
        res.status(500).json({success: false, message: "There was an error in getting the note"})
    }
}

const updateNote = async (req,res) => {
    try{
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!note){
            return res.status(404).json({success: false, message: "The note to update was not found"})
        }
        res.status(200).json({success: true, data: note})
    }catch(error){
        res.status(500).json({success: false, message: "There was an error in updating the note"})
    }
}

const deleteNote = async (req,res) => {
    try{
        const note = await Note.findByIdAndDelete(req.params.id)
        if(!note){
            return res.status(404).json({success: false, message: "The note to delete was not found"})
        }
        res.status(200).json({success: true, message: "note was deleted successfully"})
    }catch(error){
        res.status(500).json({success: false, message: "There was an error in deleting the note"})
    }
}

module.exports = {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
}