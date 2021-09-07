import React from 'react'
import {Link} from 'react-router-dom';
import {useFetch} from './UseFetch';

const Activity = () => {

 let data = useFetch("https://www.boredapi.com/api/activity")

    return (
        <div>
            <h1 className="text-white text-center leading-loose font-bold text-2xl pt-6">Catch up an activity</h1>
            <h1 className="text-white text-center text-2xl px-4 mt-4"> <span className="text-blue-700">Type: </span><span className="capitalize">{data.type}</span></h1>

            <p className="text-white text-center text-2xl px-4 mt-4"><span className="text-blue-700">Activity: </span>{data.activity}</p>
            <p className="text-white text-center text-2xl px-4 mt-4"><span className="text-blue-700">No. of participants: </span>{data.participants}</p>
            <div className="flex flex-col items-center leading-loose mt-6 text-white text-xl">
            <button className="hover:text-blue-700">
            Go for another one</button>
            <Link to="*" className="hover:text-blue-700">Back to Home</Link>
            </div>
        </div>
    )
}

export default Activity
