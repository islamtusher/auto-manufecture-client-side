import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
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
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className='uppercase'>HOME</Link></li>
                        <li><Link to='/' className='uppercase'>Tools</Link></li>
                        <li><Link to='/' className='uppercase'>Business</Link></li>
                        <li><Link to='/' className='uppercase'>Summary</Link></li>
                        <li><Link to='/' className='uppercase'>Reviews</Link></li>
                        <li><Link to='/' className='uppercase'>conntact</Link></li>
                    </ul>
                </div>
                <Link to='' className="btn btn-ghost text-xl uppercase">auto <span className='text-primary'>m</span> anufac</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/' className='uppercase'>HOME</Link></li>
                    <li><Link to='/' className='uppercase'>Tools</Link></li>
                    <li><Link to='/' className='uppercase'>Business</Link></li>
                    <li><Link to='/' className='uppercase'>Summary</Link></li>
                    <li><Link to='/' className='uppercase'>Reviews</Link></li>
                    <li><Link to='/' className='uppercase'>conntact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/' className='uppercase'>LOGIN</Link></li>
                    <li><Link to='/' className='uppercase'>SIGNUP</Link></li>
                </ul>
            </div>
            </div>
    );
};

export default Navbar;