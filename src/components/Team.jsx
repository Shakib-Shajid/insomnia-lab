import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLinkedin } from "react-icons/ci";


const teamMembers = [
    { name: 'Marco', image: '/marco.jpg', link: 'https://www.linkedin.com/in/marcopozzibcn/', width: "48" },
    { name: 'Javier', image: '/javier.jpg', link: 'https://www.linkedin.com/in/jdrocafort/', width: "48" },
    // { name: 'Xandro', image: '/alejandro_rodríguez.jpg', link: 'https://www.linkedin.com/in/alejandro-rodr%C3%ADguez-cabrera-/' },
    { name: 'Alejandro', image: '/xandro.jpg', link: 'https://www.linkedin.com/in/alejandro-rodr%C3%ADguez-cabrera-/', width: "48" },
    { name: 'Fernando', image: '/fernando.jpg', link: 'https://www.linkedin.com/in/fernando-abella-garc%C3%ADa-b9a02aa/', width: "44" },
    { name: 'Pere', image: '/pere.jpg', link: 'https://www.linkedin.com/in/pereaspinall/', width: "44" },
];

const Team = () => {
    return (
        <section className="my-10 lg:my-20">
            <h2 className="text-center text-blue-600 font-bold text-2xl md:text-3xl">Founding Gang</h2>
            <p className="w-[80%] mx-auto mt-10 text-base md:text-lg text-center">
                A team of 5 global workaholics disrupting the fashion and entertainment industries
            </p>
            <div className="w-[80%] mx-auto my-10 lg:my-16 flex flex-wrap justify-center gap-5">
                {teamMembers.map((member, index) => (
                    <Link key={index} href={member.link} target="_blank" aria-label={`Visit ${member.name}'s LinkedIn profile`}>
                        <div className="card w-80 md:w-72 lg:w-80 custom_1080:w-64 custom_1280:w-80 shadow-2xl mx-auto flex flex-col hover:shadow-white">
                            {/*  border-2 border-blue-600  */}
                            <figure className="pt-10">
                                <Image
                                    src={member.image}
                                    width={208}
                                    height={208}
                                    alt={member.name}
                                    className={`h-52 w-48 md:w-${member.width} rounded-xl`}
                                // transform transition-transform duration-300 hover:scale-110
                                />
                            </figure>
                            <div className="card-body flex-grow items-center text-center">
                                <h2 className="card-title text-xl font-semibold">< CiLinkedin className='text-2xl transform transition-transform duration-300 hover:scale-125' />{member.name}</h2>
                            </div>
                            {/* <div className='flex justify-center'>
                                <button className='btn mx-auto w-[50%]'>Linkedin</button>
                            </div> */}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Team;
