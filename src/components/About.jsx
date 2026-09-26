// import { BsDiscord, BsPersonRaisedHand } from "react-icons/bs";
// import GithubActivity from "./GithubActivity";
// import { SiGmail } from "react-icons/si";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const About = () => {
//     return (
//         <div
//             id="about"
//             className="container mx-5 sm:mx-auto pt-10 md:pt-30 my-40"
//         >
//             {/* Title */}
//             <div>
//                 <h2 className="text-2xl font-bold flex items-center mx-auto gap-2 border-b w-fit pb-2 text-white">
//                     <BsPersonRaisedHand />
//                     About Me
//                 </h2>
//             </div>

//             {/* Content */}
//             <div className="flex flex-col items-center">
//                 <div className="flex justify-between items-center gap-5 mt-10 pb-10">
//                     <div className="max-w-4xl px-20 mx-auto text-gray-300 leading-7 text-sm sm:text-base">
//                         <p>
//                             Hi, I'm <span className="text-white font-semibold">Fardin</span>,
//                             a Computer Science & Engineering student and a developer who
//                             enjoys building apps and solving problems with code.
//                         </p>

//                         <p className="mt-5">
//                             I'm mainly focused on <span className="text-white">backend and
//                             full-stack development</span>, working with technologies like
//                             Node.js, Express.js, MongoDB, PostgreSQL, React, and Next.js.
//                             I enjoy building things from scratch, learning how systems work,
//                             and turning ideas into real applications.
//                         </p>

//                         <p className="mt-5">
//                             Outside of development, I spend time with competitive programming,
//                             exploring new technologies, and working on personal and university
//                             projects. I'm currently focused on becoming a better software
//                             engineer one project at a time.
//                         </p>
//                     </div>
//                     <div className="flex flex-col gap-5 text-4xl">
//                         <a className="transition-transform duration-200 ease-out hover:scale-105 active:scale-95" href={"https://github.com/cfardin"} target="blank"><FaGithub /></a>
//                         <a className="transition-transform duration-200 ease-out hover:scale-105 active:scale-95" href={"https://www.linkedin.com/in/cfardin/"} target="blank"><FaLinkedin /></a>
//                         <a className="transition-transform duration-200 ease-out hover:scale-105 active:scale-95" href={"/"} target="blank"><SiGmail /></a>
//                         <a className="transition-transform duration-200 ease-out hover:scale-105 active:scale-95" href={"/"} target="blank"><BsDiscord /></a>
//                     </div>
//                 </div>

//                 <div>   
//                     <GithubActivity></GithubActivity>
//                 </div>
//             </div>
           
           
//         </div>
//     );
// };

// export default About;



import { BsDiscord, BsPersonRaisedHand } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import GithubActivity from "./GithubActivity";

const About = () => {
    return (
        <section
            id="about"
            className="container mx-auto px-5 pt-10 md:pt-30 my-40"
        >
            {/* Title */}
            <div className="flex justify-center">
                <h2 className="text-2xl font-bold flex items-center gap-2 border-b w-fit pb-2 text-white">
                    <BsPersonRaisedHand />
                    About Me
                </h2>
            </div>

            {/* About Card */}
            <div className="mt-12 max-w-5xl mx-auto">
                <div className="border border-gray-800 rounded-sm backdrop-blur-sm overflow-hidden">

                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-800">
                        <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500/70"></span>

                        <span className="ml-3 text-xs text-gray-500 font-mono">
                            fardin@portfolio:~$ whoami
                        </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row gap-10 p-6 sm:p-8 md:p-10">

                        {/* Bio */}
                        <div className="flex-1 text-gray-300 leading-7 text-sm sm:text-base">

                            <p>
                                Hi, I'm{" "}
                                <span className="text-white font-semibold">
                                    Fardin
                                </span>
                                , a Computer Science & Engineering student and
                                a developer who enjoys building apps and solving
                                problems with code.
                            </p>

                            <p className="mt-5">
                                I'm mainly focused on{" "}
                                <span className="text-white font-semibold">
                                    backend and full-stack development
                                </span>
                                , working with technologies like{" "}
                                <span className="text-gray-200">
                                    Node.js, Express.js, MongoDB, PostgreSQL,
                                    React, and Next.js.
                                </span>
                            </p>

                            <p className="mt-5">
                                I enjoy building things from scratch, learning
                                how systems work, and turning ideas into real
                                applications.
                            </p>

                            {/* Tech Stack */}
                            <div className="mt-7">
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                                    Currently working with
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Node.js",
                                        "Express.js",
                                        "MongoDB",
                                        "PostgreSQL",
                                        "React",
                                        "Next.js",
                                        "TypeScript",
                                    ].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full border border-gray-700 bg-gray-900 text-xs text-gray-300 hover:border-gray-500 hover:text-white transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="md:w-32 flex md:flex-col items-center justify-center gap-4">

                            <a
                                href="https://github.com/cfardin"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="group p-3 rounded-xl border border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:border-gray-600 hover:-translate-y-1 transition-all duration-200"
                            >
                                <FaGithub className="text-2xl" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/cfardin/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="group p-3 rounded-xl border border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:border-gray-600 hover:-translate-y-1 transition-all duration-200"
                            >
                                <FaLinkedin className="text-2xl" />
                            </a>

                            <a
                                href="mailto:your-email@gmail.com"
                                aria-label="Email"
                                className="group p-3 rounded-xl border border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:border-gray-600 hover:-translate-y-1 transition-all duration-200"
                            >
                                <SiGmail className="text-2xl" />
                            </a>

                            <a
                                href="#"
                                aria-label="Discord"
                                className="group p-3 rounded-xl border border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:border-gray-600 hover:-translate-y-1 transition-all duration-200"
                            >
                                <BsDiscord className="text-2xl" />
                            </a>

                        </div>
                    </div>
                </div>

                {/* GitHub Activity */}
                <div className="mt-8 border border-gray-800 rounded-sm p-5 sm:p-8 overflow-x-auto">

                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-gray-500">
                                Activity
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-1">
                                GitHub Contributions
                            </h3>
                        </div>

                        <span className="text-xs text-gray-600 font-mono">
                            @cfardin
                        </span>
                    </div>

                    <GithubActivity />
                </div>
            </div>
        </section>
    );
};

export default About;