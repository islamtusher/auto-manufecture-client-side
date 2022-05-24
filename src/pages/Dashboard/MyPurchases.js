import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../additional/FirebaseConfig';
import Loading from '../../additional/Loading';

const MyPurchases = () => {
    const [user, loading] = useAuthState(auth) // current User

    const { data: myPurchase, isLoading } = useQuery(['purchasesData', user], () =>
        fetch(`http://localhost:5000/mypurchases?email=${user?.email}`)
        .then(res => res.json())
    )
    if(isLoading || loading){
        return <Loading></Loading>
    }
    console.log(myPurchase);
    return (
        <div>
            <h1>My Purchase{myPurchase?.length}</h1>
        </div>
    );
};

export default MyPurchases;