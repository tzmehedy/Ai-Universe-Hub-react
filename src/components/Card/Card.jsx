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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-6 px-6'>
                {
                    data.map(singleData => <SingleCard singleData={singleData} key={singleData.id}></SingleCard>)
                }
            </div>
        </>
    );
};

export default Card;