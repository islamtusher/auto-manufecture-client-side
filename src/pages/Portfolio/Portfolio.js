import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';


const Portfolio = () => {
    const navigate = useNavigate()
    return (
        <div className="">
            <div class="hero min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500" >
                <div class="hero-overlay "></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-lg">
                        <h1 className='text-xl '>HEY I AM</h1>
                        <h1 class="mb-5 text-5xl font-bold">RAFIQUL ISLAM</h1>
                        <p class="mb-5">I’m Web Developer and Check What’s Services I’ll Provide my Clients.</p>
                        <NavHashLink smooth to={'/portfolio#projects'} className="btn btn-primary text-lg font-bold text-white">Projects</NavHashLink> 
            
                    </div>
                </div>
            </div>
            {/* About Section */}
            <div class="hero min-h-screen py-20">
                <div class="hero-content lg:w-3/4 mx-auto flex-col lg:flex-row-reverse gap-15">
                    <img src="./images/protfolio.jpg" class="w-full lg:w-[500px] rounded-lg shadow-2xl" alt='' />
                    <div className='mt-8 lg:mt-0'>
                        <h1 class="text-5xl font-bold">About My Self</h1>
                        <p class="py-6">
                            Am a Full-Stack Web-Developer whith one year of exprience. I am passionate on web coding. I’m quite expert in using coding and markup languages like:
                        </p>
                        <div className="">
                            <Link to=''>
                                <FontAwesomeIcon
                                    onClick={() => navigate('')} className='cursor-pointer text-[27px] text-primary' icon={faGithub}>
                                </FontAwesomeIcon>
                            </Link>
                            <Link to=''>
                                <FontAwesomeIcon
                                    onClick={() => navigate('')} className='cursor-pointer text-[27px] ml-3 text-primary' icon={faLinkedinIn}>
                                </FontAwesomeIcon>
                            </Link>
                            
                        </div>
                        <div className=" my-5">
                            <p>
                                <FontAwesomeIcon className='cursor-pointer text-[27px] text-cyan-500 mr-3' icon={faGoogle} />
                                md.rafiqul26997@gmail.com
                            </p>
                            <p>
                                <FontAwesomeIcon className='cursor-pointer text-[27px] text-cyan-500 mr-3' icon={faLocationDot} /> Gulshan, Dhaka-1212, Bangladesh
                            </p>
                            
                        </div>
                        <button class="btn btn-primary text-lg">Hire Me</button>
                    </div>
                </div>
            </div>
            {/* Education and Skills */}
            <div class="hero min-h-screen mt-20 relative">
                <div class="hero-content items-start flex-col lg:flex-row  lg:w-[90%] mx-auto ">
                    <div className=" lg:w-1/4 sticky top-20 left-5">
                        <div class="hidden lg:flex flex-col justify-center w-full py-2 gap-2">
                            <NavHashLink smooth to={'/portfolio#projects'} className="text-lg font-bold text-secondary">MY PROJECTS</NavHashLink> 
                            <NavHashLink smooth to={'/portfolio#skills'} className="text-lg font-bold text-secondary">SKILLS</NavHashLink> 
                            <NavHashLink smooth to={'/portfolio#education'} className="text-lg font-bold text-secondary">EDUCATION</NavHashLink> 
                        </div>
                        
                    </div>
                    <div className='flex justify-start lg:w-3/4'>
                        <div>
                            <div id='projects' className=" flex flex-col gap-16">
                                <h1 class="text-5xl font-bold">MY PROJECTS</h1>
                                <div class="card lg:card-side  bg-base-100 shadow-md">
                                    <figure><img className='lg:w-[300px]' src="./images/p1..jpg" alt="Movie" /></figure>
                                    <div class="card-body">
                                        <h2 class="card-title">Travel BD Guide</h2>
                                        <p>Live Site: https://travel-bd-guide.web.app/</p>
                                        <p className='text-primary py-0'>Tolls: HTML, CSS, Bootstrap, JS, React</p>
                                        <p></p>
                                    </div>
                                </div>
                                
                            
                                <div class="card lg:card-side  bg-base-100 shadow-xl">
                                    <figure><img className='lg:w-[300px]' src="./images/p2..jpg" alt="Movie" /></figure>
                                    <div class="card-body">
                                        <h2 class="card-title">Moto WareHouse</h2>
                                        <p>Live Site: https://moto-warehouse.web.app/</p>
                                        <p className='text-primary py-0'>Tolls: HTML, CSS, Bootstrap, JS, React, MongoDB , NodeJS, Express</p>

                                    </div>
                                    <p></p>
                                </div>
                            
                                <div class="card lg:card-side  bg-base-100 shadow-xl">
                                    <figure><img className='lg:w-[300px]' src="./images/p3..jpg" alt="Movie" /></figure>
                                    <div class="card-body">
                                        <h2 class="card-title">Travel BD Guide</h2>
                                        <p className='text-primary py-0'>Tolls: HTML, CSS, Bootstrap, JS, React</p>
                                        <p>Live Site: https://relaxed-swartz-c1dd45.netlify.app/home#home</p>
                                    </div>
                                    <p></p>
                                </div>
                                
                            </div>
                            
                            <div id='skills'>
                                <h1 className='text-5xl font-bold mt-20'>MY Skills</h1>
                                <div className="flex justify-around items center">
                                    <div class="card w-full bg-base-100 shadow-md">
                                        <div class="card-body py-2">
                                            <h2 class="card-title">HTML</h2>
                                            <input type="range" min="0" max="100" value="80" class="range range-primary" />
                                        </div>
                                        <div class="card-body py-2 ">
                                            <h2 class="card-title">CSS</h2>
                                            <input type="range" min="0" max="100" value="70" class="range range-primary" />
                                        </div>
                                        <div class="card-body py-2 ">
                                            <h2 class="card-title">Bootstrap</h2>
                                            <input type="range" min="0" max="100" value="80" class="range range-primary" />
                                        </div>
                                        <div class="card-body py-2 ">
                                            <h2 class="card-title">JavaScript</h2>
                                            <input type="range" min="0" max="100" value="70" class="range range-primary" />
                                        </div>
                                        <div class="card-body py-2 ">
                                            <h2 class="card-title">React</h2>
                                            <input type="range" min="0" max="100" value="80" class="range range-primary" />
                                        </div>
                                        <div class="card-body py-2 ">
                                            <h2 class="card-title">Express</h2>
                                            <input type="range" min="0" max="100" value="50" class="range range-primary" />
                                        </div>
                                        <div class="card-body py-2 ">
                                            <h2 class="card-title">Mongo DB</h2>
                                            <input type="range" min="0" max="100" value="40" class="range range-primary" />
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                            <div id='education'>
                                <h1 className='text-5xl font-bold mt-20'>MY EDUCATION</h1>
                                <div className="flex flex-col lg:flex-row justify-around items center">
                                    <div class="card card-side bg-base-100 shadow-md">
                                        <div class="card-body">
                                            <h2 class="card-title">Bsc In CSE</h2>
                                            <p className='text-primary py-0'>SouthEast University , Dhaka</p>
                                            <p>Year: 2nd</p>
                                            <p>Semester: 6th</p>
                                        </div>
                                    </div>
                                    <div class="card card-side bg-base-100 shadow-md">
                                        <div class="card-body">
                                            <h2 class="card-title">SSC In Business</h2>
                                            <p className='text-primary py-0'>Bashsil Secondary School, Barishal</p>
                                            <p>Year: 2nd</p>
                                            <p>Semester: 6th</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Portfolio;