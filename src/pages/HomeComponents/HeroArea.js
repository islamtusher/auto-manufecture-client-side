import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const HeroArea = () => {
    return (
        <div className="">
            <div className="carousel ">
                {/*First Carousel Item  */}
                <div id="slide1" className="carousel-item  relative w-full ">
                    <div className=" hero min-h-screen bg-[url('/public/images/banner/b4.jpg')]  bg-fixed bg-cover bg-center bg-no-repeat pt-20 md:pt-0">
                        <div className="hero-overlay  bg-transparent"></div>
                        <div className="hero-content lg:w-9/12 flex-col lg:flex-row justify-between  text-neutral-content">
                            <div data-aos="zoom-in-right" className=" lg:w-1/2 md:justify-end">
                                <h1 className="mb-5 font-['Aclonica'] text-[46px] lg:text-7xl leading-[60px] text-white lg:leading-[80px]"> The Largest Products <span className='text-primary'>Manufacturer</span></h1>
                                <p className="mb-10 lg:mb-16">AUTO-MANUFAC maintain the Manufacturing process of turning raw materials or parts into finished goods through the use of tools, human labor, machinery, and chemical processing</p>
                                <button className="btn bg-primary rounded hover:bg-white hover:text-primary ">EXPLORE NOW</button>
                                <button className="btn bg-transparent border-primary text-primary rounded hover:bg-primary hover:text-white ml-5  ">COLLECTIONS</button>
                            </div>
                            {/* Carousel Card */}
                            <div data-aos="zoom-in-left" className=" lg:w-1/2 mt-11 lg:mt-0">
                                <div className="card w-8/12  lg:w-[270px] lg:ml-auto glass hover:bg-primary hover:text-white hover:scale-105 transition duration-700 ease-in-out text-black bg-white backdrop-filter-none">
                                    <div className="card-body px-4 py-10 items-center">
                                        <img src="./images/engine.png" className='w-24' alt="" />
                                        <h2 className="card-title">Auto Engine</h2>
                                        <p className='text-center text-slate-400 my-3'>Our's companie holding the largest market share in the Automobile Engine and Parts Manufacturing in the US</p>
                                        <div className="card-actions justify-end items-center">
                                            <h2 className="text-lg text-primary">Learn now</h2>
                                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute flex justify-end lg:justify-between items-center transform -translate-y-1/2 left-5 right-5 bottom-0 lg:top-1/2">
                        <a href="#slide3" className="btn btn bg-transparent hover:bg-orange-600 border-3 text-white border-orange-400 btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn bg-transparent hover:bg-orange-600 border-3 text-white border-orange-400 btn-circle">❯</a>
                    </div>
                </div> 
                {/*Second Carousel Item  */}
                <div id="slide2" className="carousel-item  relative w-full ">
                    <div className=" hero min-h-screen bg-[url('/public/images/banner/b2.jpg')] bg-fixed bg-cover bg-center bg-no-repeat pt-20 md:pt-0">
                        <div className="hero-overlay  bg-transparent"></div>
                        <div className="hero-content lg:w-9/12 flex-col lg:flex-row justify-between  text-neutral-content">
                            <div className=" lg:w-1/2 md:justify-end">
                                <h1 className="mb-5 font-['Aclonica'] text-[46px] lg:text-7xl leading-[60px] text-white lg:leading-[80px]"> The Largest Products <span className='text-primary'>Manufacturer</span></h1>
                                <p className="mb-5">AUTO-MANUFAC industry that makes products from raw materials by the use of manual labour or machinery and that is usually carried out systematically</p>
                                <button className="btn bg-primary rounded hover:bg-white hover:text-primary ">EXPLORE NOW</button>
                                <button className="btn bg-transparent border-primary text-primary rounded hover:bg-primary hover:text-white ml-5  ">COLLECTIONS</button>
                            </div>
                            <div className=" lg:w-1/2 mt-11 lg:mt-0">
                                <div className="card w-8/12  lg:w-[270px] lg:ml-auto glass hover:bg-primary hover:text-white hover:scale-105 transition duration-700 ease-in-out text-black bg-white backdrop-filter-none">
                                    <div className="card-body px-4 py-10 items-center ">
                                        <img src="./images/tire.png" className='w-24' alt="" />
                                        <h2 className="card-title">Car Tires</h2>
                                        <p className='text-center text-slate-400 my-3'>Our Tire Manufacture tires are manufactured according to relatively standardized processes and machinery, in around 455 tire factories </p>
                                        <div className="card-actions justify-end items-center">
                                            <h2 className="text-lg text-primary">Learn now</h2>
                                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute flex justify-end lg:justify-between items-center transform -translate-y-1/2 left-5 right-5 bottom-0 lg:top-1/2">
                        <a href="#slide1" className="btn btn bg-transparent hover:bg-orange-600 border-3 text-white border-orange-400 btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn bg-transparent hover:bg-orange-600 border-3 text-white border-orange-400 btn-circle">❯</a>
                    </div>
                </div> 
                {/*Thired Carousel Item  */}
                <div id="slide3" className="carousel-item  relative w-full ">
                    <div className=" hero min-h-screen  bg-[url('/public/images/banner/b1.jpg')] bg-fixed bg-cover bg-center bg-no-repeat pt-20 md:pt-0">
                        <div className="hero-overlay  bg-transparent"></div>
                        <div className="hero-content lg:w-9/12 flex-col lg:flex-row justify-between  text-neutral-content">
                            <div className=" lg:w-1/2 md:justify-end">
                                <h1 className="mb-5 font-['Aclonica'] text-[46px] lg:text-7xl leading-[60px] text-white lg:leading-[80px]"> The Largest Products <span className='text-primary'>Manufacturer</span></h1>
                                <p className="mb-5"> Ouer Manufacturing industry that makes products from raw materials by the use of manual labour or machinery and that is usually carried out systematically</p>
                                <button className="btn bg-primary rounded hover:bg-white hover:text-primary ">EXPLORE NOW</button>
                                <button className="btn bg-transparent border-primary text-primary rounded hover:bg-primary hover:text-white ml-5  ">COLLECTIONS</button>
                               
                            </div>
                            <div className=" lg:w-1/2 mt-11 lg:mt-0">
                                <div className="card w-8/12  lg:w-[270px] lg:ml-auto glass hover:bg-primary hover:text-white hover:scale-105 transition duration-700 ease-in-out text-black bg-white backdrop-filter-none">
                                    <div className="card-body px-4 py-10 items-center ">
                                        <img src="./images/wheel.png" className='w-24' alt="" />
                                        <h2 className="card-title">Wheels</h2>
                                        <p className='text-center  my-3 '>Find here Car Wheel Rim, Car Wheel manufacturers, suppliers. Get contact details and address of companies manufacturing and supplying</p>
                                        <div className="card-actions justify-end items-center">
                                            <h2 className="text-lg text-primary ">Learn now</h2>
                                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                            
                    
                    <div className="absolute flex justify-end lg:justify-between items-center transform -translate-y-1/2 left-5 right-5 bottom-0 lg:top-1/2">
                        <a href="#slide2" className="btn bg-transparent hover:bg-orange-600 border-3 text-white border-orange-400 btn-circle">❮</a> 
                        <a href="#slide1" className="btn bg-transparent hover:bg-orange-600 border-3 text-white border-orange-400 btn-circle">❯</a>
                    </div>
                </div> 

            </div> 
        </div>
    );
};

export default HeroArea;