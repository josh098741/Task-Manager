import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Body(){

    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(false)

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
                        loading ? <div className=" w-40 h-11 flex justify-between items-center p-3">
                            <div>Loading</div>
                            <div className='w-7 border-2 h-7 rounded-full border-l-blue-500 animate-spin'></div>
                        </div> 
                        : null
                    }
                </div>
                <div>
                    <div className="w-60 h-32 border p-2 rounded-lg flex flex-col justify-between">
                        <div>
                            <h1 className="text-center mb-0.5">Header Title</h1>
                            <p>Header Description</p>
                        </div>
                        
                        <div className="flex justify-between">
                            <span>Time of Creation</span>
                            <div>
                                <button>📝</button>
                                <button>🗑️</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Body