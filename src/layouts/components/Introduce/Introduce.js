import classNames from "classnames/bind";
import styles from "./Introduce.module.scss";

import config from "~/config";
import Button from "~/components/Button";
import Image from "~/components/Image";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Introduce() {
    return ( 
        <div className={cx('introduce')}>
            <div className={cx("introduce__header")}>
                <h2>Giới thiệu</h2>
            </div>
            <div className={`row col ` + cx("introduce__container")}>
                <div className={`col l-6 m-12 c-12 ` + cx("introduce__content")}>
                    <div className={cx("introduce__content-wrap")}>
                        <div className={cx("introduce__content-text")}>
                            <span><strong>Mon’s Pet</strong> được xây dựng dựa trên tiêu chí là cổng thông tin khổng lồ và hoàn toàn miễn phí về các vấn đề xung quanh động vật , đặc biệt là thú cưng, cụ thể như các bệnh về chó mèo, các thực phẩm dinh dưỡng dành cho thú cưng, cách chăm sóc và điều trị bệnh cho chó mèo...</span>
                        </div>
                        <div className={cx("introduce__content-text")}>
                            <span>Tất cả những thông tin tại Monspet được sưu tầm và tham khảo từ nhiều nguồn khác nhau có chọn lọc, bên cạnh đó còn là trải nghiệm thực tế của chúng tôi trong quá trình nuôi thú cưng để đem đến cho độc giả những thông tin chính xác và hữu ích nhất.</span>
                        </div>
                    </div>
                </div>

                <div className={`col l-6 m-12 c-12 ` + cx("introduce__img")}>
                    <div className={cx("introduce__img-wrap")}>
                        <Image
                            src={images.introduceHome}
                            alt="Introduce"
                        />
                    </div>
                </div>
            </div>

            <div className={cx("btn-detail")}>
                <Button rounded href={config.routes.introduce} >Chi Tiết</Button>
            </div>
        </div>
    );
}

export default Introduce;