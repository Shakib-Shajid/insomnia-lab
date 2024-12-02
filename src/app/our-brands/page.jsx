import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>

            {/* hero added */}
            <section
                className={`pt-20 h-[600px] lg:h-screen relative overflow-hidden bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-white`}
                data-aos="fade-down"
            >
                {/* Content container */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 space-y-6">
                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Empowering Bold Startups
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl lg:text-2xl mb-6">
                        We invest in fearless entrepreneurs redefining fashion and lifestyle.
                    </p>

                    {/* CTA Button */}
                    <Link href="#contact">
                        <button
                            className="bg-[#4a00e0] hover:bg-[#8e2de2] text-white px-6 py-3 rounded-md text-lg font-semibold transition-colors"
                        >
                            Apply for Funding
                        </button>
                    </Link>
                </div>
            </section>

            <section className="py-20 px-4 text-center w-[80%] mx-auto">
                {/* Title */}
                <h2 className="text-2xl md:text-4xl font-bold text-[#333333] mb-6">
                    How We Help Startups
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-[#333333] max-w-3xl mx-auto mb-12">
                    At Insomnia Lab, we provide funding, strategic guidance, and access to a network of industry leaders to help startups thrive.
                </p>

                {/* Icons and Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Funding */}
                    <div className="flex flex-col items-center space-y-4 transition-transform hover:scale-105">
                        <Image
                            src="/150.svg"
                            alt="Funding Icon"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                        <h3 className="text-lg font-semibold text-[#333333]">Funding</h3>
                        <p className="text-sm text-[#555555]">We invest in bold ideas.</p>
                    </div>

                    {/* Strategy */}
                    <div className="flex flex-col items-center space-y-4 transition-transform hover:scale-105">
                        <Image
                            src="/150.svg"
                            alt="Strategy Icon"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                        <h3 className="text-lg font-semibold text-[#333333]">Strategy</h3>
                        <p className="text-sm text-[#555555]">We guide startups to scalable growth.</p>
                    </div>

                    {/* Connections */}
                    <div className="flex flex-col items-center space-y-4 transition-transform hover:scale-105">
                        <Image
                            src="/150.svg"
                            alt="Connections Icon"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                        <h3 className="text-lg font-semibold text-[#333333]">Connections</h3>
                        <p className="text-sm text-[#555555]">We open doors to industry leaders.</p>
                    </div>
                </div>
            </section>

            <section className='max-w-7xl mx-auto py-10 pb-20 text-[#333333] bg-[#f7f7f7] rounded-3xl' data-aos="zoom-in">
                {/* Section Title */}
                <div className='text-center my-5 w-[80%] mx-auto'>
                    <h3 className='text-blue-600 font-bold text-xl'>What Our Startups Say</h3>
                    <p className='text-lg max-w-5xl mx-auto py-3'>
                        Hear from the entrepreneurs who have partnered with Insomnia Lab.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="w-[90%] mx-auto flex flex-col md:flex-row flex-wrap gap-10 lg:gap-5">
                    {/* Testimonial 1 */}
                    <div className="card bg-white w-80 mx-auto border-[#e0e0e0] hover:shadow-xl flex flex-col items-center h-full transition-transform hover:scale-105 p-6 rounded-lg" data-aos="flip-left">
                        <figure>
                            <Image
                                src="/150.svg"
                                width="150"
                                height="150"
                                alt="Testimonial Photo"
                                className="rounded-full mb-4"
                            />
                        </figure>
                        <div className="text-center">
                            <h4 className="font-semibold text-lg text-[#333333]">Jane Doe</h4>
                            <p className="text-sm text-[#555555] italic mb-4">CEO of XYZ</p>
                            <p className="text-sm text-[#555555]">"Working with Insomnia Lab has been transformative."</p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="card bg-white w-80 mx-auto border-[#e0e0e0] hover:shadow-xl flex flex-col items-center h-full transition-transform hover:scale-105 p-6 rounded-lg" data-aos="flip-up">
                        <figure>
                            <Image
                                src="/150.svg"
                                width="150"
                                height="150"
                                alt="Testimonial Photo"
                                className="rounded-full mb-4"
                            />
                        </figure>
                        <div className="text-center">
                            <h4 className="font-semibold text-lg text-[#333333]">John Smith</h4>
                            <p className="text-sm text-[#555555] italic mb-4">Founder of ABC</p>
                            <p className="text-sm text-[#555555]">"The guidance and connections have been invaluable."</p>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="card bg-white w-80 mx-auto border-[#e0e0e0] hover:shadow-xl flex flex-col items-center h-full transition-transform hover:scale-105 p-6 rounded-lg" data-aos="flip-right">
                        <figure>
                            <Image
                                src="/150.svg"
                                width="150"
                                height="150"
                                alt="Testimonial Photo"
                                className="rounded-full mb-4"
                            />
                        </figure>
                        <div className="text-center">
                            <h4 className="font-semibold text-lg text-[#333333]">Emily Taylor</h4>
                            <p className="text-sm text-[#555555] italic mb-4">CTO of StartUpCo</p>
                            <p className="text-sm text-[#555555]">"Insomnia Lab helped us scale faster than we imagined."</p>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default page;