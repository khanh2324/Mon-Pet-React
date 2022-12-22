import classNames from "classnames/bind";
import styles from "./Commit.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "~/components/Image";
import images from "~/assets/images";
const cx = classNames.bind(styles);

const LIST_COMMIT = [
    {
        title: "Nội dung",
        content: "Nội dung chất lượng, chính xác, có nguồn uy tín, có thú y xem xét.",
        logo: <Image src={images.penCommit}/>,
    },
    {
        title: "Sản phẩm",
        content: "Sản phẩm được gợi ý công bằng, được phân tích review chi tiết chính xác.",
        logo: <Image src={images.boxCommit}/>,
    },
    {
        title: "Hỗ trợ",
        content: "Hỗ trợ hết mình, hướng dẫn những nguồn khám bệnh thú cưng uy tín, chất lượng.",
        logo: <Image src={images.loaCommit}/>,
    },
];

function Commit() {

    const renderItems = () => {
        return LIST_COMMIT.map((item, index) => {
            return (
                <Col sm={12} md={4} key={index} className={cx("commit__content-wrap ")}>  
                    <div className={cx("commit__content-icon")}>
                        {item.logo}
                    </div>
                    <div className={cx("commit__content-header")}>{item.title}</div>
                    <div className={cx("commit__content-text")}>{item.content}</div>
                </Col>
            )
        })
    }

    return ( 
        <div className={cx("commit")}>
                <Container>
                    <div className={cx("commit__heading")}>
                        <h1 className={cx("commit-header")}>Cam kết</h1>
                        <div className={cx("commit-text")}>Mons’ Pet .Com được định hình là trang web thông tin hàng đầu về động vật, thú cưng. Chúng tôi cam kết tất cả nội dung cung cấp trên trang đều được trích dịch từ các nguồn web nước ngoài rõ ràng, có ý kiến và trích dẫn thú y. Từ đó mang lại những giải pháp chính xác nhất cho người xem.</div>
                    </div>

                    <Row className={cx("commit__content")}>
                        {renderItems()}
                    </Row>
                </Container>
            </div>
     );
}

export default Commit;