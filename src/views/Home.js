import React, { useState, useEffect } from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import axios from 'axios';
import { apiUrl } from '../contexts/constants';
import FullPageLoader from '../components/elements/fullPageLoader/FullPageLoader';

const Home = () => {
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadInfo = async () => {
            setLoading(true);

            
            try {
                const response = await axios.get(`${apiUrl}/vit`);

                if (response.data.success) {
                setInfo(response.data.data[0]);
            }
            } catch (error) {
                console.log(error)
            }
            finally {setLoading(false)};
            
        };
        
        loadInfo();
    }, []);

    return (
        <>
            
            <FullPageLoader hide={!loading}></FullPageLoader>
            <Hero className="illustration-section-01" info={info} />
            <FeaturesTiles info={info} id="general-info" />
            <FeaturesSplit
                invertMobile
                topDivider
                imageFill
                className="illustration-section-02"
                id="main-activities"
            />
            <Testimonial topDivider id="featured-faces" />
            <Cta split />
        </>
    );
};

export default Home;
