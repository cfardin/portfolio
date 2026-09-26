import 'react';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const text = `    __  ___         ____                      ______               ___     
   / / / (_)       /  _/  ____ _____ ___     / ____/___ __________/ (_)___ 
  / /_/ / /        / /   / __ \`/ __ \`__ \\   / /_  / __ \`/ ___/ __  / / __ \\
 / __  / /  _    _/ /   / /_/ / / / / / /  / __/ / /_/ / /  / /_/ / / / / /
/_/ /_/_/  ( )  /___/   \\__,_/_/ /_/ /_/  /_/    \\__,_/_/   \\__,_/_/_/ /_/ 
           |/    `;


const HeroLeft = () => {
    return (
        <div className="w-full p-10 space-y-2">
            <pre className="font-mono text-[8px] sm:text-xs leading-tight whitespace-pre overflow-x-auto">
                {text}
            </pre>
            <p className="font-semibold text-2xl">
                Software Developer & Web Developer
            </p>
            <div className="flex gap-5 text-xl mt-3">
                <button
                    className="transition-transform duration-300 ease-out hover:scale-105 active:scale-95 border p-2 rounded-sm font-medium hover:bg-white hover:text-black ">
                    Contact Me
                </button>
                <button className ="transition-transform duration-300 ease-out hover:scale-105 active:scale-95 border p-2 rounded-sm font-medium hover:bg-white hover:text-black ">
                    My Resume
                </button>
            </div>

            {/* links */}
            <div className="flex gap-3 mt-5 text-2xl">
                <a className="transition-transform duration-200 ease-out hover:scale-105 active:scale-95" href={"https://github.com/cfardin"} target="blank"><FaGithub /></a>
                <a className="transition-transform duration-200 ease-out hover:scale-105 active:scale-95" href={"https://www.linkedin.com/in/cfardin/"} target="blank"><FaLinkedin /></a>
                <a className="transition-transform duration-200 ease-out hover:scale-105 active:scale-95" href={"/"} target="blank"><SiGmail /></a>
            </div>
        </div>
    );
};

export default HeroLeft;