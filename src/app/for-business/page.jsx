import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div data-aos="fade-up">
            {/* Hero Section */}
            <section className="h-[600px] lg:h-screen relative overflow-hidden text-white flex flex-col justify-center items-center px-4 text-center">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]"></div>

                {/* Content */}
                <div className="relative z-10 space-y-6 ">
                    <h1 className="text-3xl md:text-5xl font-bold">Partner with Us for Bold Investments</h1>
                    <p className="text-lg md:text-xl pb-6 w-[90%] mx-auto">
                        Invest in the future of fashion and lifestyle through innovation-driven brands.
                    </p>

                    <Link href="#contact">
                        <button
                            className="bg-[#4a00e0] hover:bg-[#8e2de2] text-white px-6 py-3 rounded-md text-lg font-semibold transition-colors"
                        >
                             Contact Us
                        </button>
                    </Link>
                </div>
            </section>

            {/* Why Invest Section */}
            <section className="py-10 lg:py-20 text-[#333333] bg-gray-50">
                <h2 className="text-center text-2xl md:text-4xl font-bold">Why Partner with Insomnia Lab?</h2>
                <p className="text-center text-base md:text-lg mt-4 max-w-4xl mx-auto w-[80%]">
                    Insomnia Lab is the first investment lab for digital-first brands, offering investors unique access to high-growth opportunities in fashion and lifestyle.
                </p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-20">
                    {/* Icon Cards */}
                    {[
                        { icon: "/150.svg", title: "Exclusive Access", desc: "We identify bold, untapped opportunities." },
                        { icon: "/150.svg", title: "Proven Strategy", desc: "Our hands-on approach maximizes growth." },
                        { icon: "/150.svg", title: "Exceptional Returns", desc: "We focus on scalable, profitable ventures." }
                    ].map(({ icon, title, desc }, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <Image width="4000" height="1000" src={icon} alt={title} className="w-20 h-20 mb-4" />
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <p className="text-gray-600">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Portfolio Highlights Section */}
            <section className="py-10 lg:py-20">
                <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-800">Our Growing Portfolio</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-20">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <Image width="4000" height="1000"
                                src="/150.svg"
                                alt="Project"
                                className="rounded-t-lg object-cover w-full"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold">Project Name</h3>
                                <p className="text-gray-600">Brief description of the project.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section id="contact" className="py-10 lg:py-20 bg-gradient-to-r from-gray-100 to-gray-200 text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Ready to Invest in the Future?</h2>
                <a
                    href="#contact-form"
                    className="inline-block bg-[#4a00e0] text-white py-3 px-8 rounded-lg text-lg mt-6 hover:bg-opacity-90"
                >
                    Contact Us
                </a>
            </section>
        </div>
    );
};

export default page;