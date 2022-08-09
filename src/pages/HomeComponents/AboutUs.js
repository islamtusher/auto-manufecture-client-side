import { faGlobe, faIndustry, faTrophy, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AboutUs = () => {
    return (
        <div id='aboutus' className='w-full  px-3 lg:px-32 '>
            <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-28 mb-16 '>SOMTHING ABOUT US</h1>
            <div class="card-body px-0">
                <h2 class="card-title lg:text-[30px] text-[24px] text-secondary">WELCOME TO <span className='text-primary'>AUTOMANUFAC</span> </h2>
                <p>25 years of experience in the manufacture industry</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="">
                    <div class="card bg-base-100 rounded-none ">
                        
                        <figure><img src="./images/about.jpg" alt="Shoes" /></figure>
                        <div class="card-body px-0 pt-3 pb-5">
                            <p className='text-secondary'>
                                AUTO-MANUFAC maintain the Manufacturing process of turning raw materials or parts into finished goods through the use of tools,
                                human labor, machinery, and chemical processing 
                            </p>
                            <p className='mt-4'>
                                AUTO-MANUFAC industry that makes products from raw materials by the use of manual labour or machinery and that is usually carried out systematically
                            </p>
                        </div>
                        <div class="card-actions px-0">
                            <button class="btn bg-primary px-6 py-2 rounded-none border-none">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="bg-stone-800 p-8 hover:bg-stone-900 hover:scale-105 duration-700">
                        <FontAwesomeIcon className='text-primary text-[40px]' icon={faWarehouse}></FontAwesomeIcon>
                        <h1 className='text-white text-xl my-2'>Best Manufacturing</h1>
                        <p className='text-gray-400'>We are rutrum lacus arcu, into condim entum sit amet abituro.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="bg-stone-700 p-8 hover:bg-stone-800 hover:scale-105 duration-700">
                        <FontAwesomeIcon className='text-primary text-[40px]' icon={faTrophy }></FontAwesomeIcon>
                        <h1 className='text-white text-xl my-2'>Award Winning</h1>
                        <p className='text-gray-400'>We are rutrum lacus arcu, into condim entum sit amet abituro.</p>
                    </div>
                    <div  className="bg-stone-500 p-8 hover:bg-stone-700 hover:scale-105 duration-700">
                        <FontAwesomeIcon className='text-primary text-[40px]' icon={faIndustry }></FontAwesomeIcon>
                        <h1 className='text-white text-xl my-2'>Factory Growth</h1>
                        <p className='text-gray-400'>We are rutrum lacus arcu, into condim entum sit amet abituro.</p>
                    </div>
                    <div  className="bg-stone-300 p-8 hover:bg-stone-600 hover:scale-105 duration-700">
                        <FontAwesomeIcon className='text-primary text-[40px]' icon={faGlobe }></FontAwesomeIcon>
                        <h1 className=' text-xl my-2'>Global Certified</h1>
                        <p className='text-gray-700'>We are rutrum lacus arcu, into condim entum sit amet abituro.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;