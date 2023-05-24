import React from 'react';
import orderCover from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shares/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
// import FoodCard from '../../../components/FoodCard/FoodCard';
import OrderTabs from './OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Order Food</title>
            </Helmet>
            <Cover img={orderCover} title="order food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs items={salad}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={pizza}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={soup}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={dessert}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={drinks}></OrderTabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;