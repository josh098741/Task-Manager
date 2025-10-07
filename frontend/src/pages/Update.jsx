import React,{useState} from 'react'
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

    return(
        <div className="h-[600px] flex justify-center items-center">
            <div className="border w-96 h-96 flex flex-col justify-center items-center border-gray-900">
                <form>
                    <div className="flex flex-col gap-5">
                        <div>
                            <label>Title</label>
                            <input type="text" className="border w-72 h-11 rounded-lg flex border-gray-900" />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea className="flex border w-72 h-24 border-gray-900"></textarea>
                        </div>
                        <button type="submit" className="border rounded border-gray-900">Update Content</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Update