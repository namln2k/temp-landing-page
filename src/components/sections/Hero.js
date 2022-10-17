import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Modal from '../elements/Modal';
import WonderfulButton from '../elements/wonderfulButton/WonderfulButton';
import SimpleSlide from '../elements/simpleSlide/SimpleSlide';
import image1 from '../../assets/images/hero-slide-image-01.jpg';
import image2 from '../../assets/images/hero-slide-image-02.jpg';
import image3 from '../../assets/images/hero-slide-image-03.jpg';
import image4 from '../../assets/images/hero-slide-image-04.jpg';
import image5 from '../../assets/images/hero-slide-image-05.jpg';
import image6 from '../../assets/images/hero-slide-image-06.jpg';
import image7 from '../../assets/images/hero-slide-image-07.jpg';
import image8 from '../../assets/images/hero-slide-image-08.jpg';
import image9 from '../../assets/images/hero-slide-image-09.jpg';
import logoVIT from '../../assets/images/logoVIT.png';

const propTypes = {
    ...SectionProps.types
};

const defaultProps = {
    ...SectionProps.defaults
};

const Hero = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {
    const [videoModalActive, setVideomodalactive] = useState(false);
    const {
        captain,
        celebrationDay,
        description,
        email,
        facebook,
        fullEnglishName,
        fullVietnameseName,
        reference,
        shorthandName,
        songs,
        viceCaptain,
        youtube
    } = props.info;

    const openModal = (e) => {
        e.preventDefault();
        setVideomodalactive(true);
    };

    const closeModal = (e) => {
        e.preventDefault();
        setVideomodalactive(false);
    };

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    return (
        <section className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <div className="slide-wrapper"></div>
                        <SimpleSlide
                            images={[image1, image2, image3, image4, image6, image7, image8, image9]}
                        ></SimpleSlide>
                        
                    </div>
                    {/* anh bi vo */}
                    
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        >
                            {fullVietnameseName}
                        </h1>
                        <div className="container-sm">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                {description}
                            </p>
                            
                            <div
                                className="reveal-from-bottom"
                                data-reveal-delay="600"
                            >
                                
                                <WonderfulButton href="#" target={null}>
                                    Đăng ký ngay
                                </WonderfulButton>
                            </div>
                        </div>
                    </div>
                    <Modal
                        id="video-modal"
                        show={videoModalActive}
                        handleClose={closeModal}
                        video="https://player.vimeo.com/video/174002812"
                        videoTag="iframe"
                    />
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
