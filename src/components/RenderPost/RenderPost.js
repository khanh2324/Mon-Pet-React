import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './RenderPost.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "~/components/Image";

const cx = classNames.bind(styles);

function RenderPost({ items = []}) {
    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <Col lg={4} md={6} sm={12} key={index} className={cx("new__post-content-item")}>
                    <div className={cx("new__post-content-item-heading")}>
                        {/* bổ sung href sau */}
                        <Link className={cx("new__post-content-item-header")}>
                            {item.title}
                        </Link>
                    </div>
                    <Link className={cx("new__post-content-item-img")}>
                        <Image src={item.image} />
                    </Link>
                </Col>
            )
        })
    }
    return ( 
        <Row className={cx("new__post-content")}>
            {renderItems()}
        </Row>
    );
}

RenderPost.propTypes = {
    items: PropTypes.array,
}
export default RenderPost;



