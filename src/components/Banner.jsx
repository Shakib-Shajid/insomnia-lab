
"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
    return (
        <div>
            <section className="pt-20 h-screen text-white relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-fixed bg-cover bg-center bg-gradient-to-r from-[#4a00e0] to-[#8e2de2]"></div>

                {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

                {/* Content container */}
                <div className="relative h-[80%] flex flex-col justify-center items-center text-center px-4 space-y-6">
                    {/* Logo - Larger than text */}
                    <div className="pb-10">
                        <Image
                            src="/fimage.png"
                            width="4000"
                            height="1000"
                            alt=""
                            className="w-40 h-20 md:w-52 md:h-24 lg:w-64 lg:h-28"
                        />
                    </div>

                    {/* Text - Positioned lower and slightly smaller than the image */}
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Redefining Digital Native Brands</h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-6 text-center">Where Innovation Meets Investment.</p>
                        <Link href="#"><button className='btn bg-[#4a00e0] hover:bg-[#4a00e0] text-white border-none rounded-full btn-lg text-lg'>Explore Opportunities</button></Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;
