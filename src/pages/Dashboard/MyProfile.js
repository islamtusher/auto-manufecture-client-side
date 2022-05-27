import React from 'react';
import './MyProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard, faLocation, faLocationDot, faMap } from '@fortawesome/free-solid-svg-icons';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../additional/FirebaseConfig';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import Loading from '../../additional/Loading';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth) // current User
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // react form hooks

    // Load the Profile info
    const { data : profile, isLoading, refetch } = useQuery(['profileData', user], () => 
    fetch(`https://calm-retreat-24478.herokuapp.com/myprofile/${user?.email}`)
    .then(res => res.json())
    )

    if (loading) {
        return <Loading></Loading>
    }
    // Handle profile form submit
    const onSubmit = (data) => {
        console.log(data);
        data['name'] = user?.displayName
        data['email'] = user?.email

        // Up-Seart the profile Info
        fetch(`https://calm-retreat-24478.herokuapp.com/myprofile/${user?.email}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    refetch()
                    reset()
                    toast('Your Profile Update Success')                    
                }
                else {
                    toast('Something Worng')
                }
                console.log(data);
            })
    }
    return (
        <div>
            <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-0 mb-6'>My Profile</h1>
            <div class="hero ">
                <div class="hero-content w-full lg:w-[75%] flex-col lg:flex-row-reverse justify-between px-4 pb-0 lg:pl-0 lg:pr-5 shadow-xl">
                    <div class=" lg:text-left">
                        <h1 class="text-5xl font-bold">Let's Update Profile</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className=' mt-4'>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                <div className="">
                                    <div className="form-control w-full mx-auto max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Educaton</span>
                                        </label>
                                        <select
                                            className="input bg-gray-100 input-bordered focus:outline-0 w-full "
                                            {...register("education", { 
                                                required: {
                                                    value: true,
                                                    message: 'Education is Required'
                                                }
                                            })}>
                                            <option value="JSC">JSC</option>
                                            <option value="SSC">SSC</option>
                                            <option value="HSC">HSC</option>
                                            <option value="BSC">BSC</option>
                                        </select>
                                        {errors?.education?.type === 'required' && <p className='text-red-500'>{errors?.education?.message}</p>}
                                    </div>
                                    <div className="form-control w-full mx-auto max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Current Address</span>
                                        </label>
                                        <input
                                            type='text'
                                            className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                            {...register("address", {
                                                required: {
                                                    value: true,
                                                    message: 'Your Address Required'
                                                }
                                            })}
                                        />
                                        {errors?.address?.type === 'required' && <p className='text-red-500'>{errors?.address?.message}</p>}
                                    </div>
                                    <div className="form-control w-full mx-auto max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Linked In Profile</span>
                                        </label>
                                        <input
                                            type='text'
                                            className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                            {...register("linkedin", {
                                                required: {
                                                    value: true,
                                                    message: 'Linked In Profile URL Required'
                                                }
                                            })}
                                        />
                                        {errors?.linkedin?.type === 'required' && <p className='text-red-500'>{errors?.linkedin?.message}</p>}
                                    </div>
                                </div>
                                <div className="">
                                    <div className="form-control w-full mx-auto max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Country</span>
                                        </label>
                                        <select
                                            className="input bg-gray-100 input-bordered focus:outline-0 w-full "
                                            {...register("country", { 
                                                required: {
                                                    value: true,
                                                    message: 'Country is Required'
                                                }
                                            })}>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="India">India</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Nepal">Nepal</option>
                                        </select>
                                        {errors?.country?.type === 'required' && <p className='text-red-500'>{errors?.country?.message}</p>}
                                    </div>
                                    <div className="form-control w-full mx-auto max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Phone Number</span>
                                        </label>
                                        <input
                                            type='tel'
                                            className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                            {...register("phone", {
                                                required: {
                                                    value: true,
                                                    message: 'Phone Number Required'
                                                }
                                            })}
                                        />
                                        {errors?.phone?.type === 'required' && <p className='text-red-500'>{errors?.phone?.message}</p>}
                                    </div>
                                    <button type='submit' className="btn bg-primary hover:bg-white hover:text-accent w-full mt-6 mb-2" >SUBMIT</button>
                                </div> 
                            </div>      
                            
                        </form>
                    </div>
                    <div class="card max-w-md py-5 px-7 profile-card rounded-none">
                        <div class="card-body z-10">
                            <div class="w-24 ">
                                <img className='rounded-full' src={user?.photoURL} alt='' />
                            </div>
                            <div className="text-white">
                                <h1 className='text-[25px] font-bold'>{user?.displayName}</h1>
                                <h1 className='font-bold'>{user?.email}</h1>
                                {
                                    profile?.linkedin && 
                                    <div className="flex flex-col gap-6">
                                        <h1>Education: {profile?.education}</h1>
                                        <div className="">
                                            <FontAwesomeIcon className='text-[35px] py-0 text-white cursor-pointer' icon={faLocationDot}></FontAwesomeIcon>
                                            <h1>{profile?.address}</h1>
                                            <h1>{profile?.country}</h1>
                                        </div>
                                        <div className="">
                                            <Link to={profile?.linkedin}>
                                                <FontAwesomeIcon
                                                    className='text-[35px] py-0  text-white cursor-pointer'
                                                    icon={faLinkedin}>
                                                </FontAwesomeIcon>
                                            </Link>
                                            <h1>Phone: {profile?.phone}</h1>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
                                    
                                
                                


export default MyProfile;