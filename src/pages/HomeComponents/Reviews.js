import React from 'react';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { HashLink } from 'react-router-hash-link';
import Loading from '../../additional/Loading';

const Reviews = () => {
     // load single part
     const { data : reviews, isLoading , error } = useQuery('part', () => 
     fetch(`https://calm-retreat-24478.herokuapp.com/reviews`)
         .then(res =>res.json())
 )
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(reviews);
    return (
        <div id='reviews' className='my-20'>
            <h1>reviews</h1>
            <div className="lg:hidden">
                <div class="carousel w-full">
                    {
                        reviews.map((review, index) =>
                            <div id={`mobile-item-${index + 1}`} class="carousel-item space-x-4 w-full">
                                <img src={review.image} class="rounded-box w-full" alt='banner-img'/>
                            </div>
                        )
                    }
                    
                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                    {
                        reviews.map((review, index) =>
                            <HashLink
                                smooth to={`#mobile-item-${index + 1}`}
                                className="w-4 h-4 rounded-full bg-primary">
                            </HashLink> 
                        )
                    }
                </div>
            </div>
            <div className="hidden lg:block">
                <div class=" carousel  max-w-[75%] mx-auto p-4  space-x-4  rounded-box">
                {
                    reviews.map((review, index) =>
                        <>
                        <div id={`item-${index + 1}`} class="carousel-item w-1/2 space-x-4">
                            <div class="card card-side  shadow-sm p-4">
                                <div className="">
                                    <figure className='mb-4'>
                                        <img src={review.image} className='w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' alt="Movie" />
                                    </figure>
                                    <h2 class="fond-bold">{review.name}</h2>
                                    <p className='text-gray-400'>{review.country}</p>
                                </div>
                                <div class="card-body p-0 pl-10">
                                    <div class="card-actions justify-start">
                                        <article className='font-bold text-secondary'>{review.review}</article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                        )
                } 
                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                    <div class="flex justify-center w-full py-2 gap-2">
                    {
                        reviews.map((review, index) =>
                            <>
                                <NavHashLink smooth to={`/home#item-${index + 1}`} className="w-4 h-4 rounded-full bg-primary"></NavHashLink> 
                            
                            </> 
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;