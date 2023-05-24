import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-5/12 my-8'>
            <p className='text-yellow-600 mb-2'>{heading}</p>
            <p className='text-3xl uppercase border-y-4 py-4'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;