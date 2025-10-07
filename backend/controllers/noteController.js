const Note = require('../models/Note')

const createNote = async (req,res) => {
    try{

    }catch(error){
        res.status(500).json({success: false, message: "There was an error in creating note"})
    }
}

const getNotes = async (req,res) => {}

const getNote = async (req,res) => {}

const updateNote = async (req,res) => {}

const deleteNote = async (req,res) => {}

module.exports = {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
}