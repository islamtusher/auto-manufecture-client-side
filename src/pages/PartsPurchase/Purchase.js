
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../additional/FirebaseConfig';
import Loading from '../../additional/Loading';
import api from "../../network/network";

const Purchase = () => {
    const {id} = useParams()
    const [user, loading] = useAuthState(auth) // current User
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // react form hooks
    const [disabled,setDisabled] = useState(false)

    // load single part
    const {
      data: part,
      isLoading,
      error,
    } = useQuery(["part", user], () =>
      fetch(`${api}/part/${id}`).then((res) => res.json())
    );

    useEffect(() => {
        if (errors?.quantity?.message) {
            setDisabled(true)
        }
        else if (errors?.quantity) {
            setDisabled(true)
        }
        else {
            setDisabled(false)
        }
    }, [errors?.quantity,  errors?.quantity?.message])
    
    if (loading || isLoading) {
        return <Loading></Loading>;
        
    }
    if (error) {
        console.log(error);        
    }

     // Handle Purchase  form
    const onSubmit = (data) => {
        console.log(data);
        const itemInfo = {
            itemName: part?.name,
            itemImg: part?.image,
            itemPrice: part?.price,
            minimumQuantity: part?.minimumQuantity,
            avaailableParts:part?.avaailableParts
        }
        data['itemInfo']= itemInfo

        fetch(`${api}/mypurchase`, {
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
                    toast.success('Purchase Successfully')
                }
                else {
                    toast.error('Something is Wrong')
                }
        })

    }
    return (
        <div>
            <div className="hero min-h-screen lg:w-9/12  mx-auto">
                <div className="hero-content  flex-col justify-evenly lg:flex-row-reverse">
                    <div className="text-left lg:w-[645px]">
                        <div className="card card-compact  px-4 ">
                            <h1 className="text-3xl font-bold text-primary">{part?.name}</h1>
                            <div className=' flex justify-center lg:justify-start'>
                                <img className='w-[220px] ' src={part?.image} alt="Shoes" />
                            </div>
                            <div className="card-body">
                                <div className="text-secoundary text-lg">
                                    <p className="mb-1">Minimum Order: {part?.minimumQuantity} pcs</p>
                                    <p className="">Available Now: {part?.availableParts} pcs</p>
                                </div>
                                <p className='text-lg text-stone-400'>{part?.describe}</p>
                                <p className="text-2xl font-bold	">
                                    <span className='text-primary'>$</span>
                                    {part?.price} per 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-md">
                        <div className="card-body pt-0">
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
                                                    greaterThan: v => parseInt(v) <= part.availableParts || `Now Available ${part.availableParts} pcses`,
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