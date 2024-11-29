import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Brand = () => {
    return (
        <div className='max-w-7xl mx-auto mb-10 lg:mb-20' data-aos="zoom-in">
            <div className='text-center my-5'>
                <h3 className='text-blue-600 font-bold text-xl'>Our Brand</h3>
            </div>

            <div className="w-[90%] mx-auto flex flex-col md:flex-row flex-wrap gap-5">
                <div className="card bg-base-100 w-80  mx-auto shadow-2xl flex flex-col h-full" data-aos="flip-left">
                    <figure className="">
                        <Image
                            src="/200x200.svg"
                            width="1000"
                            height="1000"
                            alt="icon_about_1"
                            className=" rounded-2xl"
                        />
                    </figure>
                    <div className="card-body flex-grow items-center text-center">
                        <h2 className="card-title">Lorem, ipsum dolor.</h2>
                        
                    </div>
                </div>
                <div className="card bg-base-100 w-80  mx-auto shadow-2xl flex flex-col h-full" data-aos="flip-up">
                    <figure className="">
                        <Image
                            src="/200x200.svg"
                            width="1000"
                            height="1000"
                            alt="icon_about_1"
                            className=" rounded-2xl"
                        />
                    </figure>
                    <div className="card-body flex-grow items-center text-center">
                        <h2 className="card-title">Lorem, ipsum dolor.</h2>
                        
                    </div>
                </div>
                <div className="card bg-base-100 w-80  mx-auto shadow-2xl flex flex-col h-full" data-aos="flip-right">
                    <figure className="">
                        <Image
                            src="/200x200.svg"
                            width="1000"
                            height="1000"
                            alt="icon_about_1"
                            className="rounded-2xl"
                        />
                    </figure>
                    <div className="card-body flex-grow items-center text-center">
                        <h2 className="card-title">Lorem, ipsum dolor.</h2>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Brand;