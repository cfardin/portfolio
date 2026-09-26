// // import React from 'react';
// import { FaCode } from 'react-icons/fa';
// // import { skillsData } from '../skillsInfo';
// import { SkillsInfo } from '../constants';

// const Skills = () => {

//     console.log(SkillsInfo);
//     return (
//         <div className='container mx-auto my-20'>

//             {/* title */}
//             <div>
//                 <h2 className='text-2xl font-bold flex items-center gap-2'><FaCode /> Skills</h2>
//             </div>
//             {/* card */}
//             <div className='border rounded-sm p-10'>
//                 <div className='grid grid-cols-8 gap-5 '>
//                     {
//                         skillsInfo.map()
//                     }

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Skills;

import { FaCode } from 'react-icons/fa';
import { SkillsInfo } from '../constants';

const Skills = () => {
    return (
        <div id='skills' className='max-w-7xl mx-auto pt-30 my-40'>
            <div className='mb-8'>
                <h2 className='text-2xl font-bold flex items-center gap-2 border-b w-fit pb-2 text-white'>
                    <FaCode /> Skills & Tech Stack
                </h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {SkillsInfo.map((category) => (
                    <div
                        key={category.title}
                        className='transition-transform duration-300 ease-out hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:border-cyan-50 bg-[#0b111f] border border-gray-700 rounded-xl p-6'
                    >
                        <h3 className=' font-semibold text-lg mb-4'>
                            {category.title}
                        </h3>

                        <div className='grid grid-cols-2 gap-3'>
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className=' bg-[#111824] rounded-lg flex flex-col items-center justify-center gap-2 py-4'
                                >
                                    <img src={skill.logo} alt={skill.name} className='w-8 h-8 object-contain' />
                                    <span className='text-gray-300 text-xs text-center'>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;