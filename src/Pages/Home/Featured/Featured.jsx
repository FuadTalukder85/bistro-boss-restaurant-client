import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className='featured-itam bg-fixed text-white pt-8 my-20'>
            <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}></SectionTitle>
            
            <div className='md:flex justify-center items-center py-20 px-36 pt-12 gap-7'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;