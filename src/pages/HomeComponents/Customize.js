import React from 'react';

const Customize = () => {
    return (
        <div id='customize' className=''>
            <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-28 mb-16 '>CUSTOMIXZE YOUR MECHINE</h1>
            <div className="grid grid-cols-1 lg:px-10 lg:grid-cols-3 gap-6">
                <div data-aos="zoom-in-up" class="card w-96 mx-auto hover:-translate-y-6 hover:scale-105 hover:shadow-lg duration-700 h-[470px] rounded-none text-white bg-[url('https://i.ibb.co/WxBQZH1/part1.jpg')] ">
                    <div class="card-body z-10 ">
                        <h2 class="card-title text-[30px]">CUSTOM EXHAUTS </h2>
                        <p>Make more powerful and gate lot of funny and enjoy</p>
                        <div class="card-actions">
                            <button class="btn rounded-none  bg-primary">PURCHAS NOW</button>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-down" class="card w-96 mx-auto hover:-translate-y-6 hover:scale-105 hover:shadow-lg duration-700 h-[470px] rounded-none text-white bg-[url('https://i.ibb.co/85ZcSgF/part2.jpg')] ">
                    <div class="card-body z-10">
                        <h2 class="card-title text-[30px]">CUSTOM WHEELS</h2>
                        <p>Look of the custom wheels is acttertive and blacky</p>
                        <div class="card-actions">
                            <button class="btn rounded-none  bg-primary">PURCHASE NOW</button>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-up" class="card w-96 mx-auto hover:-translate-y-6 hover:scale-105 hover:shadow-lg duration-700 h-[470px] rounded-none text-white bg-[url('https://i.ibb.co/FHBh2kJ/part3.jpg')] ">
                    <div class="card-body z-10">
                        <h2 class="card-title text-[30px]"> CUSTOM BODY KITS</h2>
                        <p>People will just give react that how much is this beauty</p>
                        <div class="card-actions">
                            <button class="btn rounded-none  bg-primary">PURCHASE NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customize;