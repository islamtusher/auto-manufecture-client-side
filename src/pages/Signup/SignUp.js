import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../additional/FirebaseConfig';
import Loading from '../../additional/Loading';
import useAccessToken from '../../Hooks/useAccessToken';

const SignUp = () => {
    const [user, loading] = useAuthState(auth) // current User
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // react form hooks
    const [hooksError, setHooksError] = useState('') // Errors by react firebase hooks
    const navigate = useNavigate()

    // react firebse Hooks
    const [createUserWithEmailAndPassword, , , creatingUserError,] = useCreateUserWithEmailAndPassword(auth); //, {sendEmailVerification : true}
    const [signInWithGoogle, , , googleSignInError] = useSignInWithGoogle(auth);
    const [updateProfile,updating] = useUpdateProfile(auth);
    const [isLoading, setIsLoadign] = useState(false)
    const [ signInWithEmailAndPassword, ,  , emailPassSignInError] = useSignInWithEmailAndPassword(auth);


    // custom Hooks // get Access token
    const [jwtAccessToken] = useAccessToken(user)
    if (jwtAccessToken) {
        navigate('/')
    }

    // form inputs reset & signUp conformation
    useEffect(() => {
        if (user && (updating || loading)) {
            setIsLoadign(true)
        }
        if (user?.displayName) {
            setIsLoadign(false)
            toast('New User Register')
            setHooksError('')
            reset()
            // console.log(user);
        }
    }, [user, reset, updating, loading, user?.displayName])

    // Handle Sing Up form
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    }

        // Demo User Login Handleer
        const demoUserLogin = () => {
            signInWithEmailAndPassword("tusher@gmail.com", "@123456")
        }
    
        // Demo Admin Login Handleer
        const demoAdminLogin = () => {
            signInWithEmailAndPassword("tusher26997@gmail.com", "@123456")
        }
    // handle react firebase hooks Errors
    useEffect(() => {
        const hookError = creatingUserError || googleSignInError
        if (hookError) {
            switch (hookError?.code) {
                case 'auth/email-already-in-use':
                    setHooksError('Email Is Allready Registered')
                    break;  
                case 'auth/popup-closed-by-user':
                    toast('Google Sign In Canceled By User')
                    break;  
                default:
                    setHooksError('Somthig Is Worng Please Check')
                    break;
            }
        }
    }, [creatingUserError, googleSignInError])
    
    return (
        <div class="hero min-h-[90vh] lg:w-3/4 mx-auto ">
            {isLoading ? <Loading></Loading> 
                :
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left lg:pl-8">
                    <h1 class="text-5xl font-bold">Sign Up Now!</h1>
                    <p class="py-6">
                        If you dont't have any user accout on AutoManufac site then feel free to Register now. It will be give you more comfortable and easiest visiting.
                    </p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body pt-3">

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
                                        },
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Provide A Valid Email'
                                        }})
                                    }
                                />
                                {errors?.email?.type === 'required' && <p className='text-red-500'>{errors?.email?.message}</p>}
                                {errors?.email?.type === 'pattern' && <p className='text-red-500'>{errors?.email?.message}</p>}
                                {hooksError && <p className='text-red-500'>{hooksError}</p> }
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input
                                    type='password'
                                    autoComplete='current-password'
                                    className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password Must Required'
                                        },
                                        pattern: {
                                            value: /(?=.*[!@#$%^&*])/,
                                            message: 'Need Minimum 1 Special Character'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Need Minimum 6 characters'
                                        }
                                        
                                    })}
                                />
                                {errors?.password?.type === 'required' && <p className='text-red-500'>{errors?.password?.message}</p>}
                                {errors?.password?.type === 'pattern' && <p className='text-red-500'>{errors?.password?.message}</p>}
                                {errors?.password?.type === 'minLength' && <p className='text-red-500'>{errors?.password?.message}</p>}
                                
                            </div>

                            <button  type='submit' className="btn bg-primary hover:bg-white hover:text-accent text-[17px]  w-full mt-6 mb-2" >SIGN UP</button>
                            <p className='text-center text-md '>
                                Allready Registered?
                                <span onClick={()=>navigate('/login')} className='text-blue-600 cursor-pointer'> Please Log In</span>
                            </p>
                        </form>  
                        
                        <div className="divider my-[5px]">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="flex items-center btn bg-white text-accent hover:border-primary hover:bg-white hover:text-primary "
                            type='submit'>
                            <img className='w-8 mr-3' src="./images/google.png" alt="img" />
                            Google Sign In
                        </button> 
                        <button
                            onClick={demoUserLogin}
                            className=" btn bg-primary hover:bg-white hover:text-accent text-[17px] w-full"
                            type='submit'>                
                            Demo User
                        </button> 
                        <button
                            onClick={demoAdminLogin}
                            className=" btn bg-primary hover:bg-white hover:text-accent text-[17px] w-full"
                            type='submit'>                
                            Demo Admin
                        </button> 
                    </div>
                </div>
            </div>

            
            }
            
        </div>
    );
};

export default SignUp;