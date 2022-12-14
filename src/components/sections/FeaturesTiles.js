import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import GiftBox from '../elements/giftBox/GiftBox';
import SimpleSlide from '../elements/simpleSlide/SimpleSlide';
import image1 from '../../assets/images/feature-tile-slide-image-01.jpg';
import image2 from '../../assets/images/feature-tile-slide-image-02.jpg';
import image3 from '../../assets/images/feature-tile-slide-image-03.jpg';
import image4 from '../../assets/images/feature-tile-slide-image-04.jpg';
import image5 from '../../assets/images/feature-tile-slide-image-05.jpg';

const propTypes = {
    ...SectionTilesProps.types
};

const defaultProps = {
    ...SectionTilesProps.defaults
};
const FeaturesTiles = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
}) => {
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

    const outerClasses = classNames(
        'features-tiles section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-tiles-inner section-inner pt-0 has-top-divider',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap center-content',
        pushLeft && 'push-left'
    );

    const sectionHeader = {
        title: 'Giới thiệu về Đội'
    };

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader
                        data={sectionHeader}
                        className="center-content reveal-from-bottom"
                        data-reveal-value="20px"
                        data-reveal-delay="400"
                    />
                    <div className={tilesClasses}>
                        <div className="tiles-item tile1 reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-01.svg')}
                                            alt="Features tile icon 01"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">Các tên gọi</h4>
                                    <div className="m-0 text-sm">
                                        <ul>
                                            <li>
                                                <b>Tên đầy đủ:</b>{' '}
                                                {fullVietnameseName}
                                            </li>
                                            <li>
                                                <b>Tên viết tắt:</b>{' '}
                                                {shorthandName}
                                            </li>
                                            <li>
                                                <b>Tên tiếng Anh:</b>{' '}
                                                {fullEnglishName}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="tiles-item tile2 reveal-from-bottom"
                            data-reveal-delay="400"
                        >
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-03.svg')}
                                            alt="Features tile icon 03"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Ngày truyền thống của Đội
                                    </h4>
                                    <p className="m-0 text-sm">
                                        <b>21/09</b> chính là ngày truyền thống
                                        của VIT. Thú vị hơn là, ngày này hàng
                                        năm còn là Sinh nhật Đội.
                                    </p>
                                    {/* <GiftBox>
                                        <div className="birthday-title">
                                            Sinh nhật Đội
                                        </div>
                                        <SimpleSlide
                                            images={[
                                                image1,
                                                image2,
                                                image3,
                                                image4,
                                                image5
                                            ]}
                                        ></SimpleSlide>
                                    </GiftBox> */}
                                </div>
                            </div>
                        </div>

                        <div
                            className="tiles-item tile3 reveal-from-bottom"
                            data-reveal-delay="200"
                        >
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-02.svg')}
                                            alt="Features tile icon 02"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                </div>

                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Các bài hát truyền thống
                                    </h4>
                                    <div className="m-0 text-sm">
                                        <ul>
                                            {songs?.map((song, index) => {
                                                return (
                                                    <li key={index}>{song}</li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item tile4 reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-04.svg')}
                                            alt="Features tile icon 04"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Cơ cấu tổ chức của Đội
                                    </h4>
                                    <div className="m-0 text-sm">
                                        <ul>
                                            <li>
                                                Đội được quản lý bởi 1 Đội
                                                trưởng và 2 Đội phó, Mảng trưởng
                                                của 4 Mảng và Chủ nhiệm của 3
                                                Câu lạc bộ
                                            </li>
                                            <li>
                                                Chi tiết xem tại đây:{' '}
                                                <a href="https://www.facebook.com/267010383431070/posts/pfbid026T5nwiTJD5oPs1xiYr6g6XaKmuY1j5LEZywwb5iCCGK7RQQideEP7UPeHc7qZuWml/">
                                                    <b>
                                                        BAN QUẢN LÝ NHIỆM KỲ
                                                        2021-2022
                                                    </b>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item tile5 reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-04.svg')}
                                            alt="Features tile icon 04"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Hoạt động truyền thống
                                    </h4>
                                    <div className="m-0 text-sm">
                                        <ul>
                                            <li>
                                                Hàng tuần, Đội tổ chức dạy học
                                                tại{' '}
                                                <a href="http://huunghidongda.org.vn/">
                                                    <b>
                                                        Nhà Trẻ Hữu Nghị Quận
                                                        Đống Đa
                                                    </b>
                                                </a>
                                            </li>
                                            <li>
                                                Mỗi dịp cận Tết, Đội cũng thực
                                                hiện chiến dịch{' '}
                                                <b>Xuân Yêu Thương</b>, nhằm lan
                                                tỏa không khí của một mùa xuân
                                                ấm áp, một cái Tết vẹn tròn đến
                                                những vùng cao, vùng xa
                                            </li>
                                            <li>
                                                Và chiến dịch lớn nhất trong năm
                                                - <b>Mùa Hè Xanh</b>: Dưới sự
                                                chỉ đạo của Đoàn thanh niên và
                                                Hội sinh viên ĐHBKHN, hàng trăm
                                                thành viên của Đội mang sức trẻ
                                                và nhiệt huyết đi giúp đỡ cho
                                                những hoàn cảnh còn nhiều khó
                                                khăn, thiếu thốn trên khắp cả
                                                nước.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="tiles-item tile6 reveal-from-bottom"
                            data-reveal-delay="400"
                        >
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-06.svg')}
                                            alt="Features tile icon 06"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Các cổng thông tin chính thức
                                    </h4>
                                    <div className="m-0 text-sm">
                                        <ul>
                                            <li>
                                                E-mail:{' '}
                                                <a
                                                    href={`mailto:${email}`}
                                                    target="blank"
                                                >
                                                    <b>{email}</b>
                                                </a>
                                            </li>
                                            <li>
                                                Youtube:{' '}
                                                <a
                                                    href={youtube}
                                                    target="blank"
                                                >
                                                    <b>
                                                        {' '}
                                                        Trường CNTT&TT Đội SVTN
                                                    </b>
                                                </a>
                                            </li>
                                            <li>
                                                Facebook:{' '}
                                                <a
                                                    href={facebook}
                                                    target="blank"
                                                >
                                                    <b>
                                                        {' '}
                                                        Đội Tình nguyện Trường
                                                        Công nghệ Thông tin và
                                                        Truyền thông
                                                    </b>
                                                </a>
                                            </li>
                                            <li>
                                                Fanpage:{' '}
                                                <a
                                                    href={facebook}
                                                    target="blank"
                                                >
                                                    <b>
                                                        {' '}
                                                        Đội Tình nguyện Trường
                                                        Công nghệ Thông tin và
                                                        Truyền thông
                                                    </b>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
