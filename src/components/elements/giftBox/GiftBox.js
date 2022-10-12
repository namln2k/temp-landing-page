import React from 'react';
import './gift_box.scss';

const GiftBox = (props) => {
    return (
        <div className="giftbox">
            <div className="box">
                <div className="box-body shaking">
                    <div className="box-content">{props.children}</div>
                    <div className="box-lid">
                        <div className="box-bowtie"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftBox;
