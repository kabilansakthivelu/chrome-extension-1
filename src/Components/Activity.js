import React, {useState, useEffect} from 'react'
import Footer from './Footer';
const Activity = () => {

    const [data, setData] = useState([]);

    const test = async ()=>{
        const ans1 = await fetch("https://www.boredapi.com/api/activity");
        const ans2 = await ans1.json();
        setData(ans2);
    }

    useEffect(()=>{
        test()
    },[])
    
    return (
        <div>
            <h1 className="text-white text-center leading-loose font-bold text-2xl py-2">Catch up an activity</h1>
            <hr />
            <div className="flex flex-col h-52 justify-center">
            <h1 className="text-white text-center text-2xl px-4 mt-4">Type: <span className="capitalize">{data?.type}</span></h1>
            <p className="text-white text-center text-2xl px-4 mt-4">Activity: {data?.activity}</p>
            <p className="text-white text-center text-2xl px-4 mt-4">No. of participants: {data?.participants}</p>
            </div>
            <hr className="mt-6"/>
           <Footer test={test}/>
        </div>
    )
}

export default Activity