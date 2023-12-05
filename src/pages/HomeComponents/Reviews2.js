import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import ReactStars from 'react-rating-stars-component';
import auth from '../../additional/FirebaseConfig';
import Loading from '../../additional/Loading';
import api from '../../network/network'
import axios from "axios";

const Reviews2 = () => {
  const [user, loading] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);
  const [dataLoading, setDataLoading] = useState(false)

  // Make a request for a user with a given ID
  useEffect(() => {
    setDataLoading(true)
     axios
       .get(`${api}/reviews`)
       .then((resp) => {
         // handle success
         setReviews(resp.data)
          setDataLoading(false);
       })
       .catch((error) => {
        setDataLoading(false);
         // handle error
         console.log(error);         
       });
  }, [])
  
   if (dataLoading || loading) {
     return <Loading></Loading>;
   }
 
  return (
    <div>
      <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-28 mb-16 '>
        What Our Clients Say
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 lg:px-40">
        {reviews &&
          reviews.map((review, index) => (
            <div
              key={index}
              className="card lg:card-side shadow-sm gap-y-6 lg:p-4"
            >
              <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
                <img
                  data-aos="zoom-in"
                  src={user?.photoURL ? user.photoURL : review.image}
                  className="w-12 mb-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                  alt="Movie"
                />
                <h2 className="">{review.name}</h2>
                <p className="text-gray-400">{review.country}</p>
              </div>
              <div className="card-body p-0 lg:w-3/4">
                <div className="card-actions justify-start">
                  <article className='font-bold leading-relaxed text-justify font-["Poppins"]'>
                    {review.review}
                  </article>
                </div>
                <ReactStars
                  edit={false}
                  value={review.rating}
                  size={24}
                  isHalf={true}
                  activeColor="#ff7607"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
                            

export default Reviews2;