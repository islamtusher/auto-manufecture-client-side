import React from 'react';
import { useForm } from 'react-hook-form';

const Purchase = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // react form hooks

     // Handle Sing Up form
    const onSubmit = async (data) => {
         
    }
    return (
        <div>
            <h1>Purches</h1>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <input
                                    type='text'
                                    className="input input-bordered focus:outline-0 focus:border-primary w-full "
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
                                    type='email'
                                    className="input input-bordered focus:outline-0 focus:border-primary w-full "
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