import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Body(){

    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(false)

    const API_URL="http://localhost:5000/api/notes"

    useEffect(() => {
        const fetchNotes = async () => {
            try{
                setLoading(true)
                const res = await axios.get(API_URL)
                console.log(res.data.data)
                setNotes(res.data.data)
            }catch(error){
                console.log("Error in fetching notes",error)
            }finally{
                setLoading(false)
            }
        }
        fetchNotes()
    },[])

    const deleteNote = async (id) => {
        try{
            await axios.delete(`${API_URL}/${id}`)
            setNotes(notes.filter((note) => note._id !== id))
        }catch(error){
            console.log("Failed to delete the note",error)
        }
    }

    return(
        <>
            <div className='flex justify-end mr-20 mt-20'>
                <Link to="/create"><button className="border p-3">Create A Note</button></Link>
            </div>
            <div className="m-10 h-96 mt-0">
                <div>
                    <p className="text-center font-bold text-xl">
                        Take Your Notes here and view them Any time
                        <span className="text-blue-500"> We Are Here For You</span>
                    </p>
                </div>
                <div className='flex justify-center'>
                    {
                        loading && (<div className=" w-40 h-11 flex justify-between items-center p-3">
                            <div>Loading</div>
                            <div className='w-7 border-2 h-7 rounded-full border-l-blue-500 animate-spin'></div>
                        </div>)
                    }
                </div>
                <div className="flex flex-wrap gap-5 justify-center">
                    {
                        notes && notes.length > 0 ? (
                            notes.map((note) => (
                               <div key={note._id} className="w-60 h-32 border p-2 rounded-lg flex flex-col justify-between">
                                    <div>
                                        <h1 className="text-center mb-0.5">{note.title}</h1>
                                        <p>{note.description}</p>
                                    </div>
                            
                                    <div className="flex justify-between">
                                        <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                                        <div>
                                            <Link to="/update">
                                                <button className='mx-2 bg-blue-500 w-7 h-7 rounded-full hover:bg-red-600 transition'>📝</button>
                                            </Link>
                                            <button className='mx-2 bg-blue-500 w-7 h-7 rounded-full hover:bg-red-600 transition' onClick={() => deleteNote(note._id)}>🗑️</button>
                                        </div> 
                                    </div>
                                </div> 
                            ))
                        ) : (
                            !loading && <p>No Notes Available</p>
                        )
                    }
                    
                </div>
            </div>
        </>
        
    );
}

export default Body