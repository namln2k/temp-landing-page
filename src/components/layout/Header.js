import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';

const propTypes = {
    navPosition: PropTypes.string,
    hideNav: PropTypes.bool,
    hideSignin: PropTypes.bool,
    bottomOuterDivider: PropTypes.bool,
    bottomDivider: PropTypes.bool
};

const defaultProps = {
    navPosition: '',
    hideNav: false,
    hideSignin: false,
    bottomOuterDivider: false,
    bottomDivider: false
};

const Header = ({
    className,
    navPosition,
    hideNav,
    hideSignin,
    bottomOuterDivider,
    bottomDivider,
    ...props
}) => {
    const [isActive, setIsactive] = useState(false);

    const nav = useRef(null);
    const hamburger = useRef(null);

    useEffect(() => {
        isActive && openMenu();
        document.addEventListener('keydown', keyPress);
        document.addEventListener('click', clickOutside);
        return () => {
            document.removeEventListener('keydown', keyPress);
            document.removeEventListener('click', clickOutside);
            closeMenu();
        };
    });

    const openMenu = () => {
        document.body.classList.add('off-nav-is-active');
        nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
        setIsactive(true);
    };

    const closeMenu = () => {
        document.body.classList.remove('off-nav-is-active');
        nav.current && (nav.current.style.maxHeight = null);
        setIsactive(false);
    };

    const keyPress = (e) => {
        isActive && e.keyCode === 27 && closeMenu();
    };

    const clickOutside = (e) => {
        if (!nav.current) return;
        if (
            !isActive ||
            nav.current.contains(e.target) ||
            e.target === hamburger.current
        )
            return;
        closeMenu();
    };

    const classes = classNames(
        'site-header',
        bottomOuterDivider && 'has-bottom-divider',
        className
    );

    return (
        <header {...props} className={classes}>
            <div className="container">
                <div
                    className={classNames(
                        'site-header-inner',
                        bottomDivider && 'has-bottom-divider'
                    )}
                >
                    <Logo />
                    {!hideNav && (
                        <>
                            <button
                                ref={hamburger}
                                className="header-nav-toggle"
                                onClick={isActive ? closeMenu : openMenu}
                            >
                                <span className="screen-reader">Menu</span>
                                <span className="hamburger">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                            <nav
                                ref={nav}
                                className={classNames(
                                    'header-nav',
                                    isActive && 'is-active'
                                )}
                            >
                                <div className="header-nav-inner">
                                    <ul
                                        className={classNames(
                                            'list-reset text-xs',
                                            navPosition &&
                                                `header-nav-${navPosition}`
                                        )}
                                    ></ul>
                                    {!hideSignin && (
                                        <ul className="list-reset header-nav-right">
                                            <li>
                                                <a href="#general-info">
                                                    Giới thiệu chung
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#main-activities">
                                                    Các hoạt động chính
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#featured-faces">
                                                    Humans of VIT
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2F1Inney24zECEnlQB0BJZzkiLOpZfz873ERVqsXMUm5XI%2Fedit%3Ffbclid%3DIwAR0ffqpwBo_kikEigy4E0YgVXzQwCB2sdsBv0kEJhuxM2qEucOOcsuW0yXQ&h=AT1nljIRVQp7YUxgKLwjzxPAg3T1A6_K0f698REhcGDILmita3TaOdpdouFlkTt81M2dzkJGBeyoIhw9Srbo2cUUp4YDYxwmEy2-orkCLSyh5gi2Uadi5F09vi76pQ"
                                                    target="_blank"
                                                >
                                                    Đăng ký ngay
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </nav>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
