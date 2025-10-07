import React,{useState} from 'react'

function Body(){

    const [loading, setLoading] = useState(false)

    return(
        <div className="m-20 border h-96">
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
                    : <div></div>
                }
            </div>
        </div>
    );
}

export default Body