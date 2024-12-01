import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto py-10 text-[#333333]' data-aos="zoom-in">
            <h3 className='text-blue-600 font-bold text-2xl md:text-3xl text-center'>Who We Are</h3>
            <div className='w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center' data-aos="fade-right">
                <div className='w-[80%] lg:ml-10 space-y-3'>
                    <p className='text-base md:text-lg max-w-5xl mx-auto'>Insomnia Lab is the first platform redefining digital native brands. We partner with entrepreneurs and investors to create the future of fashion and leisure.</p>
                </div>
                <Image src="/400x300.svg" width="4000" height="1000" alt="" className='w-[80%] md:w-[80%] lg:w-full mx-auto h-72' />
            </div>

        </div>
    );
};

export default About;