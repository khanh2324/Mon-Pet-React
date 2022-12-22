import classNames from "classnames/bind";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import styles from "./FooterContent.module.scss";
import Image from "~/components/Image";
import images from "~/assets/images";
import { Link } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);

const LIST_PAGE_FOOTER = [
    {
        title: "Giới thiệu",
        href: config.routes.introduce
    },
    // added when there is a new page
    {
        title: "Chính sách bảo mật",
        href: config.routes.introduce
    },
    {
        title: "Điều khoản dịch vụ",
        href: config.routes.introduce
    },
    {
        title: "Liên hệ",
        href: config.routes.introduce
    },
];

function FooterContent() {

    const renderItems = () => {
        return LIST_PAGE_FOOTER.map((item, index) => {
            return (
                <li className={cx("footer-list-page-item")}>
                    <Link
                        to={item.href}
                        className={cx("footer-list-page-link")}
                    >
                        {item.title}
                    </Link>
                </li>
            )
        })
    }

    return (
        <div className={cx("footer__content")}>
            <Container>
                <Row className={cx("footer__content-container")}>
                    <Col md={4} sm={12}>
                        <div className={cx("footer__content-logo")}>
                            <Image src={images.logoFooter} />
                        </div>
                        <div className={cx("footer__content-text")}>
                            <i>
                                Mon’s Pet là cổng thông tin khổng lồ và hoàn
                                toàn miễn phí về các vấn đề xung quanh thú cưng
                                và động vật
                            </i>
                        </div>
                    </Col>

                    <Col md={4} sm={12} className={cx("footer-list-page")}>
                        <div className={cx("footer-page-header")}>
                            Danh Sách Trang
                        </div>
                        <ul className={cx("footer-page-list")}>
                            {renderItems()}
                        </ul>

                        <div className={cx("footer-page-license")}>
                            @Bản quyền bài viết thuộc về Monspet.com
                        </div>
                        <a href="https://bom.so/4ag7h9" className={cx("footer-page-license-img")}>
                            <Image src={images.logoSecondaryFooter} />
                        </a>
                    </Col>

                    <Col md={4} sm={12} className={cx("footer-link-page")}>
                        <div className={cx("footer-page-header")}>
                            Link Fanpage Facebook
                        </div>
                        <iframe 
                            width="320" 
                            height="252" 
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmonspet&tabs=timeline&width=320&height=252&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=348469316742429" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen>
                        </iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterContent;
