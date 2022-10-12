import React from 'react';
import './simple_slide.scss';

const SimpleSlide = (props) => {
    const images = props.images;

    return (
        <div className="slide">
            {images.map((image, index) => {
                return (
                    <div
                        className={`image image${index + 1}`}
                        style={{
                            backgroundImage: `url(${image})`,
                            animationDelay: `${index * 4}s`
                        }}
                        key={index}
                    ></div>
                );
            })}
        </div>
    );
};

export default SimpleSlide;
