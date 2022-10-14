import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
};

const defaultProps = {
    ...SectionProps.defaults,
    split: false
};

const Cta = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    split,
    ...props
}) => {
    const outerClasses = classNames(
        'cta section center-content-mobile reveal-from-bottom',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'cta-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider',
        split && 'cta-split'
    );

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <div className="cta-slogan">
                        <h3 className="m-0">
                            Cảm thấy hứng thú? Hãy để lại thông tin liên lạc
                        </h3>
                    </div>
                    <div className="cta-action">
                        <div className="parent-wrapper">
                            <span className="close-btn glyphicon glyphicon-remove"></span>
                            <div className="subscribe-wrapper">
                                <input
                                    type="email"
                                    name="email"
                                    className="subscribe-input"
                                    placeholder="Email mà bạn hay dùng nhất"
                                />
                                <div className="submit-btn">Submit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
