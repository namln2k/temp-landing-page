import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
    ...SectionTilesProps.types
};

const defaultProps = {
    ...SectionTilesProps.defaults
};

const Testimonial = ({
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
    const outerClasses = classNames(
        'testimonial section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'testimonial-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

    const sectionHeader = {
        title: 'Một góc Humans of VIT',
        paragraph:
            'Nơi tôn vinh những con người đầy nhiệt huyết, luôn luôn cống hiến hết mình và có những đóng góp cũng như để lại nhiều ấn tượng sâu sắc trong lòng tất cả thành viên của Đội.'
    };

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader
                        data={sectionHeader}
                        className="center-content reveal-from-bottom"
                        data-reveal-value="40px"
                        data-reveal-delay="800"
                    />
                    <div className={tilesClasses}>
                        <div
                            className="tiles-item reveal-from-right"
                            data-reveal-delay="400"
                        >
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <div className="image image1"></div>
                                    <div className="box quote">
                                        <i className="fas fa-quote-left fa2"></i>
                                        <div className="text">
                                            <i className="fas fa-quote-right fa1"></i>
                                            <div>
                                                <p>
                                                    Mình vẫn luôn muốn câu khẩu
                                                    hiệu Đội là thứ mà ai đã và
                                                    đang là thành viên của VIT
                                                    sẽ không bao giờ quên.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <div className="text-color-low">
                                        <span>
                                            <a
                                                href="#"
                                            >
                                                <b>Phạm Minh Hiệp</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="testimonial-item-name text-color-high">
                                        Cựu Đội trưởng VIT - K63
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tiles-item reveal-from-right"
                            data-reveal-delay="400"
                        >
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <div className="image image2"></div>
                                    <div className="box quote">
                                        <i className="fas fa-quote-left fa2"></i>
                                        <div className="text">
                                            <i className="fas fa-quote-right fa1"></i>
                                            <div>
                                                <p>
                                                    Niềm vui lớn nhất của mình
                                                    là thấy mọi người cùng trải
                                                    nghiệm các hoạt động mình tổ
                                                    chức, dù nhiều lúc không như
                                                    mong đợi nhưng thấy mọi
                                                    người vui là mình thích lắm
                                                    rồi
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <div className="text-color-low">
                                        <span>
                                            <a
                                                href="#"
                                            >
                                                <b>Nguyễn Hoàng Anh</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="testimonial-item-name text-color-high">
                                        Cựu Mảng trưởng phong trào - K64
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tiles-item reveal-from-right"
                            data-reveal-delay="400"
                        >
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <div className="image image3"></div>
                                    <div className="box quote">
                                        <i className="fas fa-quote-left fa2"></i>
                                        <div className="text">
                                            <i className="fas fa-quote-right fa1"></i>
                                            <div>
                                                <p>
                                                    Sở thích là tắm nắng vào
                                                    những ngày mưa, ăn trưa vào
                                                    lúc trời tối, sở trường của
                                                    anh là ngủ và song song với
                                                    đó thì sở đoản của anh là
                                                    HỌC.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <div className="text-color-low">
                                        <span>
                                            <a
                                                href="#"
                                            >
                                                <b>Đinh Văn Tân</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="testimonial-item-name text-color-high">
                                        Cựu Đội phó - K64
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tiles-item reveal-from-left"
                            data-reveal-delay="400"
                        >
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <div className="image image4"></div>
                                    <div className="box quote">
                                        <i className="fas fa-quote-left fa2"></i>
                                        <div className="text">
                                            <i className="fas fa-quote-right fa1"></i>
                                            <div>
                                                <p>
                                                    Chị từng coi Đội là tất cả.
                                                    Chị tìm được niềm vui khi
                                                    được đóng góp những thứ nhỏ
                                                    bé. Chị cảm thấy chị không
                                                    vô dụng khi tham gia hoạt
                                                    động. Chị cảm thấy luôn có
                                                    những người bạn tuyệt vời ở
                                                    bên.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <div className="text-color-low">
                                        <span>
                                            <a href="#">
                                                <b>Lê Thị Kim Dung</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="testimonial-item-name text-color-high">
                                        Tình nguyện viên - K62
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tiles-item reveal-from-left"
                            data-reveal-delay="400"
                        >
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <div className="image image5"></div>
                                    <div className="box quote">
                                        <i className="fas fa-quote-left fa2"></i>
                                        <div className="text">
                                            <i className="fas fa-quote-right fa1"></i>
                                            <div>
                                                <p>
                                                    Dù nhiệm kỳ của mình không
                                                    có chung kết trà đá, nhưng
                                                    mình nghĩ mình đã xóa bỏ
                                                    được suy nghĩ sợ thua của
                                                    mọi người. Chúng ta thực sự
                                                    đã mạnh hơn về mảng văn nghệ
                                                    rất nhiều, đặc biệt là mảng
                                                    dance.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <div className="text-color-low">
                                        <span>
                                            <a href="#">
                                                <b>Lê Xuân Huế</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="testimonial-item-name text-color-high">
                                        Chủ nhiệm CLB VIT Dancer - K64
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tiles-item reveal-from-left"
                            data-reveal-delay="400"
                        >
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <div className="image image6"></div>
                                    <div className="box quote">
                                        <i className="fas fa-quote-left fa2"></i>
                                        <div className="text">
                                            <i className="fas fa-quote-right fa1"></i>
                                            <div>
                                                <p>
                                                    Mình chúc thế hệ sau mạnh
                                                    hơn thế hệ trước, luôn giữ
                                                    được nhiệt của tuổi trẻ,
                                                    chất của VIT; để VIT mãi mãi
                                                    là family.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <div className="text-color-low">
                                        <span>
                                            <a href="#">
                                                <b>Phạm Thị Hồng Nhung</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="testimonial-item-name text-color-high">
                                        Tình nguyện viên - K63
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

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
