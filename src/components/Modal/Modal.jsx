import React from 'react';

const Modal = (props) => {
    const {description,image_link,features,integrations} =props.modalData;
    
    
    return (
        <>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='flex justify-between'>
                        <div className='w-full border border-error m-2 p-2'>
                            <h2>{description}</h2>
                            <div className='flex justify-between mt-5'>
                                <div>
                                    <h1>Features</h1>
                                    {
                                        Object.values(features || {}).map((feature,index) => (
                                            <p>{index+1}. {feature.feature_name ? feature.feature_name : "No feature found"}</p>
                                        ))
                                    }
                                </div>
                                <div>
                                    <h1>Intigrations</h1>
                                    {
                                        integrations && integrations.map((integration,index) => (
                                        <p>
                                            {index}. {integration?integration:"no integration found"}
                                        </p>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                        <div className=''>
                            <img src={image_link && image_link[0]} alt="No Image Found" />
                        </div>
                    </div>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
            
        </>
    );
};

export default Modal;