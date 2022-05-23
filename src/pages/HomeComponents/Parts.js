import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../additional/Loading';

const Parts = () => {
    const [parts, setParts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // const { data, isLoading , error } = useQuery('repoData', () => {
    //     fetch('parts.json')
    //         .then(res =>res.json())
    // })
    useEffect(() => {
        fetch('parts.json')
        .then(res => res.json())
        .then(data => {
            setParts(data)
            setIsLoading(false)
        })
    },[])
    
    if (isLoading) {
        return <Loading></Loading>
    }
    // if (error) {
    //     console.log(error);
    // }
    console.log(parts);
    return (
        <div>
            <h1>parts: {parts?.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-6 lg:px-20 my-28">
                {
                    parts.map( part =>
                        <div key={part?._id} class="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={part?.image} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Parts;