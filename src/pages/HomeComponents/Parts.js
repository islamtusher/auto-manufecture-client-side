import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../additional/FirebaseConfig';
import Loading from '../../additional/Loading';

const Parts = () => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    
    const { data : parts, isLoading , error } = useQuery(['repoData', user], () => 
        fetch('http://localhost:5000/parts')
            .then(res =>res.json())
    )
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    console.log(parts);
    return (
        <div>
            <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-28 mb-16 '>AVAILABLE PARTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-6 lg:px-20">
                {
                    parts?.map( part =>
                        <div key={part?._id} class="card card-compact shadow-md hover:-translate-y-6 hover:scale-105 hover:shadow-xl duration-700">
                            <figure><img className='w-[220px]' src={part?.image} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title text-primary">{part.name}</h2>
                                <div className="text-stone-500 text-[17px]">
                                    <p class="mb-1">Minimum Order: {part.minimumQuantity} pcs</p>
                                    <p class="">Available Now: {part.availableQuantity} pcs</p>
                                </div>
                                <p className=' text-stone-400'>{part.describe}</p>
                                <div class="card-actions items-center justify-end">
                                    <p class="text-xl font-bold	"><span className='text-primary'>$</span>{part.price}</p>
                                    <button onClick={()=>navigate(`/purchase/${part?._id}`)}  class="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary">Purchase Now</button>
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