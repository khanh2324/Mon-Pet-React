import classNames from "classnames/bind";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FooterContent from "~/layouts/components/FooterContent";


import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div>
            <FooterContent />
            <div className={cx("footer__ending")}>
                <Container>
                    <Row className={cx("footer__ending-container")}>
                        <Col md={6} sm={12} className={cx("footer__ending-copyright")}><span>Copyright © 2022</span> Monspet.com @All rights reserved</Col>
                        <Col md={6} sm={12}>
                            <ul className={cx("footer__ending-btn-list")}>
                                <li className={cx("footer__ending-item")}>
                                    <a href="https://www.facebook.com/monspet/" className={cx("footer__ending-link")}>Facebook</a>
                                </li>
                                <li className={cx("footer__ending-item")}>
                                    <a href="https://twitter.com/MonsPetblog" className={cx("footer__ending-link")}>Twitter</a>
                                </li>
                                <li className={cx("footer__ending-item")}>
                                    <a href="https://www.pinterest.com/monspetblog/" className={cx("footer__ending-link")}>Pinterest</a>
                                </li>
                                <li className={cx("footer__ending-item")}>
                                    <a href="https://www.linkedin.com/company/mon-s-pet/" className={cx("footer__ending-link")}>Linkedin</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Footer;