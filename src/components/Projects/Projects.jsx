import { FaRegFolderOpen } from "react-icons/fa";
import { projects } from '../../constants';

const Projects = () => {

    // console.log(projects);
    return (
        <div id="projects" className="max-w-7xl mx-5 sm:mx-auto pt-10 md:pt-30 my-40">
            {/* title */}
            <div>
                <h2 className="text-2xl font-bold flex items-center gap-2 border-b w-fit pb-2 text-white">
                    <FaRegFolderOpen/> Projects
                </h2>
            </div>

            {/* projects */}
            <div>
                <div className="mt-10">
                    {
                        projects.map((p, i) => <div key={i}>
                            <div className="transition-transform duration-300 ease-out hover:scale-105 active:scale-95 flex justify-between items-center gap-8 border-b mb-5">
                                <div>
                                    <h2 className="font-semibold text-xl mb-2">{p.title}</h2>
                                    <p className="mb-2 text-gray-300">{p.description}</p>
                                    <div className="flex gap-3 mt-2 mb-5">
                                        {
                                            p.technologies.map((t, i) => <div key={i} className="border rounded-2xl text-xs p-1 bg-gray-950">{t}</div>)
                                        }
                                    </div>
                                     <div className="flex gap-5 text-sm mt-5">
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            className="transition-transform duration-300 ease-out hover:scale-105 active:scale-95 border p-2 rounded-sm font-medium hover:bg-white hover:text-black ">
                                            Github
                                        </a>
                                        {
                                            p.liveDemo ? <a
                                                        href={p.liveDemo}
                                                        target="_blank"
                                                        className ="transition-transform duration-300 ease-out hover:scale-105 active:scale-95 border p-2 rounded-sm font-medium hover:bg-white hover:text-black ">
                                                        Live link
                                                        </a> : ""
                                        }
                                        
                                    </div>
                                </div>
                                {/* image */}
                                <a href={p.liveDemo || p.github} target="_blank" className="transition-transform duration-300 ease-out hover:scale-105 active:scale-95 my-8">
                                    <div className="hover-3d">
                                        {/* content */}
                                        <figure className="w-[380px] h-55 shrink-0 rounded-2xl overflow-hidden">
                                            <img src={p.image} alt={p.title}  className="w-full h-full object-cover" />
                                        </figure>
                                        {/* 8 empty divs needed for the 3D effect */}
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </a>
                                
                            </div>
                            
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;
