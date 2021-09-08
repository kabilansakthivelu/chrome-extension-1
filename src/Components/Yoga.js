import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {asanas} from './yoga-asanas';
import Footer from './Footer';

const Yoga = () => {

    const [num, setNum] = useState();
    const [loading, setLoading] = useState(true);

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
        <Footer test={test}/>
        </div>    
    )
}

export default Yoga
