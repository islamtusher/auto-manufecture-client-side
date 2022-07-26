import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../additional/CustomLink';

const Footer = () => {
    return (
        <div className='bg-black pt-20 mt-24 '>
            <h1 className='text-white font-["Aclonica"] text-4xl font-light text-center mb-4 '>GET IN TOUCH</h1>
            <footer class="footer lg:place-items-center p-10 text-base-200 lg:w-[80%] mx-auto">
                <div className=''>
                    <p className=''><Link to='' className="btn btn-ghost text-lg lg:text-xl text-white p-0">AUTO <span className='text-primary text-[30px]'>M</span> anufac</Link><br/>Providing New Genetation Auto Parts</p>
                </div>
                <div className=''>
                        <span class="footer-title">Have A Look</span> 
                        <CustomLink to='/'>Home</CustomLink> 
                        <CustomLink to='/parts'>Tools</CustomLink> 
                        <CustomLink to='/aboutus' >About</CustomLink> 
                        <CustomLink to='/contact' >Contact</CustomLink>
                </div> 
                <div className=''>
                    <span class="footer-title">Address</span> 
                    <p>H#14 R#4 Auto Manufac Tower</p>
                    <p>Dhaka, Bangladesh</p>
                </div> 
            </footer>
        </div>
    );
};

export default Footer;