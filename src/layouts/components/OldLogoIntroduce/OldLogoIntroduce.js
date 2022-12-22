import classNames from "classnames/bind";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import styles from "./OldLogoIntroduce.module.scss";
import Image from "~/components/Image";
import images from "~/assets/images";

const cx = classNames.bind(styles);


function OldLogoIntroduce() {
    return (
        <Container>
            <Row className={cx('wrap')}>
                <Col sm={12} className={cx('title')}>
                    <span>2 Mẫu logo (cũ) thuộc về Monspet.com</span>
                </Col>
                <Col md={6} sm={12} className={cx('old-logo')}>
                    <Image src={images.logoOldOne}/>
                </Col>
                <Col md={6} sm={12} className={cx('old-logo')}>
                    <Image src={images.logoOldTwo}/>
                </Col>
                <Col sm={12} className={cx('title')}>
                    <span>2 Mẫu logo (cũ) thuộc về Monspet.com</span>
                </Col>
                <Col sm={12} className={cx('title')}>
                    <Image src={images.logoFooter}/>
                </Col>
            </Row>
        </Container>
    );
}

export default OldLogoIntroduce;
