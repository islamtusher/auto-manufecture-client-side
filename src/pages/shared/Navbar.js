import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../additional/CustomLink';
import CustomLInk from '../../additional/CustomLink';
import auth from '../../additional/FirebaseConfig';
import Loading from '../../additional/Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth) // current User
    const [currentUserName, setCurrentUserName] = useState('')

    // split user Name
    useEffect(() => {
        setCurrentUserName(user?.displayName?.split(' ')[0])
    }, [user, user?.displayName])
    // console.log(user);

    if (loading) {
        // return <Loading></Loading>
    }
    const handleSignOut= () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }
    return (
        <div className="sticky top-0 left-0 right-0 z-10">
                <div className="navbar bg-zinc-800 pb-0 lg:px-[85px]">
                    <div className="navbar-start ">
                        <div className="dropdown ">
                            <label tabIndex="0" className="btn btn-white bg-none lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5" fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content text-white hover:text-primary bg-zinc-600 mt-3 p-2 shadow rounded-box w-52">
                                <li><CustomLink to='/' className=''>HOME</CustomLink></li>
                                <li><CustomLink to='/parts' className=''>Tools</CustomLink></li>
                                <li><CustomLink to='/business' className=''>Business</CustomLink></li>
                                <li><CustomLink to='/portfolio' className=''>Portolio</CustomLink></li>
                                <li><CustomLink to='/blogs' className=''>Blogs</CustomLink></li>
                                <li><CustomLink to='/contact' className=''>contact</CustomLink></li>
                            </ul>
                        </div>
                        <Link to='' className="btn btn-ghost text-lg lg:text-xl text-white ">AUTO <span className='text-primary text-[30px]'>M</span> anufac</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal ">
                            <li><CustomLink to='/' className=''>HOME</CustomLink></li>
                            <li><CustomLink to='/parts' className=''>Tools</CustomLink></li>
                            <li><CustomLink to='/blogs' className=''>Blogs</CustomLink></li>
                            <li><CustomLink to='/portfolio' className=''>Portolio</CustomLink></li>                        
                            <li><CustomLink to='/business' className=''>Business</CustomLink></li>
                            <li><CustomLink to='/contact' className=''>contact</CustomLink></li>
                            {
                                user?.email && <li><CustomLink to='/dashboard' className=''>Dashboard</CustomLink></li>
                            }
                            
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <ul className="menu menu-horizontal text-primary p-0">
                        {
                            user?.email ? 
                                <>
                                    <li><p>{currentUserName}</p></li>
                                    <li><button onClick={handleSignOut} className='bg-none lg:border-2 px-0 py-2 lg:px-3 lg:border-primary text-white'>LOGOUT</button></li>
                                </>
                                :
                                <>
                                    <li><Link to='/login' className='uppercase px-0'>LOGIN</Link></li>
                                    <li><Link to='/signup' className='uppercase '>SIGNUP</Link></li>
                                </>        
                        }
                        </ul>
                    </div>
                </div>
            
       </div>
    );
};

export default Navbar;