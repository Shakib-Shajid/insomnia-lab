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
        </div>
    );
};

export default page;