
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowDown } from "react-icons/fa6";


const page = () => {

    return (
        <div data-aos="fade-down">
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

        </div>
    );
};

export default page;

