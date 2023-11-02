import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Card = () => {
    const [data,setData] = useState([]);
    const [modalData,setModalData] = useState({});
    const [showAll,setShowAll] = useState(false);
    const [handleId,setHandleId] = useState(null);
    
   
    const handleShowAll = () => {
        setShowAll(true);
    }
    useEffect(()=>{
        const loadData = async()=>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json()
            setData(value.data.tools);
        }
        loadData();
    },[])

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${handleId}`)
        .then(res=>res.json())
        .then(data=>setModalData(data.data));
    },[handleId])
    
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-6 px-6'>
                {
                    data.slice(0,showAll ? 12 : 6).map(singleData => <SingleCard singleData={singleData}  setHandleId = {setHandleId} key={singleData.id}></SingleCard>)
                }
            </div>
            {
                !showAll && 
                < span onClick={handleShowAll}>
                 <Button>Show More</Button>
                </span >
            }
            <Modal modalData={modalData}/>
        </>
    );
};

export default Card;