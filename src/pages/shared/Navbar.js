import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../additional/CustomLink';
import CustomLInk from '../../additional/CustomLink';

const Navbar = () => {
    return (
        <div className="">
             <div className="navbar bg-zinc-600">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
                        <li><CustomLink to='/summary' className=''>Summary</CustomLink></li>
                        <li><CustomLink to='/reviews' className=''>Reviews</CustomLink></li>
                        <li><CustomLink to='/contact' className=''>contact</CustomLink></li>
                    </ul>
                </div>
                <Link to='' className="btn btn-ghost text-xl text-white uppercase">auto <span className='text-primary'>m</span> anufac</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    <li><CustomLink to='/' className=''>HOME</CustomLink></li>
                    <li><CustomLink to='/parts' className=''>Tools</CustomLink></li>
                    <li><CustomLink to='/business' className=''>Business</CustomLink></li>
                    <li><CustomLink to='/summary' className=''>Summary</CustomLink></li>
                    <li><CustomLink to='/reviews' className=''>Reviews</CustomLink></li>
                    <li><CustomLink to='/contact' className=''>contact</CustomLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal text-primary p-0">
                    <li><Link to='/' className='uppercase'>LOGIN</Link></li>
                    <li><Link to='/' className='uppercase'>SIGNUP</Link></li>
                </ul>
            </div>
        </div>
       </div>
    );
};

export default Navbar;