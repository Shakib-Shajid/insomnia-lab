
"use client";
import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

    const navLinks = <>
        <li><Link href="">Home</Link></li>
        <li><Link href="">About</Link></li>
        <li><Link href="">Our Brands</Link></li>
        <li><Link href="">For Businesses</Link></li>
        <li><Link href="">Contact</Link></li>
    </>
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="navbar bg-base-100 fixed">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="flex text-xl mt-1 md:mt-0">
                    <Image src="/b_icon.png" width="4000" height="1000" alt="" className='h-16 w-44' />
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
