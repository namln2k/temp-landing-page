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
                                            <a href="#">
                                                <b>Phạm Minh Hiệp</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="testimonial-item-name text-color-high">
                                        Đội trưởng VIT - K63
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
                                            <a href="#">
                                                <b>Nguyễn Hoàng Anh</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="testimonial-item-name text-color-high">
                                        Mảng trưởng phong trào - K64
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
                                                    Nếu vì mâu thuẫn, vì bất mãn
                                                    mà các bạn rời bỏ Đội, thì
                                                    các bạn phải sống cả đời với
                                                    những mâu thuẫn và bất mãn
                                                    đó. Có hèn đến mấy thì cũng
                                                    gồng mình lên mà giải quyết
                                                    vấn đề của các bạn.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <div className="text-color-low">
                                        <span>
                                            <a href="#">
                                                <b>Đinh Văn Tân</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="testimonial-item-name text-color-high">
                                        Đội phó - K64
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
                                                    Đội ngày càng lớn mạnh, áp
                                                    lực cho các mảng trưởng và
                                                    người quản lý cũng sẽ lớn
                                                    hơn. Anh mong các e cố gắng
                                                    giữ cho Đội càng gắn kết,
                                                    chấp hành nội quy, cương
                                                    lĩnh đã đề ra, tự hào khi
                                                    mặc chiếc áo xanh tình
                                                    nguyện của VIT.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <div className="text-color-low">
                                        <span>
                                            <a href="#">
                                                <b>Đào Nguyễn Tiến Huy</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="testimonial-item-name text-color-high">
                                        Mảng trưởng hành chính - K64
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
                                                    Anh tin rằng nếu các em có
                                                    trách nhiệm, nỗ lực, cố gắng
                                                    thì những đóng góp của các
                                                    em sẽ được ghi nhận và mang
                                                    lại thành công cho tương lai
                                                    của các em sau này.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <div className="text-color-low">
                                        <span>
                                            <a href="#">
                                                <b>Phạm Quang Hà</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="testimonial-item-name text-color-high">
                                        Chủ nhiệm CLB VIT MEDIA - K64
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
                                    <div className="image image7"></div>
                                    <div className="box quote">
                                        <i className="fas fa-quote-left fa2"></i>
                                        <div className="text">
                                            <i className="fas fa-quote-right fa1"></i>
                                            <div>
                                                <p>
                                                    Với anh kỷ niệm nào ở trong
                                                    VIT cũng đáng nhớ, nên là
                                                    nếu phải kể kỷ niệm đáng nhớ
                                                    nhất, có lẽ anh sẽ kể lại
                                                    toàn bộ khoảng thời gian 3
                                                    năm anh ở trong VIT cho đến
                                                    hiện giờ.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <div className="text-color-low">
                                        <span>
                                            <a href="#">
                                                <b>Vũ Đình Minh</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="testimonial-item-name text-color-high">
                                        Mảng trưởng truyền thông - K64
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
                                    <div className="image image8"></div>
                                    <div className="box quote">
                                        <i className="fas fa-quote-left fa2"></i>
                                        <div className="text">
                                            <i className="fas fa-quote-right fa1"></i>
                                            <div>
                                                <p>
                                                    Nhưng mà từ khi vào Đội ấy,
                                                    mình chưa bao giờ có cảm
                                                    giác lạc lõng luôn. Nói
                                                    chung giờ không biết nói gì
                                                    nhiều cái tốt quá. Chỉ có
                                                    tuyệt vời thôi thế nhé. Mong
                                                    các bạn vẫn giữ phong độ này
                                                    mãi mãi về sau
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <div className="text-color-low">
                                        <span>
                                            <a href="#">
                                                <b>Nguyễn Thu Hương</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="testimonial-item-name text-color-high">
                                        Mảng trưởng hậu cần - K64
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
