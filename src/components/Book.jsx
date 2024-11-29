import Link from 'next/link';
import React from 'react';

const Book = () => {
    return (
        <div>
            <div className="text-center relative mx-auto bg-primaryColor text-white md:rounded-xl p-5 lg:p-10 md:w-[90%] lg:w-[40%] my-10" data-aos="zoom-in">
                <h2 className="text-lg lg:text-2xl font-bold">Join Us in Shaping the Future</h2>
                <p className="text-lg font-bold my-5">Whether you&apos;re a brand or an investor, Insomnia Lab is your partner in growth.</p>
                <Link href="#"><button className='btn bg-secondaryColor hover:bg-secondaryColor text-white border-black rounded-full btn-wide text-lg'>Get in Touch</button></Link>
            </div>
        </div>
    );
};

export default Book;