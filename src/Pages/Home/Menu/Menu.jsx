import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shares/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"}></Cover>
            {/* Main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* Offers menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert menu items */}
            <MenuCategory items={dessert} img={dessertImg} title="dessert"></MenuCategory>
            {/* Pizza menu items */}
            <MenuCategory items={pizza} img={pizzaImg} title="pizza"></MenuCategory>
            {/* Salad menu items */}
            <MenuCategory items={salad} img={saladImg} title={"salad"}></MenuCategory>
            {/* Soups menu items */}
            <MenuCategory items={soup} img={soupImg} title={"soup"}></MenuCategory>
        </div>
    );
};

export default Menu;