import React, {useState, useEffect} from 'react';
import Footer from './Footer';

const Word = () => {

    const [data, setData] = useState([]);
    const test = async () =>{
        const ans1 = await fetch("https://random-words-api.vercel.app/word");
        const ans2 = await ans1.json();
        setData(ans2);
    }

    useEffect(()=>{
        test()
    },[])

    return (
        <div>
            <h1 className="text-white text-center leading-loose font-bold text-2xl py-2">Learn a new word</h1>
            <hr />
            <div className="flex flex-col h-52 justify-center">
            <h1 className="text-white text-center leading-loose text-2xl mt-4 px-4">Word: {data[0]?.word}</h1>
            <h1 className="text-white text-center text-2xl px-4">Definition: {data[0]?.definition}</h1>
            <p className="text-white text-center leading-loose text-2xl mb-4 px-4">Pronounciation: {data[0]?.pronunciation}</p>
            </div>
            <hr className="mt-6"/>
           <Footer test={test}/>
        </div>
    )
}

export default Word
