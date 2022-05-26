
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../additional/FirebaseConfig';
import Loading from '../../additional/Loading';

const Purchase = () => {
    const {id} = useParams()
    const [user, loading] = useAuthState(auth) // current User
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // react form hooks
    const [disabled,setdisabled] = useState(false)

    // load single part
    const { data : part, isLoading , error } = useQuery(['part', user], () => 
        fetch(`http://localhost:5000/part/${id}`)
            .then(res =>res.json())
    )

    useEffect(() => {
        if (errors?.quantity?.message) {
            setdisabled(true)
        }
        else if (errors?.quantity) {
            setdisabled(true)
        }
        else {
            setdisabled(false)
        }
    }, [errors?.quantity,  errors?.quantity?.message])
    
    if (loading || isLoading) {
        return <Loading></Loading>
    }

     // Handle Purchase  form
    const onSubmit = (data) => {
        const itemInfo = {
            itemName: part?.name,
            itemImg: part?.image,
            itemPrice: part?.price,
            minimumQuantity: part?.minimumQuantity,
            avaailableParts:part?.avaailableParts
        }
        data['itemInfo']= itemInfo

        fetch('http://localhost:5000/mypurchase', {
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
                    toast('Your Purchase Success')
                }
                else {
                    toast('Something Worng')
                }
                console.log(data);
        })

    }
    return (
        <div>
            {/* <h1>Purches</h1> */}
            <div class="hero min-h-screen lg:w-9/12  mx-auto">
                <div class="hero-content  flex-col justify-evenly lg:flex-row-reverse">
                    <div class="text-left">
                        <div class="card card-compact  px-4 ">
                            <h1 class="text-3xl font-bold text-primary">{part.name}</h1>
                            <div className=' flex justify-center lg:justify-start'>
                                <img className='w-[220px] ' src={part?.image} alt="Shoes" />
                            </div>
                            <div class="card-body">
                                <div className="text-secoundary text-lg">
                                    <p class="mb-1">Minimum Order: {part.minimumQuantity} pcs</p>
                                    <p class="">Available Now: {part.avaailableParts} pcs</p>
                                </div>
                                <p className='text-lg text-stone-400'>{part.describe}</p>
                                <p class="text-2xl font-bold	">
                                    <span className='text-primary'>$</span>
                                    {part.price} per 
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
                                            <span className="label-text text-sm">Name</span>
                                        </label>
                                        <input
                                            readOnly
                                            value={user?.displayName}
                                            type='text'
                                            className="input bg-gray-100 input-bordered focus:outline-0 w-full "
                                            {...register("userName", { 
                                                required: {
                                                    value: true,
                                                    message: 'User Name is Required'
                                                }
                                            })}
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
                                            {...register("userEmail", {
                                                required: {
                                                    value: true,
                                                    message: 'User Email is Required'
                                                }
                                            })
                                            }
                                                
                                        />
                                        {errors?.userEmail?.type === 'required' && <p className='text-red-500'>{errors?.userEmail?.message}</p>}
                                            
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Phone Number</span>
                                        </label>
                                        <input
                                            type='tel'
                                            className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                            {...register("userPhone", {
                                                required: {
                                                    value: true,
                                                    message: 'Phone Number Required'
                                                }
                                            })}
                                        />
                                        {errors?.userPhone?.type === 'required' && <p className='text-red-500'>{errors?.userPhone?.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Address</span>
                                        </label>
                                        <input
                                            type='text'
                                            className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                            {...register("userAddress", {
                                                required: {
                                                    value: true,
                                                    message: 'Your Address Required'
                                                }
                                            })}
                                        />
                                        {errors?.userAddress?.type === 'required' && <p className='text-red-500'>{errors?.userAddress?.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-sm">Quantity</span>
                                        </label>
                                        <input
                                            type='number'
                                            className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                            {...register("quantity", {
                                                required: {
                                                    value: true,
                                                    message: 'Quantity Required'
                                                },
                                                validate: {
                                                    positive: v => parseInt(v) > 0 || 'Should be a positive Number',
                                                    lessThan: v => parseInt(v) >= part.minimumQuantity || `You have order minimum ${part.minimumQuantity} pcses`,
                                                    greaterThan: v => parseInt(v) <= part.avaailableParts || `Now Available ${part.avaailableParts} pcses`,
                                                }
                                            })}
                                        />
                                        {errors?.quantity?.type === 'required' && <p className='text-red-500'>{errors?.quantity?.message}</p>}
                                        {errors?.quantity?.type === 'positive' && <p className='text-red-500'>{errors?.quantity?.message}</p> }
                                        {errors?.quantity?.type === 'lessThan' && <p className='text-red-500'>{errors?.quantity?.message}</p> }
                                        {errors?.quantity?.type === 'greaterThan' && <p className='text-red-500'>{errors?.quantity?.message}</p> }
                                        
                                    </div>
                                </div>

                                <button disabled={disabled}  type='submit' className="btn bg-primary hover:bg-white hover:text-accent  w-full mt-6 mb-2" >PURCHASE</button>
                                
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;