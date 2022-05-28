import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../additional/FirebaseConfig';
import Loading from '../../../additional/Loading';

const AddNewParts = () => {
    const [user, loading] = useAuthState(auth) // current User
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // react form hooks

    if (loading) {
        return <Loading></Loading>
    }
    
    const imageApi  = 'edc8d4e921a65908d428d43888b23e70'

     // Handle Purchase  form
    const onSubmit = (data) => {
        const partImage = data?.image[0] 
        const formData = new FormData()
        formData.append('image', partImage)
        fetch(`https://api.imgbb.com/1/upload?key=${imageApi}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success === true) {
                    const partsInfo = {
                        name: data?.name,
                        price: data?.price,
                        minimumQuantity: data?.minimumQuantity,
                        availableParts: data?.availableParts,
                        describe: data?.describe,
                        image: result?.data?.url
                    }
                    // Store the Parts Info on DB
                    fetch('http://localhost:5000/addparts', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(partsInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged === true) {
                                toast('Part Add Successfully')
                                reset() // reset input filds
                            }
                            else {
                                toast.error('Something Wrong Please Check')
                            }
                        })
                }
        })

    }
    return (
        <div>
            <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-0 mb-6'>Add New Parts</h1>
            <div class="hero lg:w-9/12  mx-auto">
                <div class="hero-content  flex-col justify-evenly lg:flex-row-reverse">
                    <div class="text-left">
                        <div class="card card-compact  px-4 ">                           
                            <div class="card-body">
                                <h1 className="text-secoundary text-lg">Make More Parts</h1>
                                <p className='text-lg text-stone-400'>
                                    AUTO-MANUFAC maintain the Manufacturing process of turning raw materials or parts into finished goods through the use of tools, human labor, machinery, and chemical processing
                                </p>                                
                            </div>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-md">
                        <div class="card-body pt-0">
                            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>
                                <div className="">
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Parts Name</span>
                                        </label>
                                        <input
                                            type='text'
                                            className="input bg-gray-100 input-bordered focus:outline-0 w-full "
                                            {...register("name", { 
                                                required: {
                                                    value: true,
                                                    message: 'Parts Name is Required'
                                                }
                                            })}
                                        />
                                        {errors?.partsName?.type === 'required' && <p className='text-red-500'>{errors?.partsName?.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Per Price</span>
                                        </label>
                                        <input
                                            type='number'
                                            className="input bg-gray-100 input-bordered focus:outline-0  w-full "
                                            {...register("price", {
                                                required: {
                                                    value: true,
                                                    message: 'Per Price is Required'
                                                }
                                            })
                                            }
                                                
                                        />
                                        {errors?.price?.type === 'required' && <p className='text-red-500'>{errors?.price?.message}</p>}
                                            
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Minimum Quantity</span>
                                        </label>
                                        <input
                                            type='number'
                                            className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                            {...register("minimumQuantity", {
                                                required: {
                                                    value: true,
                                                    message: 'Minimum Quantity Number Required'
                                                }
                                            })}
                                        />
                                        {errors?.minimumQuantity?.type === 'required' && <p className='text-red-500'>{errors?.minimumQuantity?.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Available Now</span>
                                        </label>
                                        <input
                                            type='number'
                                            className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                            {...register("availableParts", {
                                                required: {
                                                    value: true,
                                                    message: 'Available Parts Number Required'
                                                }
                                            })}
                                        />
                                        {errors?.availableParts?.type === 'required' && <p className='text-red-500'>{errors?.availableParts?.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Describe</span>
                                        </label>
                                        <input
                                            type='text'
                                            className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                            {...register("describe", {
                                                required: {
                                                    value: true,
                                                    message: 'Describe Required'
                                                }
                                            })}
                                        />
                                        {errors?.describe?.type === 'required' && <p className='text-red-500'>{errors?.describe?.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Parts Demo</span>
                                        </label>
                                        <input
                                            type='file'
                                            className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                            {...register("image", {
                                                required: {
                                                    value: true,
                                                    message: 'Parts Image Required'
                                                }
                                            })}
                                        />
                                        {errors?.image?.type === 'required' && <p className='text-red-500'>{errors?.image?.message}</p>}
                                    </div>
                                </div>
                                                                        
                                <button type='submit' className="btn bg-primary hover:bg-white hover:text-accent  w-full mt-6 mb-2" >IMPORT NOW</button>
                                
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewParts;