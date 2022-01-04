import React from 'react';
import About from '../About/About';
import Price from '../Price/Price';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';
import WashingPoints from '../WashingPoints/WashingPoints';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Services></Services>
            <Price></Price>
            <Team></Team>
            <Testimonials></Testimonials>
            <WashingPoints></WashingPoints>
        </div>
    );
};

export default Home;