
"use client"
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaArrowDown } from "react-icons/fa6";


const Banner = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div data-aos="fade-down">
            <section className={`pt-40 h-[600px] lg:h-screen relative overflow-hidden ${isScrolled ? "text-[#333333]" : "text-white"}`} >
                {/* Background gradient */}
                {
                    !isScrolled ? <div className="absolute inset-0 bg-fixed bg-center bg-gradient-to-r from-[#4a00e0] to-[#8e2de2]"></div> :
                        <div className="absolute inset-0 bg-fixed bg-center bg-white"></div>
                }

                {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

                {/* Content container */}
                <div className="relative h-[80%] flex flex-col justify-center items-center text-center px-4 space-y-6">
                    {/* Logo - Larger than text */}
                    <div className="pb-10">
                        {
                            !isScrolled ?
                                <Image
                                    src="/fimage.png"
                                    width="4000"
                                    height="1000"
                                    alt=""
                                    className="w-40 h-20 md:w-52 md:h-24 lg:w-64 lg:h-28"
                                />
                                :
                                <Image
                                    src="/b_icon.png"
                                    width="4000"
                                    height="1000"
                                    alt=""
                                    className="w-40 h-20 md:w-52 md:h-24 lg:w-64 lg:h-28"
                                />
                        }
                    </div>

                    {/* Text - Positioned lower and slightly smaller than the image */}
                    <div className='md:w-[80%] mx-auto'>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">INSOMNIA LAB: ONLY FOR THE RESTLESS</h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-6 text-center">Scaling up the fashion & entertainment industries, with no fear, from the ground up.</p>
                        {/* <Link href="#"><button className='btn bg-[#4a00e0] hover:bg-[#4a00e0] text-white border-none rounded-full btn-lg text-lg'>Explore Opportunities</button></Link> */}
                    </div>
                    <div className='pt-10'>
                        <Link href="#about" scroll={true} onClick={(e) => {
                            e.preventDefault(); // Prevent the default scroll behavior
                            const target = document.getElementById('about');
                            if (target) {
                                window.scrollTo({
                                    top: target.offsetTop - 200, // Adjust -50 to control the offset from the top
                                    behavior: 'smooth', // Smooth scroll
                                });
                            }
                        }}>

                            <FaArrowDown className={`p-2 rounded-full text-4xl bounce ${isScrolled ? "text-black border-2 border-black" : "text-white border border-white"}`} />
                        </Link>
                    </div>
                </div>

            </section>

            <p className='text-center bg-gray-500 font-bold text-white p-7 text-lg rounded-xl w-[70%] mx-auto'>The first investment fund dedicated to creating an ecosystem of fresh brands, to tackle the future of innovation together.  </p>

        </div>
    );
};

export default Banner;
