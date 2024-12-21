
"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from "next/navigation"; // Import usePathname
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname(); // Get the current route

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        AOS.init();
    }, [])

    const isActive = (path) => pathname === path;


    return (
        <div className={`navbar bg-transparent fixed z-50 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
            <div className="navbar-start">
                {/* <div className="dropdown">
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
                        {navItems.map((item) => (
                            <ul className="menu menu-horizontal text-base" key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`font-semibold duration-300 ${isActive(item.path) ? "text-black underline underline-offset-2" : "hover:text-blue-700"
                                        }`}
                                >
                                    {item.title}
                                </Link>
                            </ul>
                        ))}
                    </ul>
                </div> */}
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
            {/* <div className="navbar-end hidden lg:flex">
                {navItems.map((item) => (
                    <ul className="menu menu-horizontal text-base" key={item.path}>
                        <Link
                            href={item.path}
                            className={`font-semibold duration-300 ${isActive(item.path) ? "text-black underline underline-offset-2" : "hover:text-blue-700"
                                }`}
                        >
                            {item.title}
                        </Link>
                    </ul>
                ))}
            </div> */}
        </div>
    );
};

const navItems = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about-us",
    },
    {
        title: "Our Brands",
        path: "/our-brands",
    },
    {
        title: "For Businesses",
        path: "/for-business",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

export default Navbar;

