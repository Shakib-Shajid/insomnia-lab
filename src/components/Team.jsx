import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Team = () => {
    return (
        <div>
            {/* team */}
            <section className='my-10 lg:my-20'>

                <section className="my-10 lg:my-20 bg-white">
                    <h2 className="text-center text-blue-600 font-bold text-2xl md:text-3xl">Meet The Team</h2>
                    <div className='w-[80%] mx-auto mt-10'>
                        <p className='text-base md:text-lg text-center'>At Insomnia Lab, our team combines young energy and veteran experience to drive success.</p>
                    </div>
                    <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 my-10 lg:my-16">
                        {/* Member 1 */}
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="card bg-base-100 w-80 md:w-72 lg:w-80 shadow-2xl mx-auto border-2 border-blue-600 flex flex-col">
                                <figure className="px-10 pt-10">
                                    <Image
                                        src="/150.svg"
                                        width="4000"
                                        height="1000"
                                        alt="Javier de Rocafort"
                                        className="rounded-full h-28 w-28 transform transition-transform duration-300 hover:scale-110"
                                    />
                                </figure>
                                <div className="card-body flex-grow items-center text-center">
                                    <h2 className="card-title text-xl font-semibold">Marco</h2>
                                    {/* <h4 className="text-lg text-gray-600">Founder & CEO</h4> */}
                                    {/* <p className="text-gray-500">Visionary leader with a passion for innovation.</p> */}
                                </div>
                            </div>
                        </Link>
                        {/* Member 2 */}
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="card bg-base-100 w-80 md:w-72 lg:w-80 shadow-2xl mx-auto border-2 border-blue-600 flex flex-col">
                                <figure className="px-10 pt-10">
                                    <Image
                                        src="/150.svg"
                                        width="4000"
                                        height="1000"
                                        alt="Fernando Abella"
                                        className="rounded-full h-28 w-28 transform transition-transform duration-300 hover:scale-110"
                                    />
                                </figure>
                                <div className="card-body flex-grow items-center text-center">
                                    <h2 className="card-title text-xl font-semibold">Xandro</h2>
                                    {/* <h4 className="text-lg text-gray-600">CTO</h4> */}
                                    {/* <p className="text-gray-500">Driving technological innovation and excellence.</p> */}
                                </div>
                            </div>
                        </Link>
                        {/* Member 3 */}
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="card bg-base-100 w-80 md:w-72 lg:w-80 shadow-2xl mx-auto border-2 border-blue-600 flex flex-col">
                                <figure className="px-10 pt-10">
                                    <Image
                                        src="/150.svg"
                                        width="4000"
                                        height="1000"
                                        alt="Marco Pozzi"
                                        className="rounded-full h-28 w-28 transform transition-transform duration-300 hover:scale-110"
                                    />
                                </figure>
                                <div className="card-body flex-grow items-center text-center">
                                    <h2 className="card-title text-xl font-semibold">J</h2>
                                    {/* <h4 className="text-lg text-gray-600">Marketing Director</h4> */}
                                    {/* <p className="text-gray-500">Crafting impactful campaigns with creativity.</p> */}
                                </div>
                            </div>
                        </Link>
                        {/* Member 4 */}
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="card bg-base-100 w-80 md:w-72 lg:w-80 shadow-2xl mx-auto border-2 border-blue-600 flex flex-col">
                                <figure className="px-10 pt-10">
                                    <Image
                                        src="/150.svg"
                                        width="4000"
                                        height="1000"
                                        alt="Xandro Pepitovic"
                                        className="rounded-full h-28 w-28 transform transition-transform duration-300 hover:scale-110"
                                    />
                                </figure>
                                <div className="card-body flex-grow items-center text-center">
                                    <h2 className="card-title text-xl font-semibold">Pere</h2>
                                    {/* <h4 className="text-lg text-gray-600">Operations Manager</h4> */}
                                    {/* <p className="text-gray-500">Ensuring seamless day-to-day operations.</p> */}
                                </div>
                            </div>
                        </Link>
                        {/* Member 5 */}
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <div className="card bg-base-100 w-80 md:w-72 lg:w-80 shadow-2xl mx-auto border-2 border-blue-600 flex flex-col">
                                <figure className="px-10 pt-10">
                                    <Image
                                        src="/150.svg"
                                        width="4000"
                                        height="1000"
                                        alt="Pere Aspinall"
                                        className="rounded-full h-28 w-28 transform transition-transform duration-300 hover:scale-110"
                                    />
                                </figure>
                                <div className="card-body flex-grow items-center text-center">
                                    <h2 className="card-title text-xl font-semibold">Fer</h2>
                                    {/* <h4 className="text-lg text-gray-600">Creative Designer</h4> */}
                                    {/* <p className="text-gray-500">Bringing ideas to life with stunning visuals.</p> */}
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* Group Photo */}
                    <div className="text-center mt-10">
                        <Image
                            src="/150.svg"
                            width="1200"
                            height="800"
                            alt="Team Group Photo"
                            className="rounded-lg shadow-xl mx-auto w-[80%] md:w-[60%]"
                        />
                    </div>
                </section>

            </section>
        </div>
    );
};

export default Team;