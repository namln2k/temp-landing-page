import React, { useState, useEffect } from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import axios from 'axios';
import { apiUrl } from '../contexts/constants';

const Home = () => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        const loadInfo = async () => {
            const response = await axios.get(`${apiUrl}/vit`);

            if (response.data.success) {
                setInfo(response.data.data[0]);
            }
        };

        loadInfo();
    }, []);

    return (
        <>
            <Hero className="illustration-section-01" info={info} />
            <FeaturesTiles />
            <FeaturesSplit
                invertMobile
                topDivider
                imageFill
                className="illustration-section-02"
            />
            <Testimonial topDivider />
            <Cta split />
        </>
    );
};

export default Home;
