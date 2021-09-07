import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {useFetch} from './UseFetch';

const Motivation = () => {

    const [num, setNum] = useState();

    let data = useFetch("https://type.fit/api/quotes")

    const test=()=>{
    setNum(Math.floor(Math.random() * 1500));
    }

    useEffect(()=>{
        test();
    },[])

        let obj1 = data[num];

    return (
        <div>
        <h1 className="text-white text-center leading-loose font-bold text-2xl py-2">Get Ignited !!!!</h1>
        <hr />
        <p className="text-white text-center text-2xl px-4 mt-4">{obj1?.text}</p>
        <p className="text-white text-center text-2xl px-4 mt-4">- {obj1?.author || "unknown"}</p>
        <hr className="mt-6"/>
      <div className="flex flex-col items-center leading-loose mt-2 text-white text-xl">
            <button className="hover:text-blue-700" onClick={test}>
            Go for another one</button>
            <Link to="*" className="hover:text-blue-700">Back to Home</Link>
            </div>
        </div>    
    )
}

export default Motivation
