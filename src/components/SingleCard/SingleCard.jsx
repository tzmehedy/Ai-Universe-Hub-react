import React from 'react';

const SingleCard = (props) => {
    console.log(props);
    const {image, features, name, published_in} = props.singleData;
    console.log(features);

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-2xl">
                <figure><img src={image} alt="No image found" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Features</h2>
                    {
                        features.map((feature,index) =>(
                            <p>
                                {index + 1}. {feature}
                            </p>
                        ))
                    }
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;