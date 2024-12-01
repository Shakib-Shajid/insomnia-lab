
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg-[#121212] text-white text-sm'>
            <footer className="footer p-10">
                <aside>
                    <Link href="/"><Image src="/fimage.png" width="200" height="200" alt="" /></Link>
                    <p>
                        Insomnia Lab.
                        <br />
                        Providing reliable tech since 2023
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Brands</a>
                    <a className="link link-hover">For Businesses</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className='flex gap-5'>
                        <Link href="https://www.linkedin.com/company/insomnialab/" target="_blank"><FaLinkedinIn className='text-2xl hover:text-[#A020F0]' /></Link>
                        <FaInstagram className='text-2xl hover:text-[#A020F0]' />
                        <FaXTwitter className='text-2xl hover:text-[#A020F0]' />
                    </div>
                </nav>
            </footer>
            <p className='text-center'>© 2024 Insomnia Lab. All rights reserved.</p>
        </div>
    );
};

export default Footer;