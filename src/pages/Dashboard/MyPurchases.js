import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../additional/FirebaseConfig';
import Loading from '../../additional/Loading';

const MyPurchases = () => {
    const [user, loading] = useAuthState(auth) // current User

    const { data: myPurchase, isLoading } = useQuery(['purchasesData', user], () =>
        fetch(`http://localhost:5000/mypurchases?userEmail=${user?.email}`)
        .then(res => res.json())
    )
    if(isLoading || loading){
        return <Loading></Loading>
    }
    console.log(myPurchase);
    return (
        <div>
            <h1>My Purchase{myPurchase?.length}</h1>
            {/* <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-28 mb-16 '>My Purchase</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-6 lg:px-20">
                {
                    myPurchase?.map( part =>
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
                                    <button  class="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary">Purchase Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div> */}
        </div>
    );
};

export default MyPurchases;