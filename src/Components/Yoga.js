import React from 'react';
import {Link} from 'react-router-dom';
import {asanas} from './yoga-asanas';

const Yoga = () => {

    const var1 = Math.floor(Math.random() * 48);
    const obj1 = asanas[var1];

    return (
        <div>
        <h1 className="text-white text-center leading-loose font-bold text-2xl py-1">Asana : {obj1?.sanskrit_name}</h1>
        <hr />
        <img src={obj1?.img_url} alt="asana_posture" className="w-75 h-64 pl-14"/>
        <hr className="mt-1"/>
      <div className="flex flex-col items-center leading-loose text-white text-xl">
            <button className="hover:text-blue-700">
            Go for another one</button>
            <Link to="*" className="hover:text-blue-700">Back to Home</Link>
            </div>
        </div>    
    )
}

export default Yoga
