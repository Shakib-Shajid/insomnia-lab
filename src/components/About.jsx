// import Image from 'next/image';
// import React from 'react';

// const About = () => {
//     return ( 
//         <div className='max-w-7xl mx-auto py-10 ' id="about" data-aos="zoom-in">
//             <h3 className='text-blue-600 font-bold text-2xl md:text-3xl text-center'>Who We Are</h3>
//             <div className='w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center' data-aos="fade-right">
//                 <div className='w-[80%] lg:ml-10 space-y-3'>
//                     <p className='text-base md:text-lg max-w-5xl mx-auto'>Insomnia Lab is the first platform redefining digital native brands. We partner with entrepreneurs and investors to create the future of fashion and leisure.</p>
//                 </div>
//                 <Image src="/400x300.svg" width="4000" height="1000" alt="" className='w-[80%] md:w-[80%] lg:w-full mx-auto h-72' />
//             </div>

//         </div>
//     );
// };

// export default About;




import Image from 'next/image';
import React from 'react';

const About = () => {

    const contentBlocks = [
        {
            icon: "/rocket.png",
            text: "Cherry-picking the best and most disruptive companies within fashion and entertainment, preferably at their early stages",
            textColor: "text-neon-green",
            padding: ""
        },
        {
            icon: "/gear.png",
            text: "Assisting the needs and operations of the companies picked by us",
            textColor: "text-neon-green",
            padding: "4"
        },
        {
            icon: "/tree.png",
            text: "We provide funding, strategic guidance, and access to a network of industry leaders to help the right companies thrive",
            textColor: "text-neon-green",
            padding: ""
        },
    ];

    return (
        <section className="bg-black py-16 my-10">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex flex-wrap flex-col lg:flex-row justify-center md:justify-between gap-8">
                    {contentBlocks.map((block, index) => (
                        <div
                            key={index}
                            className="card bg-gradient-to-t from-black to-[#36454F] w-80 lg:w-96 mx-auto shadow-xl flex flex-col items-center text-center space-y-4"
                        >
                            <figure className={`mt-4 group relative p-${block.padding}`}>
                                <Image
                                    src={block.icon}
                                    alt="icon"
                                    width="100"
                                    height="100"
                                    className="w-full h-full transition duration-300 ease-in-out group-hover:opacity-70"
                                />
                            </figure>

                            <div className="card-body">
                                <h2
                                    className={`card-title font-bold uppercase ${block.textColor}`}
                                    style={{
                                        fontFamily: "Montserrat, sans-serif",
                                    }}
                                >
                                    {block.text}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

