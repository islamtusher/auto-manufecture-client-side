import { faArrowAltCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const HeroArea = () => {
    return (
        <div className="">
            <div class="carousel ">
                <div id="slide1" class="carousel-item  relative w-full ">
                    <div className=" hero bg-[url('/public/images/banner/b4.jpg')] ">
                        <div class="hero-overlay  bg-transparent"></div>
                        <div class="hero-content lg:w-9/12 flex-col lg:flex-row justify-between  text-neutral-content">
                            <div class=" lg:w-1/2 md:justify-end">
                                <h1 class="mb-5 font-['Aclonica'] text-[46px] lg:text-7xl leading-[60px] text-white lg:leading-[80px]"> The Largest Products <span className='text-primary'>Manufacturer</span></h1>
                                <p class="mb-5">AUTO-MANUFAC maintain the Manufacturing process of turning raw materials or parts into finished goods through the use of tools, human labor, machinery, and chemical processing</p>
                                <button class="btn bg-primary rounded hover:bg-white hover:text-primary ">EXPLORE NOW</button>
                                <button class="btn bg-transparent border-primary text-primary rounded hover:bg-primary hover:text-white ml-5  ">COLLECTIONS</button>
                            </div>
                            <div class=" lg:w-1/2 mt-11 lg:mt-0">
                                <div class="card w-8/12  lg:w-[270px] lg:ml-auto glass bg-white backdrop-filter-none">
                                    <div class="card-body px-4 py-10 items-center text-black">
                                        <img src="./images/engine.png" className='w-24' alt="" />
                                        <h2 class="card-title">Auto Engine</h2>
                                        <p className='text-center text-slate-400 my-3'>Our's companie holding the largest market share in the Automobile Engine and Parts Manufacturing in the US</p>
                                        <div class="card-actions justify-end items-center">
                                            <h2 class="text-lg text-primary">Learn now</h2>
                                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="absolute flex justify-end lg:justify-between items-center transform -translate-y-1/2 left-5 right-5 bottom-0 lg:top-1/2">
                                {/* absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 */}
                        <a href="#slide3" class="btn btn-circle">❮</a> 
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                
                <div id="slide2" class="carousel-item  relative w-full ">
                    <div className=" hero  bg-[url('/public/images/banner/b2.jpg')] bg-cover bg-center bg-no-repeat">
                        <div class="hero-overlay  bg-transparent"></div>
                        <div class="hero-content lg:w-9/12 flex-col lg:flex-row justify-between  text-neutral-content">
                            <div class=" lg:w-1/2 md:justify-end">
                                <h1 class="mb-5 font-['Aclonica'] text-[46px] lg:text-7xl leading-[60px] text-white lg:leading-[80px]"> The Largest Products <span className='text-primary'>Manufacturer</span></h1>
                                <p class="mb-5">AUTO-MANUFAC industry that makes products from raw materials by the use of manual labour or machinery and that is usually carried out systematically</p>
                                <button class="btn bg-primary rounded hover:bg-white hover:text-primary ">EXPLORE NOW</button>
                                <button class="btn bg-transparent border-primary text-primary rounded hover:bg-primary hover:text-white ml-5  ">COLLECTIONS</button>
                            </div>
                            <div class=" lg:w-1/2 mt-11 lg:mt-0">
                                <div class="card w-8/12  lg:w-[270px] lg:ml-auto glass bg-white backdrop-filter-none">
                                    <div class="card-body px-4 py-10 items-center text-black">
                                        <img src="./images/tire.png" className='w-24' alt="" />
                                        <h2 class="card-title">Car Tires</h2>
                                        <p className='text-center text-slate-400 my-3'>Our Tire Manufacture tires are manufactured according to relatively standardized processes and machinery, in around 455 tire factories </p>
                                        <div class="card-actions justify-end items-center">
                                            <h2 class="text-lg text-primary">Learn now</h2>
                                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a> 
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" class="carousel-item  relative w-full ">
                    <div className=" hero min-h-screen  bg-[url('/public/images/banner/b1.jpg')] bg-cover bg-center bg-no-repeat">
                        <div class="hero-overlay  bg-transparent"></div>
                        <div class="hero-content lg:w-9/12 flex-col lg:flex-row justify-between  text-neutral-content">
                            <div class=" lg:w-1/2 md:justify-end">
                                <h1 class="mb-5 font-['Aclonica'] text-[46px] lg:text-7xl leading-[60px] text-white lg:leading-[80px]"> The Largest Products <span className='text-primary'>Manufacturer</span></h1>
                                <p class="mb-5"> Ouer Manufacturing industry that makes products from raw materials by the use of manual labour or machinery and that is usually carried out systematically</p>
                                <button class="btn bg-primary rounded hover:bg-white hover:text-primary ">EXPLORE NOW</button>
                                <button class="btn bg-transparent border-primary text-primary rounded hover:bg-primary hover:text-white ml-5  ">COLLECTIONS</button>
                               
                            </div>
                            <div class=" lg:w-1/2 mt-11 lg:mt-0">
                                <div class="card w-8/12  lg:w-[270px] lg:ml-auto glass hover:bg-primary hover:text-white hover:scale-105 transition duration-700 ease-in-out text-black bg-white backdrop-filter-none">
                                    <div class="card-body px-4 py-10 items-center ">
                                        <img src="./images/wheel.png" className='w-24' alt="" />
                                        <h2 class="card-title">Wheels</h2>
                                        <p className='text-center  my-3 '>Find here Car Wheel Rim, Car Wheel manufacturers, suppliers. Get contact details and address of companies manufacturing and supplying</p>
                                        <div class="card-actions justify-end items-center">
                                            <h2 class="text-lg text-primary ">Learn now</h2>
                                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                            
                    
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn bg-transparent hover:bg-orange-600 border-3 text-white border-orange-400 btn-circle">❮</a> 
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div> 

            </div> 
        </div>
    );
};

export default HeroArea;