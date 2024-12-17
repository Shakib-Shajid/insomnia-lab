
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
                    
                    {/* Text - Positioned lower and slightly smaller than the image */}
                    <div className='md:w-[80%] mx-auto space-y-9 pt-20'>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Insomnia Lab</h1>
                        <p className="text-lg md:text-xl mb-6">Insomnia Lab is the first investment fund that holds a portfolio of the most promising emerging brands within the fashion & entertainment industries.
                            We provide funding, strategic guidance, and connections with industry leaders to help startups grow and find potential buyers in the coming years. </p>
                    </div>
                    <div className='pt-10 md:pt-20 lg:pt-40'>
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
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-blue-600 shadow-md">
                        <div className="text-3xl">🚀</div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Bold Innovation</h3>
                            <p className="text-gray-600">We push boundaries and drive transformative ideas.</p>
                        </div>
                    </div>
                    {/* 2nd */}
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-blue-600 shadow-md">
                        <div className="text-3xl">📈</div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Strategic Growth</h3>
                            <p className="text-gray-600">We cultivate sustainable progress and success.</p>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-blue-600 shadow-md">
                        <div className="text-3xl">🏆</div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Industry Leadership</h3>
                            <p className="text-gray-600">We set standards and lead with integrity and expertise.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* team */}
            <section className='my-10 lg:my-20'>

                <section className="my-10 lg:my-20 bg-white">
                    <h2 className="text-center text-blue-600 font-bold text-3xl md:text-4xl">Meet The Team</h2>
                    <div className='w-[80%] mx-auto mt-10'>
                        <p className='text-base md:text-lg text-center'>At Insomnia Lab, our team combines young energy and veteran experience to drive success.</p>
                    </div>
                    <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 my-10 lg:my-16">
                        {/* Member 1 */}
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
                                <h2 className="card-title text-xl font-semibold">Javier de Rocafort</h2>
                                <h4 className="text-lg text-gray-600">Founder & CEO</h4>
                                <p className="text-gray-500">Visionary leader with a passion for innovation.</p>
                            </div>
                        </div>
                        {/* Member 2 */}
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
                                <h2 className="card-title text-xl font-semibold">Fernando Abella</h2>
                                <h4 className="text-lg text-gray-600">CTO</h4>
                                <p className="text-gray-500">Driving technological innovation and excellence.</p>
                            </div>
                        </div>
                        {/* Member 3 */}
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
                                <h2 className="card-title text-xl font-semibold">Marco Pozzi</h2>
                                <h4 className="text-lg text-gray-600">Marketing Director</h4>
                                <p className="text-gray-500">Crafting impactful campaigns with creativity.</p>
                            </div>
                        </div>
                        {/* Member 4 */}
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
                                <h2 className="card-title text-xl font-semibold">Xandro Pepitovic</h2>
                                <h4 className="text-lg text-gray-600">Operations Manager</h4>
                                <p className="text-gray-500">Ensuring seamless day-to-day operations.</p>
                            </div>
                        </div>
                        {/* Member 5 */}
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
                                <h2 className="card-title text-xl font-semibold">Pere Aspinall</h2>
                                <h4 className="text-lg text-gray-600">Creative Designer</h4>
                                <p className="text-gray-500">Bringing ideas to life with stunning visuals.</p>
                            </div>
                        </div>
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


export default page;

