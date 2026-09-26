import { FaExternalLinkAlt, FaFileAlt, FaGraduationCap, FaSchool } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';

const Education = () => {
    return (
        <div id='education' className='max-w-7xl mx-5 sm:mx-auto pt-10 md:pt-30 my-40'>
            {/* title */}
            <div className='mb-8'>
                <h2 className=' text-2xl font-bold flex items-center gap-2 border-b w-fit pb-2 text-white'>
                    <IoSchool />Education
                </h2>
            </div>

             <div className='transition-transform duration-300 ease-out hover:scale-102 active:scale-90 rounded-sm p-6 flex items-center justify-between'>
            <div>
                <div className='flex items-center gap-2 text-sm mb-2'>
                    <FaGraduationCap />
                    <span>2024 - 2027</span>
                </div>
                <h3 className='font-bold text-xl'>
                    Bachelor of Science in Computer Science & Engineering
                </h3>
                <a href='https://metrouni.edu.bd/' target='_blank' className='flex items-center gap-2 text-sm mt-1'>
                   <FaSchool /> <p>Metropolitan University, Sylhet</p>  <FaExternalLinkAlt size={12} />
                </a>
            </div>

            <div className='flex flex-col items-end gap-2'>
                <div className='rounded-lg px-4 py-2 font-semibold text-sm'>
                    Current CGPA 3.70/4.00
                </div>
                <div className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm'>
                    <FaFileAlt />
                    Yet to receive
                </div>
            </div>
        </div>
        </div>
    );
};

export default Education;