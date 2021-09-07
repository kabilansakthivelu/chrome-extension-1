import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {useFetch} from './UseFetch';

const Activity = () => {

    let data = useFetch("https://www.boredapi.com/api/activity")
    console.log(data);

    const [val, setVal] = useState();

    const test = () =>{
        setVal(data);
    }

    useEffect(()=>{
        test()
    },[])
    
    return (
        <div>
            <h1 className="text-white text-center leading-loose font-bold text-2xl py-2">Catch up an activity</h1>
            <hr />
            <h1 className="text-white text-center text-2xl px-4 mt-4">Type: <span className="capitalize">{data?.type}</span></h1>

            <p className="text-white text-center text-2xl px-4 mt-4">Activity: {data?.activity}</p>
            <p className="text-white text-center text-2xl px-4 mt-4">No. of participants: {data?.participants}</p>
            <hr className="mt-6"/>
            <div className="flex flex-col items-center leading-loose mt-2 text-white text-xl">
            <button className="hover:text-blue-700" onClick={test}>
            Go for another one</button>
            <Link to="*" className="hover:text-blue-700">Back to Home</Link>
            </div>
        </div>
    )
}

export default Activity
