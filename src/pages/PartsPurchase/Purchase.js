import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../additional/FirebaseConfig';
import Loading from '../../additional/Loading';

const Purchase = () => {
    const [user, loading] = useAuthState(auth) // current User
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // react form hooks

    if (loading) {
        return <Loading></Loading>
    }
    const part = {
        "_id": "628b21218338b813874eeeaf",
        "image": "./images/parts/p1.jpg",
        "name": "STP Generator Platinum",
        "price": "380.00",
        "describe": "",
        "minimumQuantity": "130",
        "availableQuantity": "300"
      }
     // Handle Sing Up form
    const onSubmit = async (data) => {
         
    }
    return (
        <div>
            <h1>Purches</h1>
            <div class="hero min-h-screen">
                <div class="hero-content  w-full flex-col justify-evenly lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <div class="card card-compact px-4 ">
                            <h1 class="text-3xl font-bold text-primary">{part.name}</h1>
                            <figure>
                                <img className='w-[220px]' src={part?.image} alt="Shoes" />
                            </figure>
                            <div class="card-body">
                                <div className="text-stone-500 text-lg">
                                    <p class="mb-1">Minimum Order: {part.minimumQuantity} pcs</p>
                                    <p class="">Available Now: {part.availableQuantity} pcs</p>
                                </div>
                                <p className='text-lg text-stone-400'>If a dog chews shoes whose shoes does he choose?</p>
                                <p class="text-2xl font-bold	">
                                    <span className='text-primary'>$</span>
                                    {part.price} per 
                                </p>
                                {/* <div class="card-actions items-center">
                                    <button
                                        class="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary">
                                        Purchase Now
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-md">
                        <div class="card-body pt-0">
                            <h1 className='text-2xl font-bold text-secondary text-center'>Purchase Now</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-lg">Name</span>
                                    </label>
                                    <input
                                        readOnly
                                        value={user?.displayName}
                                        type='text'
                                        className="input bg-gray-100 input-bordered focus:outline-0 w-full "
                                        {...register("name", { 
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            }
                                        })}
                                    />
                                    {errors?.name?.type === 'required' && <p className='text-red-500'>{errors?.name?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input
                                        readOnly
                                        value={user?.email}
                                        type='email'
                                        className="input bg-gray-100 input-bordered focus:outline-0  w-full "
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            }
                                        })
                                        }
                                            
                                    />
                                    {errors?.email?.type === 'required' && <p className='text-red-500'>{errors?.email?.message}</p>}
                                        
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-lg">Phone Number</span>
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
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-lg">Address</span>
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

                                <button  type='submit' className="btn bg-primary hover:bg-white hover:text-accent  w-full mt-6 mb-2" >Submit</button>
                                
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;