import React from 'react';
import './main.scss'
import TopProduct from "./topProduct/TopProduct";
import BestSelling from "./bestSelling/BestSelling";
import FooterAbout from "./footer-about/FooterAbout";



const Main = () => {

    return (
        <div className={'main'}>
            <TopProduct />
            <BestSelling />
            <FooterAbout/>
        </div>
    );
};

export default Main;