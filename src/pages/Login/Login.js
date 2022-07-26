import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import auth from '../../additional/FirebaseConfig';
import useAccessToken from '../../Hooks/useAccessToken';

const Login = () => {
    const [user] = useAuthState(auth) // current User
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    // react form hooks
    const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm(); 
    
    // react firebase hooks
    const [signInWithGoogle, , , googleSignInError] = useSignInWithGoogle(auth);
    const [ signInWithEmailAndPassword, ,  , emailPassSignInError] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    
    // Errors by react firebase hooks
    const [hooksErrors, setHooksErrors] = useState({ emailError: '', passwordError: '' })
    
    // custom Hooks // get Access token
    const [jwtAccessToken] = useAccessToken(user)
    
    const from = location.state?.from?.pathname || "/";

    if (jwtAccessToken) {
        navigate(from, { replace: true });
    }
    
    useEffect(() => {
        if (user) {
            toast('User LogIn')
            reset()
        }
    }, [user, reset, from])

    // handle Password Reset
    const handleresetPassword = async() => {
        const email = getValues('email')
        await sendPasswordResetEmail(email)
        toast('Reset Password Email Sended')
    }

    // Handle Login Form
    const onSubmit = data => {
        signInWithEmailAndPassword(data?.email, data?.password)
    }
    
    // handle Firebase hooks errors
    useEffect(() => {
        const hookError = emailPassSignInError || googleSignInError
        if (hookError) {
            switch (hookError.code) {
                case 'auth/invalid-email':
                    setHooksErrors({...hooksErrors, emailError:'Please Enter A valid Email'})
                    break;
                case 'auth/user-not-found':
                    
                    setHooksErrors({...hooksErrors, emailError:'This Email Not Registered'})
                    break;
                case 'auth/wrong-password':
                    setHooksErrors({...hookError, passwordError:'Wrong Password'})
                    break;
                case 'auth/popup-closed-by-user':
                    toast('Google Sign In Canceled By User')
                    break;
                default:
                    alert('Somthing is Wrong! Please Check') //rmv convert to modal----------------
                    break;
            }
        }
    }, [emailPassSignInError, googleSignInError])
    
    
    return (
        <div class="hero min-h-screen lg:w-3/4 mx-auto ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left lg:pl-8">
                    <h1 class="text-5xl font-bold">Login Now!</h1>
                    <p class="py-6">
                        We have to make sure that visitor are A Valid person Or user. We do this for make sucure our site or companay and also For user comfortavle visiting
                    </p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body pt-3">
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input  type='email' className="input input-bordered focus:outline-0 focus:border-primary w-full " {...register("email", { required: true})}/>
                                {hooksErrors.emailError && <p className='text-red-500'>{hooksErrors.emailError}</p>}
                            </div>
                            
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input type='password' className="input input-bordered focus:outline-0 focus:border-primary w-full " {...register("password", { required: true})}/>
                                {hooksErrors.passwordError && <p className='text-red-500'>{hooksErrors.passwordError}</p>}
                                <p onClick={handleresetPassword} className='cursor-pointer mt-1'>Forget Password?</p>
                            </div>

                            <button className="btn bg-primary hover:bg-white hover:text-accent  w-full mt-6 mb-2" type='submit'>LOGIN</button>
                            <p className='text-center text-sm '>New To Auto-Manufac? <span onClick={()=>navigate('/signup')} className='text-primary cursor-pointer'>Create A New Account</span></p>
                        </form>  
                        
                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="flex items-center btn bg-white text-accent hover:border-primary hover:bg-white hover:text-primary "
                            type='submit'>
                            <img className='w-8 mr-3' src="./images/google.png" alt="img" />
                            Google Sign In
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;