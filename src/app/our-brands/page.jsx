import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
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
        </div>
    );
};

export default page;