
"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
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

    const navLinks = <>
        <li className="hover:text-[#4a00e0] font-bold"><Link href="/">Home</Link></li>
        <li className="hover:text-[#4a00e0] font-bold"><Link href="/about-us">About</Link></li>
        <li className="hover:text-[#4a00e0] font-bold"><Link href="/our-brands">Our Brands</Link></li>
        <li className="hover:text-[#4a00e0] font-bold"><Link href="">For Businesses</Link></li>
        <li className="hover:text-[#4a00e0] font-bold"><Link href="">Contact</Link></li>
    </>
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className={`navbar bg-transparent fixed z-50 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${isScrolled ? 'text-black' : 'bg-white text-black'}`}>
                        {navLinks}
                    </ul>
                </div>
                <Link href="/" className="flex text-xl mt-1 md:mt-0">
                    {
                        !isScrolled &&
                        <Image src="/fimage.png" width="4000" height="1000" alt="" className='ml-4 h-16 w-40' />
                    }
                    {isScrolled &&
                        <Image src="/b_icon.png" width="4000" height="1000" alt="" className='h-16 w-44' />
                    }
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal text-base">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

