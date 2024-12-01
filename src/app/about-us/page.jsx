
import Image from 'next/image';
import { FaArrowDown } from "react-icons/fa6";


const page = () => {

    return (
        <div data-aos="fade-down">
            {/* hero section */}
            <section className={`pt-40 h-[600px] lg:h-screen relative overflow-hidden text-white`} >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-fixed bg-center bg-gradient-to-r from-[#800080] to-[#0000FF]"></div>

                {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

                {/* Content container */}
                <div className="relative h-[80%] flex flex-col justify-center items-center text-center px-4 space-y-6">
                    {/* Logo - Larger than text */}
                    <div className="pb-10">

                        <Image
                            src="/fimage.png"
                            width="4000"
                            height="1000"
                            alt=""
                            className="w-40 h-20 md:w-52 md:h-24 lg:w-64 lg:h-28"
                        />

                    </div>

                    {/* Text - Positioned lower and slightly smaller than the image */}
                    <div className='md:w-[80%] mx-auto'>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Insomnia Lab</h1>
                        <p className="text-lg md:text-xl mb-6 text-center">Redefining digital-first ventures for a brighter future.</p>

                    </div>
                    <div className='pt-10'>
                        <FaArrowDown className={`p-2 rounded-full text-4xl bounce`} />
                    </div>
                </div>

            </section>

            {/* Mission section */}
            <section className='max-w-7xl mx-auto my-10 lg:my-20 text-[#333333]' data-aos="zoom-in">
                <h3 className='font-bold text-3xl md:text-4xl text-center text-blue-600'>Our Mission</h3>
                <div className='w-[80%] mx-auto mt-10'>
                    <p className='text-base md:text-lg max-w-5xl mx-auto text-justify'>Insomnia Lab empowers bold brands to thrive by blending innovation, strategy, and investment. We aim to shape the future of fashion and lifestyle with visionary entrepreneurs.</p>
                </div>
                {/* </div> */}

            </section>

            {/* value section */}
            <section className="my-10 lg:my-20 bg-white">
                <h2 className="text-center font-bold text-3xl md:text-4xl text-blue-600">Our Values</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16 w-[80%] md:w-[100%] lg:w-[80%] mx-auto">
                    {/* 1st */}
                    <div className="flex items-center  gap-4 bg-gray-50 p-4 rounded-lg border border-blue-600 shadow-md">
                        <div className="text-3xl">🌟</div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Exclusivity</h3>
                            <p className="text-gray-600">We select only the boldest ideas.</p>
                        </div>
                    </div>
                    {/* 2nd */}
                    <div className="flex items-center  gap-4 bg-gray-50 p-4 rounded-lg border border-blue-600 shadow-md">
                        <div className="text-3xl">🛡️</div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Authenticity</h3>
                            <p className="text-gray-600">We stay true to our partners and mission.</p>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className="flex items-center  gap-4 bg-gray-50 p-4 rounded-lg border border-blue-600 shadow-md">
                        <div className="text-3xl">🤝</div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Community</h3>
                            <p className="text-gray-600">Collaboration is at the heart of everything we do.</p>
                        </div>
                    </div>
                    {/* 4th */}
                    <div className="flex items-center  gap-4 bg-gray-50 p-4 rounded-lg border border-blue-600 shadow-md">
                        <div className="text-3xl">💖</div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Cercanía</h3>
                            <p className="text-gray-600">We build meaningful, long-term relationships.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* team */}
            <section className='my-10 lg:my-20'>
                <h2 className="text-center text-blue-600 font-bold text-3xl md:text-4xl">Meet Our Team</h2>

                <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 my-10 lg:my-16">
                    <div className="card bg-base-100 w-80 md:w-72 lg:w-80 shadow-2xl mx-auto border-2 border-blue-600 flex flex-col">
                        <figure className="px-10 pt-10">
                            <Image
                                src="/150.svg"
                                width="4000"
                                height="1000"
                                alt="icon_about_1"
                                className="rounded-full h-28 w-28 transform transition-transform duration-300 hover:scale-110"
                            />
                        </figure>
                        <div className="card-body flex-grow items-center text-center">
                            <h2 className="card-title text-xl font-semibold">Name</h2>
                            <h4 className="text-lg text-gray-600">Role</h4>
                            <p className='text-gray-500'>Founder with a vision for innovation.</p>                            
                        </div>
                    </div>
                    <div className="card bg-base-100 w-80 md:w-72 lg:w-80 shadow-2xl mx-auto border-2 border-blue-600 flex flex-col">
                        <figure className="px-10 pt-10">
                            <Image
                                src="/150.svg"
                                width="4000"
                                height="1000"
                                alt="icon_about_1"
                                className="rounded-full h-28 w-28 transform transition-transform duration-300 hover:scale-110"
                            />
                        </figure>
                        <div className="card-body flex-grow items-center text-center">
                            <h2 className="card-title text-xl font-semibold">Name</h2>
                            <h4 className="text-lg text-gray-600">Role</h4>
                            <p className='text-gray-500'>Founder with a vision for innovation.</p>
                            
                        </div>
                    </div>
                    <div className="card bg-base-100 w-80 md:w-72 lg:w-80 shadow-2xl mx-auto border-2 border-blue-600 flex flex-col">
                        <figure className="px-10 pt-10">
                            <Image
                                src="/150.svg"
                                width="4000"
                                height="1000"
                                alt="icon_about_1"
                                className="rounded-full h-28 w-28 transform transition-transform duration-300 hover:scale-110"
                            />
                        </figure>
                        <div className="card-body flex-grow items-center text-center">
                            <h2 className="card-title text-xl font-semibold">Name</h2>
                            <h4 className="text-lg text-gray-600">Role</h4>
                            <p className='text-gray-500'>Founder with a vision for innovation.</p>
                            
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};


export default page;

