import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";


import styles from "./NewsPost.module.scss";
import RenderPost from "~/components/RenderPost";
import RenderSocial from "~/components/RenderSocial";

const cx = classNames.bind(styles);

const NEWS_POST = [
    {
        id: 1,
        title: "Top 13 Thức Ăn Cho Chó Trưởng Thành & Chó Con Phổ Biến Hiện Nay",
        image: "https://monspet.com/wp-content/uploads/2021/07/thuc-an-cho-cho-min-768x723.png"
    },
    {
        id: 2,
        title: "Top 9 Thức Ăn Cho Mèo Trưởng Thành & Mèo Con Tốt Nhất Hiện Nay",
        image: "https://monspet.com/wp-content/uploads/2021/07/top-9-thuc-an-cho-meo-768x555.png",
    },
    {
        id: 3,
        title: "Ký Sinh Trùng Máu Hemotropic Mycoplasmas Ở Chó Mèo",
        image: "https://monspet.com/wp-content/uploads/2021/04/Hemotropic-Mycoplasmas-768x384.png",
    },
    {
        id: 4,
        title: "Ký Sinh Trùng Máu Babesiosis Ở Chó Mèo Và Những Động Vật Khác",
        image: "https://monspet.com/wp-content/uploads/2021/02/ky-sinh-trung-mau-Babesiosis-768x384.png",
    },
    {
        id: 5,
        title: "Ký Sinh Trùng Máu Cytauxzoonosis Ở Mèo",
        image: "https://monspet.com/wp-content/uploads/2021/02/Cytauxzoonosis-768x384.png",
    },
    {
        id: 6,
        title: "6 Vấn Đề Sức Khỏe, Các Bệnh Phổ Biến Nhất Ở Mèo",
        image: "https://monspet.com/wp-content/uploads/2021/02/monspet.com_-1-768x384.png",
    },
];

const LIST_SOCIAL = [
    { 
        href: "https://www.facebook.com/monspet/",
        icon: faFacebook,
        name: "facebook",
    },
    { 
        href: "https://twitter.com/MonsPetblog",
        icon: faTwitter,
        name: "twitter",
    },
    { 
        href: "https://www.pinterest.com/monspetblog/",
        icon: faPinterest,
        name: "pinterest",
    },
    { 
        href: "https://www.linkedin.com/company/mon-s-pet/",
        icon: faLinkedin,
        name: "linkedin",
    },
]

function NewsPost() {
    return ( 
        <div className={cx("new__posts")}>
                <div className={cx("new__posts-heading")}>
                    <Container>
                        <div className={cx("new__posts-heading-wrap")}>
                            <h2 className={cx("new__posts-header")}>Những bài viết mới nhất</h2>
                            <div className={cx("new__posts-header-text")}>Dưới đây là những bài viết mới nhất về Kinh nghiệm, kiến thức chăm sóc thú cưng tại website Mon’s Pet .Com</div>
                            <div className={cx("new__posts-header-text")}>Xem thêm tại: <Link>Chuyên mục thú cưng</Link></div>
                        </div>
                    </Container>
                </div>
                <Container>
                    <RenderPost items={NEWS_POST}/>
                    <RenderSocial items={LIST_SOCIAL}/>
                </Container>
        </div>
    );
}

export default NewsPost;