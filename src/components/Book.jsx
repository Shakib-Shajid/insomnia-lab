import Link from 'next/link';
import React from 'react';

const Book = () => {
    return (
        <div>
            <div className="text-center relative mx-auto bg-[#f9f9f9] text-[#333333] md:rounded-xl p-5 lg:p-10 md:w-[90%] lg:w-[40%] my-10" data-aos="zoom-in">
                <h2 className="text-2xl lg:text-3xl font-bold">Join Us in Shaping the Future.</h2>
                <p className="text-base lg:text-lg my-5">Whether you&apos;re a brand or an investor, Insomnia Lab is your partner in growth.</p>
                <Link href="#"><button className='btn bg-[#4a00e0] hover:bg-[#6a00f0] text-white border-none rounded-lg btn-md text-lg'>Get in Touch</button></Link>
            </div>
        </div>
    );
};

export default Book;