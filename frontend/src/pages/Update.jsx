import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'


function Update(){

    const [loading, setLoading] = useState(false)
    const [note, setNote] = useState({
        title: "",
        description: ""
    })

    const {id} = useParams()
    const navigate = useNavigate()

    const API_URL = `http://localhost:5000/api/notes/${id}`


    useEffect(() => {
        const fetchNotes = async () => {
            try{
                const res = await axios.get(API_URL)
                setNote({
                    title: res.data.data.title,
                    description: res.data.data.description
                })
            }catch(error){
                console.log("There was an error in fetching the task",error)
            }
        }
        fetchNotes()
    },[API_URL])

    return(
        <div className="h-[600px] flex justify-center items-center">
            <div className="border w-96 h-96 flex flex-col justify-center items-center border-gray-900">
                <form>
                    <div className="flex flex-col gap-5">
                        <div>
                            <label>Title</label>
                            <input name="title" value={note.title} type="text" className="border w-72 h-11 rounded-lg flex border-gray-900" />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea name="description" value={note.description} className="flex border w-72 h-24 border-gray-900"></textarea>
                        </div>
                        <button type="submit" className="border rounded border-gray-900">Update Content</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Update