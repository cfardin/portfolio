import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const HeroBanner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center container mx-auto'>
            {/* <h2>this is HeroBanner</h2> */}
            <HeroLeft></HeroLeft>
            <HeroRight></HeroRight>
        </div>
    );
};

export default HeroBanner;