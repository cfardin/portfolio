import {
    FaExternalLinkAlt,
    FaFileAlt,
    FaGraduationCap,
    FaSchool
} from 'react-icons/fa';

import { IoSchool } from 'react-icons/io5';

const Education = () => {

    return (

        <div
            id="education"
            className="max-w-7xl mx-5 sm:mx-auto pt-10 md:pt-30 my-40"
        >

            {/* title */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-2 border-b w-fit pb-2 text-white">
                    <IoSchool />
                    Education
                </h2>
            </div>

            <div className="transition-transform duration-300 ease-out hover:scale-102 active:scale-90 rounded-sm p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                {/* Education information */}
                <div className="w-full">

                    <div className="flex items-center gap-2 text-sm mb-2">
                        <FaGraduationCap />
                        <span>2024 - 2027</span>
                    </div>

                    <h3 className="font-bold text-xl">
                        Bachelor of Science in Computer Science & Engineering
                    </h3>

                    <a
                        href="https://metrouni.edu.bd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm mt-1"
                    >
                        <FaSchool />
                        <p>Metropolitan University, Sylhet</p>
                        <FaExternalLinkAlt size={12} />
                    </a>

                </div>

                {/* CGPA / Result */}
                <div className="flex flex-col items-start md:items-end gap-2 w-full md:w-auto">

                    <div className="rounded-lg px-4 py-2 font-semibold text-sm">
                        Current CGPA 3.70/4.00
                    </div>

                    <div className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm">
                        <FaFileAlt />
                        Yet to receive
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Education;