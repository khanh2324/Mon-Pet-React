import classNames from "classnames/bind";
import styles from "./Slider.module.scss";


import Image from "~/components/Image";
import images from "~/assets/images";


const cx = classNames.bind(styles);

function Silder() {
    return ( 
        <div className={cx('slider')}>
            <Image 
                className={cx('slider-image')}
                src={images.uploadSlider}
                alt=""
            />
            <div className={cx("slider-text")}>
                <h1 className={cx("slider-text-heading")}>Mon's Pet</h1>
                <div className={cx("slider-text-content")}>Cổng thông tin miễn phí về động vật, thú cưng</div>
            </div>
        </div>
     );
}

export default Silder;
