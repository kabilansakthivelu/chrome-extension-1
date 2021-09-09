import React, {useState, useEffect} from 'react'
import {useFetch} from './UseFetch';
import Header from './Header';
import Footer from './Footer';

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
        <Header heading="Get Ignited !!!!"/>
        <div className="flex flex-col h-52 justify-center">
        <p className="text-white text-center text-2xl px-4 mt-4">{obj1?.text}</p>
        <p className="text-white text-center text-2xl px-4 mt-2">- {obj1?.author || "unknown"}</p>
        </div>
        <hr className="mt-4"/>
        <Footer test={test}/>
        </div>    
    )
}

export default Motivation
