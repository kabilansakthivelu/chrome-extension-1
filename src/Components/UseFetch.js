import {useState, useEffect} from 'react';

export const useFetch = (url) =>{

    const [result, setResult] = useState([])

    const fetchResults = async () =>{
        const res = await fetch(url)
        const data = await res.json()
        setResult(data);
    }
    
useEffect(()=>{
    fetchResults();
    },[url])

    return result;

}