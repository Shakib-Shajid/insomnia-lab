
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer bg-[#121212] text-white p-10">
            <aside>
                <Image src="/fimage.png" width="200" height="200" alt="" />
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
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Our Brands</a>
                <a className="link link-hover">Career</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className='flex gap-5'>
                    <Link href="https://www.linkedin.com/company/insomnialab/" target="_blank"><FaLinkedinIn className='text-2xl' /></Link>
                    <FaXTwitter className='text-2xl' />
                    <FaYoutube className='text-2xl' />
                    <FaFacebookF className='text-2xl' />
                </div>
            </nav>
        </footer>
    );
};

export default Footer;