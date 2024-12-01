import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto' data-aos="zoom-in">
            <div className='text-center my-5'>
                <h3 className='text-blue-600 font-bold text-xl'>Who We Are</h3>
                <p className='text-lg max-w-5xl mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odit voluptatibus tempore inventore esse iure exercitationem blanditiis in saepe ab!</p>
            </div>

            <div className="w-[90%] mx-auto flex flex-col md:flex-row flex-wrap gap-5">
                <div className="card bg-base-100 w-80  mx-auto shadow-2xl flex flex-col h-full" data-aos="flip-left">
                    <figure className="">
                        <Image
                            src="400x300.svg"
                            width="1000"
                            height="1000"
                            alt="icon_about_1"
                            className=" rounded-2xl"
                        />
                    </figure>
                </div>
                <div className="card bg-base-100 w-80  mx-auto shadow-2xl flex flex-col h-full"  data-aos="flip-up">
                    <figure className="">
                        <Image
                            src="400x300.svg"
                            width="1000"
                            height="1000"
                            alt="icon_about_1"
                            className=" rounded-2xl"
                        />
                    </figure>
                </div>
                <div className="card bg-base-100 w-80  mx-auto shadow-2xl flex flex-col h-full"  data-aos="flip-right">
                    <figure className="">
                        <Image
                            src="400x300.svg"
                            width="1000"
                            height="1000"
                            alt="icon_about_1"
                            className="h-60 rounded-2xl"
                        />
                    </figure>
                </div>
            </div>

        </div>
    );
};

export default About;