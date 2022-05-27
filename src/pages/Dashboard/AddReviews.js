import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from "react-rating-stars-component";
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import auth from '../../additional/FirebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../../additional/Loading';
import { toast } from 'react-toastify';

const AddReviews = () => {
    const [user, loading] = useAuthState(auth)
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // react form hooks
    const [userRating, setUserRating] = useState(0)
    const ratingChanged = (newRating) => {
        setUserRating(newRating);
    };
    if (loading) {
        return <Loading></Loading>
    }
    const onSubmit = (data) => {
        data['rating'] = userRating
        console.log(data);
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    reset()
                    toast('Your Reviews Successfully Done')
                }
        })
    
    }
    return (
        <div>
            <h1>Add Reviews</h1>
            <div className="card w-80 mx-auto shadow-xl ">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4 px-5 py-3'>
                <div className="">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-sm">Name</span>
                        </label>
                        <input
                            readOnly
                            value={user?.displayName}
                            type='text'
                            className="input bg-gray-100 input-bordered focus:outline-0 w-full "
                            {...register("name")}
                        />
                        {errors?.userName?.type === 'required' && <p className='text-red-500'>{errors?.userName?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-sm">Email</span>
                        </label>
                        <input
                            readOnly
                            value={user?.email}
                            type='email'
                            className="input bg-gray-100 input-bordered focus:outline-0  w-full "
                            {...register("email")}                                
                        />
                        {errors?.userEmail?.type === 'required' && <p className='text-red-500'>{errors?.userEmail?.message}</p>}
                            
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-sm">Coutry</span>
                        </label>
                        <input
                            type='text'
                            className="input bg-gray-100 input-bordered focus:outline-0  w-full "
                            {...register("country",{
                                required: {
                                    value: true,
                                    message: 'Country is Required'
                                }
                            })
                            }                                
                        />
                        {errors?.country?.type === 'required' && <p className='text-red-500'>{errors?.country?.message}</p>}
                            
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-sm">Youer Review</span>
                        </label>
                        <textarea
                            type='text'
                            className="input bg-gray-100 input-bordered focus:outline-0  w-full h-[100px]"
                            {...register("review", {
                                required: {
                                    value: true,
                                    message: 'Review is Required'
                                }
                            })
                            }
                                
                        />
                        {errors?.review?.type === 'required' && <p className='text-red-500'>{errors?.review?.message}</p>}
                            
                    </div>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        isHalf={true}
                        emptyIcon={<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>}
                        halfIcon={<FontAwesomeIcon icon={faStarHalfAlt}></FontAwesomeIcon>}
                        filledIcon={<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>}
                        activeColor="#ff7607"
                    />
                </div>

                <button type='submit' className="btn bg-primary hover:bg-white hover:text-accent  w-full mt-6 mb-2" >PURCHASE</button>
                
            </form>
            </div>
        </div>
    );
};

export default AddReviews;