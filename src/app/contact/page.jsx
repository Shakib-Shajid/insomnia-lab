import React from 'react';

const page = () => {
    return (
        <div>
            <section className="bg-blue-500 py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Get in Touch</h1>
                <p className="mt-4 text-lg md:text-xl text-white">
                    We&apos;d love to hear from you. Whether you&apos;re a bold entrepreneur or a visionary investor, let&apos;s talk!
                </p>
            </section>
            <section className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Send Us a Message</h2>
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
                            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
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
            <section className="bg-gray-50 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold text-gray-800">Quick Contact</h3>
                    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex items-center space-x-3">
                            <span className="text-purple-700 text-3xl">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <a href="mailto:info@insomnialab.com" className="text-gray-600 hover:underline">
                                info@insomnialab.com
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-purple-700 text-3xl">
                                <i className="fas fa-phone"></i>
                            </span>
                            <a href="tel:+1800123456" className="text-gray-600 hover:underline">
                                +1-800-123-456
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-purple-700 text-3xl">
                                <i className="fab fa-linkedin"></i>
                            </span>
                            <a href="#" className="text-gray-600 hover:underline">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold text-gray-800">Visit us at our headquarters</h3>
                    <div className="mt-10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019836189399!2d-122.40351288468247!3d37.77648377975843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c9df0a37%3A0x4e2b4f5164cbbf2e!2sPlaceholder%20Location!5e0!3m2!1sen!2sus!4v1626791121355!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            allowFullScreen=""
                            loading="lazy"
                            className="border border-gray-300 rounded-lg shadow-md"
                        ></iframe>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default page;