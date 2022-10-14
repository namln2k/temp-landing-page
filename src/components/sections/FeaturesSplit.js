import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
    ...SectionSplitProps.types
};

const defaultProps = {
    ...SectionSplitProps.defaults
};

const FeaturesSplit = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {
    const outerClasses = classNames(
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
    );

    const sectionHeader = {
        title: 'Các hoạt động nổi bật trong năm học',
        paragraph:
            'Thành viên của VIT tham gia lập kế hoạch và thực hiện nhưng chương trình hoạt động mang tính chất hướng tới cộng đồng, tập trung tới đối tượng có hoàn cảnh khó khăn(trẻ em khuyết tật, mồ côi,…) hay tới những miền quê nghèo của tổ quốc, hướng sinh viên tới các hoạt động xã hội, tình nguyện vì cộng đồng, suy nghĩ tích cực và rèn luyện bản thân tránh xa các tệ nạn xã hội.'
    };

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader
                        data={sectionHeader}
                        className="center-content"
                    
                    />
                    <div className={splitClasses}>
                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    VIT & VSOFL
                                </div>
                                <h3 className="mt-0 mb-12">Xuân Yêu Thương</h3>
                                <p className="m-0">
                                    Chiến dịch Tình nguyện mùa đông "Xuân Yêu
                                    Thương" là chiến dịch tình nguyện do Đội
                                    Sinh viên Tình nguyện Viện Ngoại ngữ cùng
                                    với Đội Sinh viên Tình nguyện Viện Công nghệ
                                    thông tin & Truyền thông - Trường Đại học
                                    Bách khoa Hà Nội (nay là Trường CNTT&TT) kết
                                    hợp với nhau để cùng đặt chân đến những miền
                                    đất mới, lan toả yêu thương đến mọi người,
                                    đồng thời mang đến một cái Tết ấm áp cho
                                    những mảnh đời khó khăn, bất hạnh…💖
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom paddingRight50 paddingLeft50',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item"
                            >
                                <Image
                                    src={require('./../../assets/images/features-split-image-01.JPG')}
                                    alt="Features split 01"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>

                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-right"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    VIT
                                </div>
                                <h3 className="mt-0 mb-12">Mùa hè xanh</h3>
                                <p className="m-0">
                                    Mùa Hè Xanh là chương trình tình nguyện được
                                    diễn ra trong mùa hè, là một hoạt động vô
                                    cùng ý nghĩa của các bạn sinh viên tình
                                    nguyện . Nó không chỉ đơn thuần là một
                                    chuyến đi dài mà còn là một chuỗi các hoạt
                                    động xã hội mang ý nghĩa lớn lao và tính
                                    nhân văn sâu sắc. Một mùa hoa phượng nở nữa
                                    lại đến, chúng tôi- Đội SVTN Viện Công nghệ
                                    Thông tin và Truyền thông, Trường Đại học
                                    Bách khoa Hà Nội, lại hăng hái khoác lên
                                    mình chiếc áo xanh, đem sức trẻ, lòng nhiệt
                                    huyết và tinh thần tình nguyện. 💖
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom paddingLeft50 paddingRight50',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item"
                            >
                                <Image
                                    src={require('./../../assets/images/features-split-image-02.JPG')}
                                    alt="Features split 02"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>

                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    VIT
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Dạy học ở Nhà Trẻ Hữu Nghị Quận Đống Đa
                                </h3>
                                <p className="m-0">
                                    Đây là một trong những hoạt động thường niên
                                    và quan trọng với các tình nguyện viên của
                                    Đội SVTN Viện Công nghệ thông tin và Truyền
                                    thông. Ở đây các tình nguyện viên được đăng
                                    kí đi dạy, bạn sẽ biết thêm về khả năng sư
                                    phạm của mình, đồng thời giúp đỡ các em với
                                    độ tuổi từ tiểu học đến THCS có hoàn cảnh
                                    đặc biệt làm bài tập trên lớp, hướng dẫn để
                                    các em học tập tiến bộ hơn, vui chơi sau
                                    những giờ học căng thẳng. 💖
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom paddingRight50 paddingLeft50',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item"
                            >
                                <Image
                                    src={require('./../../assets/images/features-split-image-03.JPG')}
                                    alt="Features split 03"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
