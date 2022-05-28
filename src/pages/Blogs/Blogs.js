import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10'>
            <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-0 mb-6'> Documentation</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 lg:px-20">
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Improve the performance of a React Application</h2>
                        <p>
                            In React we can extract the part of the code that cares about the component state.So, to ensure that re-rendering a component only happens when necessary, 
                            Have to avoid re-rendering the unaffected child components and
                            Use React.memo for Component Memoization we must only memoize a component when necessary.
                            Lazy loading is a great technique for optimizing and speeding up the render time of your app. The idea of lazy loading is to load a component only when it is needed.
                        </p>
                        
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Here are the types of states management that need to be properly managed in our React apps:</h2>
                        <p>
                            Local state – Local state is data we manage in one or another component.
                            <br />
                            Global state – Global state is data we manage across multiple components.
                            <br />
                            Server state – Data that comes from an external server that must be integrated with our UI stat
                            <br />
                            URL state – Data that exists on our URLs, including the pathname and query parameters

                        </p>
                        
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Prototypical inheritance </h2>
                        <p>
                            Prototypal Inheritance is added methods and properties in objects. It’s a method of an object that can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.

                        </p>
                        
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Search to find products by name</h2>
                        <p>
                            {`const words =  ${<br/>}
                                [ ${<br/>}
                                    {name : "spary", price:34},  ${<br/>}
                                    {name : "perfume", price:94},  ${<br/>}
                                    {name : "Ator", price:3} ${<br/>}
                                ] ${<br/>}

                            const result = words.filter(word => word.name === 'perfume'); ${<br/>}
                            OutPut: ${<br/>}
                                [{ name: "perfume", price: 94 }] ${<br/>}
                            `} 


                        </p>
                        
                    </div>
                
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Unit test And Why We Use</h2>
                        <p>
                             Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;