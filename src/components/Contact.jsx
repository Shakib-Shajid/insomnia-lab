import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";


const Contact = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-10 mt-10 text-white'>
            <section className="lg:px-40 lg:py-40 lg:w-[40%]">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold">Quick Contact</h3>
                    <div className="mt-8 flex flex-col items-center justify-center gap-8">
                        <div className="flex items-center space-x-3">
                            <a href="mailto:info@insomnialab.com" className="hover:underline">
                                info@insomnialab.com
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaPhoneAlt />  <a href="tel:+1800123456" className="hover:underline">
                                +1-800-123-456
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-3xl">
                                <i className="fab fa-linkedin"></i>
                            </span>
                            <div className='flex gap-5'>
                                <FaLinkedin className='text-2xl hover:text-purple-800' />
                                <FaInstagram className='text-2xl hover:text-purple-800' />
                                {/* <BsTwitterX className='text-2xl hover:text-purple-800' /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" pt-10 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">Send Us a Message</h2>
                    <form className="mt-10 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>
                        <select
                            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 text-gray-500"
                            required
                        >
                            <option value="">Select Subject</option>
                            <option value="Startup Inquiry">Startup Inquiry</option>
                            <option value="Investor Inquiry">Investor Inquiry</option>
                            <option value="Other">Other</option>
                        </select>
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                            rows="5"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full md:w-auto px-10 py-4 bg-purple-700 text-white font-bold rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;