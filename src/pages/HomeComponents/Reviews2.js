import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../additional/Loading';

const Reviews2 = () => {
    const { data: reviews, isLoading } = useQuery(['reviewsData'], () => 
        fetch('reviews.json')
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    } else {
        
        console.log(reviews);
    }
    return (
        <div>
            <h1>Reviews : {reviews?.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-6 lg:px-44">
            {
                reviews.map(review => <>
                    <div class="card card-side shadow-sm p-4">
                        <div className="">
                            <figure className='mb-4'>
                                <img src={review.image} className='w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' alt="Movie" />
                            </figure>
                            <h2 class="fond-bold">{review.name}</h2>
                            <p className='text-gray-400'>{review.country}</p>
                        </div>
                        <div class="card-body p-0 pl-10">
                            <div class="card-actions justify-start">
                                <article className='font-bold leading-relaxed '>{review.review}</article>
                            </div>
                        </div>
                    </div>
                </>)
            }
            </div>
        </div>
    );
};

export default Reviews2;