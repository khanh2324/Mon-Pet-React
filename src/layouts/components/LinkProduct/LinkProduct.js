import classNames from "classnames/bind";
import styles from "./LinkProduct.module.scss";

import config from "~/config";
import Button from "~/components/Button";
import Image from "~/components/Image";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function LinkProduct() {
    return (
        <div className={cx("link__product")}>
            <div className={cx("row col link__product-container")}>
                <div className={cx("col l-6 c-12 link__product-wrap")}>
                    <a href="" className={cx("link__product-logo")}>
                        {/* <img src="./assets/img/logo/aeon_eshop.png" alt=""> */}
                    </a>
                    <div className={cx("link__product-heading")}>
                        <h3 className={cx("link__product-header")}>
                            Đồ dùng Pet Độc lạ
                        </h3>
                    </div>
                    <div className={cx("link__product-text")}>
                        Tham khảo thêm nhiều đồ dùng pet, nhà cửa, đệm lót, sửa
                        tắm, thức ăn chó, mèo chính hãng{" "}
                        <span>hay ho, độc lạ</span> tại AEON-ESHOP
                    </div>
                    <div className={cx("link__product-btn")}>
                        <a
                            href=""
                            className={cx(
                                "link__product-btn_click btn-invalid"
                            )}
                        >
                            Click đây
                        </a>
                    </div>
                </div>

                <div className={cx("col l-6 c-12 link__product-wrap")}>
                    <a href="" className={cx("link__product-logo")}>
                        {/* <img src="./assets/img/logo/lazada.png" alt=""> */}
                    </a>
                    <div className={cx("link__product-heading")}>
                        <h3 className={cx("link__product-header")}>
                            Đồ dùng Chăm sóc thú cưng
                        </h3>
                    </div>
                    <div className={cx("link__product-text")}>
                        Xem thêm nhiều đồ dùng pet, đồ dùng chăm sóc thú cưng,
                        thuốc, vòng cổ và nhiều thức ăn khô, đóng hộp có{" "}
                        <span>giá rẻ</span> tại Lazada
                    </div>
                    <div className={cx("link__product-btn")}>
                        <a href="" className={cx("link__product-btn_click")}>
                            Click đây
                        </a>
                    </div>
                </div>
            </div>
            <div class="link__product-text-about">
                <i>
                    (Mua hàng online tại đây là lợi nhuận và động lực rất lớn để
                    Mon’s Pet cung cấp nhiều nội dung chất lượng hơn)
                </i>
            </div>
        </div>
    );
}

export default LinkProduct;
