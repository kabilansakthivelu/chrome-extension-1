import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {asanas} from './yoga-asanas';

const Yoga = () => {

    const [num, setNum] = useState();

    const test = () =>{
    setNum(Math.floor(Math.random() * 48));
    }

    useEffect(()=>{
        test();
    },[])

    let obj1 = asanas[num];

    return (
        <div>
        <h1 className="text-white text-center leading-loose font-bold text-2xl py-1">Asana : {obj1?.sanskrit_name}</h1>
        <hr />
        <div id="image-section">
        <img loading="eager" src={obj1?.img_url || "image not found"} alt="asana_posture" className="w-75 h-64 pl-14"/> 
        </div>
        <hr className="mt-1"/>
      <div className="flex flex-col items-center leading-loose text-white text-xl">
            <button className="hover:text-blue-700" onClick={test}>
            Go for another one</button>
            <Link to="*" className="hover:text-blue-700">Back to Home</Link>
            </div>
        </div>    
    )
}

export default Yoga
