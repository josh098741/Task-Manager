const Note = require('../models/Note')

const createNote = async (req,res) => {
    try{

    }catch(error){
        res.status(500).json({success: false, message: "There was an error in creating note"})
    }
}

const getNotes = async (req,res) => {
    try{

    }catch(error){
        res.status(500).json({success: false, message: "There was an error in getting notes"})
    }
}

const getNote = async (req,res) => {
    try{

    }catch(error){
        res.status(500).json({success: false, message: "There was an error in getting the note"})
    }
}

const updateNote = async (req,res) => {
    try{

    }catch(error){
        res.status(500).json({success: false, message: "There was an error in updating the note"})
    }
}

const deleteNote = async (req,res) => {
    try{
        const note = Note.findByIdAndDelete(req.params.id)
        if(!note){
            res.status(400).json({success: false, message: "The not to delete was note found"})
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