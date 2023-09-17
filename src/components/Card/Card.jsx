import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Card = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        const loadData = async()=>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json()
            setData(value.data.tools);
        }
        loadData();
    },[])
    return (
        <>
            {
                data.map(singleData =>{
                    console.log(singleData);
                    return <SingleCard />
                })
            }
        </>
    );
};

export default Card;