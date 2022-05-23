import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faPeopleGroup, faPlus, faScrewdriverWrench, faThumbsUp } from '@fortawesome/free-solid-svg-icons';


const Business = () => {
    return (
        <div>
            <div className="text-center mt-28 mb-16 ">
                <h1 className='text-secondary font-["Aclonica"] text-4xl font-light '>
                    Our Business Improvments
                </h1>
                <p className='text-primary text-lg'>Thats Why People Chouse Us</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 px-6 lg:px-20 bg-[url('/public/images/banner/b2.jpg')]   bg-no-repeat bg-cover bg-fixed">
                <div class="card ">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-6xl text-white' icon={faFlag}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h1 className='text-5xl font-bold text-white  flex items-center'>
                            80
                            <FontAwesomeIcon className='ml-2 text-4xl font-bold' icon={faPlus}></FontAwesomeIcon>
                        </h1>
                        <h2 class="card-title text-primary">Countries</h2>
                    </div>
                </div>
                <div class="card ">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-6xl text-white' icon={faPeopleGroup}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h1 className='text-5xl font-bold text-white flex items-center'>
                            345
                            <FontAwesomeIcon className='ml-2 text-4xl font-bold' icon={faPlus}></FontAwesomeIcon>
                        </h1>
                        <h2 class="card-title text-primary">Company Clients</h2>
                    </div>
                </div>
                <div class="card ">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-6xl text-white ' icon={faScrewdriverWrench}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h1 className='text-5xl font-bold text-white flex items-center'>
                            286
                            <FontAwesomeIcon className='ml-2 text-4xl font-bold' icon={faPlus}></FontAwesomeIcon>
                        </h1>
                        <h2 class="card-title text-primary">Our Projects</h2>
                    </div>
                </div>
                <div class="card ">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-6xl text-white' icon={faThumbsUp}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h1 className='text-5xl font-bold text-white flex items-center'>
                            845
                            <FontAwesomeIcon className='ml-2 text-4xl font-bold' icon={faPlus}></FontAwesomeIcon>
                        </h1>
                        <h2 class="card-title text-primary">Positive Feedback</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;