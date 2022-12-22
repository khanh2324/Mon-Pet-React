import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./LinkProduct.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import config from "~/config";
import Button from "~/components/Button";
import Image from "~/components/Image";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function LinkProduct() {
    return (
        <Container className={cx("link__product")}>
            <Row className={cx("link__product-container")}>
                <Col sm={12} md={6} className={cx("link__product-wrap")}>
                    <Link to={config.routes.news} className={cx("link__product-logo")}>
                        <Image
                            src={images.logoAEON}
                            alt="AEON"
                        />
                    </Link>
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
                        <Button className={cx('invalid')} href="https://bom.so/Q2SCfh">
                            Click đây
                        </Button>
                    </div>
                </Col>

                <Col sm={12} md={6} className={cx("link__product-wrap")}>
                    <Link to={config.routes.news} className={cx("link__product-logo")}>
                        <Image
                            src={images.logoLazada}
                            alt="AEON"
                        />
                    </Link>
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
                        <Button href="https://bom.so/D2oyiU">
                            Click đây
                        </Button>
                    </div>
                </Col>
            </Row>
            <div className={cx('link__product-text-about')}>
                <i>
                    (Mua hàng online tại đây là lợi nhuận và động lực rất lớn để
                    Mon’s Pet cung cấp nhiều nội dung chất lượng hơn)
                </i>
            </div>
        </Container>
    );
}

export default LinkProduct;
