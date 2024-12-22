import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Investor = () => {
    return (
        <div className='max-w-7xl mx-auto py-10 pb-20 text-[#333333] bg-[#f7f7f7] rounded-3xl' data-aos="fade-up">
                    <div className='text-center my-5 w-[80%] mx-auto'>
                        <h3 className='text-blue-600 font-bold text-2xl md:text-3xl'>Our Investors</h3>
                        <p className='text-lg max-w-5xl mx-auto py-3'>Join Insomnia Lab and invest in a portfolio of the most promising emerging brands within fashion and entertainment. Diversify your risk and multiply your returns with our carefully curated brand conglomerate.</p>
                    </div>
        
                    <div className="w-[90%] mx-auto flex flex-col md:flex-row flex-wrap gap-10 lg:gap-5">
                        <div className="card bg-base-100 w-80 mx-auto border-[#e0e0e0] hover:shadow-xl flex flex-col h-full" data-aos="flip-left">
                            <figure className="">
                                <Image
                                    src="/200x200.svg"
                                    width="1000"
                                    height="1000"
                                    alt="icon_about_1"
                                    className=" rounded-2xl"
                                />
                            </figure>
                        </div>
                        <div className="card bg-base-100 w-80 mx-auto border-[#e0e0e0] hover:shadow-xl flex flex-col h-full" data-aos="flip-up">
                            <figure className="">
                                <Image
                                    src="/200x200.svg"
                                    width="1000"
                                    height="1000"
                                    alt="icon_about_1"
                                    className=" rounded-2xl"
                                />
                            </figure>
                        </div>
                        <div className="card bg-base-100 w-80 mx-auto border-[#e0e0e0] hover:shadow-xl flex flex-col h-full" data-aos="flip-right">
                            <figure className="">
                                <Image
                                    src="/200x200.svg"
                                    width="1000"
                                    height="1000"
                                    alt="icon_about_1"
                                    className="rounded-2xl"
                                />
                            </figure>
                        </div>
                    </div>
        
                </div>
    );
};

export default Investor;