import React from 'react';
import './full_page_loader.scss';
import Logo from '../../../assets/images/logoVIT.png';

const FullPageLoader = ({ hide }) => {
    return (
        <div className={`loader ${hide ? 'hide' : ''}`}>
            <img src={Logo} alt="logo" />
        </div>
    );
};

export default FullPageLoader;
