import classNames from "classnames/bind";
import styles from "./Friends.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "~/components/Image";
import images from "~/assets/images";

const cx = classNames.bind(styles);

const LIST_FRIEND = [
    {
        title: 'Mèo',
        image: images.catFriend,
    },
    {
        title: 'Hamster',
        image: images.hamsterFriend,
    },
    {
        title: 'Chó',
        image: images.dogFriend,
    },
    {
        title: 'Chim',
        image: images.birdFriend,
    },
]

function Friends() {
    const renderItems = () => {
        return LIST_FRIEND.map((item, index) => {
            return (
                <Col lg={3} md={6} sm={12} className={cx("friends-img")}>
                    <Image 
                        src={item.image}
                    />
                    <div className={cx("friends__name-item")}> <i>{item.title}</i></div>
                </Col>
            )
        })
    }

    return ( 
        <div className={cx("friends")}>
                <Container>
                    <div className={cx("friends__heading")}>
                        <h2 className={cx("friends__header")}>Những người bạn</h2>
                        <div className={cx("friends__heading-text")}>Mon’s Pet .Com cung cấp những bài viết thông tin chủ yếu cho 4 loại thú cưng rất thường gặp và là những người bạn thân thiết dễ dàng bắt gặp tại mỗi gia đình người Việt chúng ta. Đó là: Chó, Mèo, Chim và Hamster.</div>
                        <div className={cx("friends__heading-text")}>Ngoài ra chúng tôi vẫn có 1 số bài viết về những loại động vật khác nhưng sẽ ít hơn.</div>
                    </div>

                    <Row className={cx("friends__wrap")}>
                        {renderItems()}
                    </Row>
                </Container>
        </div>
    );
}

export default Friends;