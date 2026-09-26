// import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const HeroBanner = () => {
    return (
        <div id='hero' className='flex flex-col md:flex-row justify-around items-center container mx-auto py-10 my-20'>
            {/* <h2>this is HeroBanner</h2> */}
            <HeroLeft></HeroLeft>
            <HeroRight></HeroRight>
        </div>
    );
};

export default HeroBanner;